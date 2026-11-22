// Spam check for the contact form. Returns { spam: boolean, reasons: string[] }.
// Spam is dropped silently by app/api/contact/route.js: the sender is told it
// worked, but no notification or auto-reply goes out.
//
// A "hard" signal alone marks spam. Two or more "soft" signals also do.

// Link shorteners — real clients don't hide where a link goes.
const SHORTENERS = /\b(goo\.su|bit\.ly|tinyurl\.com|t\.co|cutt\.ly|is\.gd|v\.gd|rb\.gy|shorturl\.at|ow\.ly|clck\.ru|u\.to|tiny\.cc|rebrand\.ly|t\.me|telegra\.ph)\//i

// Phrases that only show up in junk.
const SPAM_PHRASES = /\b(casino|crypto|bitcoin|forex|viagra|cialis|porn|escort|loan offer|backlinks?|guest post|seo (services|ranking|package)|rank (your|you) (site|website)|first page of google|increase your traffic|web traffic|payday|betting|airdrop|you have won|claim your prize)\b/i

// Scripts the business never gets genuine enquiries in.
const FOREIGN_SCRIPT = /[Ѐ-ӿ぀-ヿ㐀-鿿가-힯฀-๿]/g

export function checkSpam({ name = '', email = '', message = '', elapsed, viaScript }) {
  const hard = []
  const soft = []
  const text = `${name} ${message}`

  // ── Hard signals ──────────────────────────────────────────────────────
  // Mostly Cyrillic / CJK / Korean / Thai.
  const letters = (text.match(/\p{L}/gu) || []).length
  const foreign = (text.match(FOREIGN_SCRIPT) || []).length
  if (letters && foreign / letters > 0.3) hard.push('foreign script')

  if (SHORTENERS.test(message)) hard.push('link shortener')
  if (SPAM_PHRASES.test(text)) hard.push('spam phrase')
  if (/https?:\/\/|www\./i.test(name)) hard.push('link in name')

  const links = (message.match(/https?:\/\/|www\./gi) || []).length
  if (links >= 3) hard.push('many links')

  // Filled in faster than a person can type (form script reports the time).
  if (typeof elapsed === 'number' && elapsed < 3000) hard.push('too fast')

  // ── Soft signals ──────────────────────────────────────────────────────
  if (links > 0) soft.push('has link')
  // A long random tracking token, e.g. "MTGJNF173651NFDAW".
  if (/\b(?=[A-Z0-9]*\d)(?=[A-Z0-9]*[A-Z])[A-Z0-9]{12,}\b/.test(message)) soft.push('random token')
  // JSON posted straight at the API, not through the site's form script.
  if (viaScript && typeof elapsed !== 'number') soft.push('no form timing')
  // Throwaway-looking address: long random local part ending in digits/noise.
  if (/^[a-z]+[a-z0-9]*\d[a-z0-9]{3,}@/i.test(email) && email.split('@')[0].length >= 14) soft.push('random email')

  const reasons = [...hard, ...soft]
  return { spam: hard.length > 0 || soft.length >= 2, reasons }
}

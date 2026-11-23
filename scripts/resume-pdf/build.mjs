// Prints scripts/resume-pdf/{resume,cv}.html to the PDFs served from /public, using the
// installed Google Chrome in headless mode (no npm dependency).
//   node scripts/resume-pdf/build.mjs
import { execFileSync } from 'node:child_process'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const here = path.dirname(fileURLToPath(import.meta.url))
const pub = path.join(here, '..', '..', 'public')
const chrome = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

for (const [html, pdf] of [['resume.html', 'Muhammad-Kashif-Resume.pdf'], ['cv.html', 'Muhammad-Kashif-CV.pdf']]) {
  execFileSync(chrome, [
    '--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=8000',
    `--print-to-pdf=${path.join(pub, pdf)}`,
    pathToFileURL(path.join(here, html)).href,
  ], { stdio: 'ignore' })
  console.log('wrote', pdf)
}

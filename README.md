# muhammadkashif.net — Next.js Portfolio Site

Brutalist black & white portfolio site for Muhammad Kashif, Amazon Brand Designer.
Fully migrated from WordPress — no PHP, no database, no hosting fees.

## Tech Stack
- Next.js 14 (App Router, Static Export)
- Tailwind CSS
- Space Mono + Bebas Neue fonts
- Web3Forms (contact form — free, no backend)
- Deploys free to Vercel

---

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## Contact Form Setup (One-time, Free)

The contact form uses Web3Forms to send emails without a backend.

1. Go to **https://web3forms.com** and enter `info@muhammadkashif.net`
2. You'll receive an **Access Key** in your email
3. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
4. Paste your access key into `.env.local`:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
   ```
5. On Vercel: go to **Project → Settings → Environment Variables** and add `NEXT_PUBLIC_WEB3FORMS_KEY`

---

## Deploy to Vercel (Free)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/muhammadkashif-net.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com
2. Click **Add New Project**
3. Import your GitHub repo
4. Framework: **Next.js** (auto-detected)
5. Add Environment Variable: `NEXT_PUBLIC_WEB3FORMS_KEY` = your key
6. Click **Deploy**

### Step 3: Add Your Domain
1. Vercel dashboard → **Settings → Domains**
2. Add `muhammadkashif.net`
3. Update your domain's DNS:
   - **A record** → `76.76.21.21`
   - **CNAME www** → `cname.vercel-dns.com`

Done — live in minutes, free forever.

---

## Site Structure

```
/                          → Homepage (Hero, About, Services, Portfolio, Testimonials, Contact)
/my-portfolio/             → Portfolio gallery
/blog/                     → Blog index
/blackdsn-portfolio/       → Individual portfolio case studies
/what-is-a-content/        → Blog post
/what-is-product-infographics/ → Blog post
/what-is-website/          → Blog post
/why-white-background-is-so-important-for-main-image-of-product/ → Blog post
/contact-me/               → Contact page
```

---

## Customization

- **Colors**: Edit `tailwind.config.js` → colors
- **Content**: Edit each component in `/components/`
- **Blog posts**: Edit `/data/blog.js`
- **Portfolio cases**: Edit `/data/portfolio.js`
- **Fonts**: Edit `app/globals.css` → @import line

# Jasper Moving — Website

A modern, SEO-optimized, static website for **Jasper Moving**, a moving company serving the Greater Toronto Area (GTA). No build step or framework required — plain HTML/CSS/JS.

## Structure

```
index.html            Home
services.html          Residential / commercial / long-distance / packing & storage
service-areas.html     GTA cities served, grouped by region
about.html              Company story, values, process
contact.html            Quote request form + contact details
css/styles.css          Shared design system
js/main.js              Mobile nav, form handling, footer year
assets/favicon.svg      Favicon / logo mark
robots.txt, sitemap.xml, site.webmanifest   SEO/PWA infrastructure
```

## ⚠️ Placeholders to replace before going live

This site ships with realistic **placeholder** business info — swap these out before launch:

| Placeholder | Found in | Replace with |
|---|---|---|
| `(647) 555-0123` | every page (header, footer, contact page) | Real phone number |
| `info@jaspermoving.com` | every page | Real email address |
| `https://jaspermoving.com` | canonical URLs, Open Graph tags, JSON-LD, `robots.txt`, `sitemap.xml` | Your actual domain |
| `#` social links (Facebook, Instagram, Google Reviews) in the footer | every page | Real profile URLs |
| Testimonials on the home page | `index.html` | Real customer quotes (with permission) |
| Illustrated SVG graphics (truck, boxes) | `index.html`, `about.html` | Real photos of your crew/trucks, if you have them |
| Business hours (Mon–Sat, 7 AM–8 PM) | every page | Your actual hours |

A quick way to update phone/email/domain everywhere at once:

```bash
grep -rl "555-0123" . --include="*.html" | xargs sed -i '' 's/(647) 555-0123/YOUR-PHONE/g'   # macOS
grep -rl "555-0123" . --include="*.html" | xargs sed -i 's/(647) 555-0123/YOUR-PHONE/g'       # Linux
```

(Do the same for `info@jaspermoving.com` and `jaspermoving.com`.)

The quote forms (home page hero + `contact.html`) submit via [Formspree](https://formspree.io) using AJAX (see `js/main.js`), so submissions land in the inbox tied to the Formspree form without leaving the page. The endpoint is hardcoded as `https://formspree.io/f/xppawjwg` in `index.html` and `contact.html` — if you ever recreate the Formspree form, update the `action` attribute on both `<form data-ajax ...>` elements to the new endpoint. Formspree's free tier caps at 50 submissions/month; upgrade if you outgrow it.

## SEO features included

- Unique, descriptive `<title>` and meta description per page
- Canonical URLs, Open Graph + Twitter Card meta tags
- `MovingCompany` (LocalBusiness) JSON-LD structured data with service area, hours, and contact info
- `BreadcrumbList` and `FAQPage` structured data
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`), one `<h1>` per page
- `robots.txt` + `sitemap.xml`
- Fully responsive, mobile-first layout with accessible skip link, focus states, and AA-contrast CTA buttons
- No heavy JS framework — fast load times out of the box

## Deploying with GitHub Pages

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save — your site will be live at `https://<username>.github.io/jasper-moving/` within a minute or two.
5. This repo already includes a `CNAME` file pointing at `jaspermoving.com` and all canonical/OG/JSON-LD URLs, `sitemap.xml`, and `robots.txt` reference that domain. See **Custom domain setup** below to connect it.

## Custom domain setup (jaspermoving.com)

1. **Buy the domain** from a registrar (Namecheap, Porkbun, Google Domains successor Squarespace, GoDaddy, etc.) — search `jaspermoving.com` and purchase it.
2. **Add DNS records** in your registrar's DNS settings:
   - Four `A` records for the apex domain (`jaspermoving.com`), all pointing to GitHub Pages' IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - One `CNAME` record for `www` pointing to `kiziltasbaris10.github.io`.
3. **Set the custom domain in GitHub**: repo → **Settings → Pages** → under **Custom domain**, enter `jaspermoving.com` → **Save**. (The `CNAME` file in this repo does this automatically once DNS resolves, but setting it explicitly in the UI avoids it getting reset.)
4. Wait for the DNS check to pass (can take a few minutes to 24–48 hours depending on the registrar), then tick **Enforce HTTPS** in the same Pages settings once it becomes available.
5. Once live, verify `https://jaspermoving.com` loads the site directly (no `github.io` in the address bar).

## Local preview

No build tools needed — just open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

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
| `info@jaspermoving.ca` | every page | Real email address |
| `https://jaspermoving.ca` | canonical URLs, Open Graph tags, JSON-LD, `robots.txt`, `sitemap.xml` | Your actual domain |
| `#` social links (Facebook, Instagram, Google Reviews) in the footer | every page | Real profile URLs |
| Testimonials on the home page | `index.html` | Real customer quotes (with permission) |
| Illustrated SVG graphics (truck, boxes) | `index.html`, `about.html` | Real photos of your crew/trucks, if you have them |
| Business hours (Mon–Sat, 7 AM–8 PM) | every page | Your actual hours |

A quick way to update phone/email/domain everywhere at once:

```bash
grep -rl "555-0123" . --include="*.html" | xargs sed -i '' 's/(647) 555-0123/YOUR-PHONE/g'   # macOS
grep -rl "555-0123" . --include="*.html" | xargs sed -i 's/(647) 555-0123/YOUR-PHONE/g'       # Linux
```

(Do the same for `info@jaspermoving.ca` and `jaspermoving.ca`.)

The quote form on `contact.html` currently submits via `mailto:` (opens the visitor's email client) — good enough to launch, but consider swapping in a hosted form backend (e.g. Formspree, Getform, or a small serverless function) for a smoother experience once you have a domain.

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
5. If you buy a custom domain (e.g. `jaspermoving.ca`), add it under **Custom domain** in the same Pages settings, and update the canonical/OG URLs and `sitemap.xml`/`robots.txt` in this repo to match.

## Local preview

No build tools needed — just open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

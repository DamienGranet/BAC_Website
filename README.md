# Bronze Age Collapse — Band Website

Static site for [bronzeagecollapse.band](https://bronzeagecollapse.band/).
Plain HTML/CSS/JS, no frameworks, no build step. Deploys automatically to
GitHub Pages via GitHub Actions on every push to `main`.

## How the site is organised

```
├── index.html              Home (hero, listen, about, album, gigs/Instagram, contact)
├── archive.html            Photo archive, poster archive, venue map, band timeline
├── merch.html              Merch
├── gigs.html               Redirect stub → archive.html (old URL)
├── 404.html                Themed "page not found"
├── css/style.css           All styling (colour tokens at the top)
├── js/main.js              Renders config data into the pages (rarely needs editing)
├── data/site-config.js     ★ THE FILE YOU EDIT ★
├── assets/                 Images · posters live in assets/posters/ · icons in assets/icons/
├── .github/workflows/      The auto-deploy workflow
├── CNAME                   Custom domain — do not delete
└── .nojekyll               Tells GitHub not to run Jekyll — do not delete
```

## Day-to-day updates (Damien, this is your section)

Open **`data/site-config.js`** on github.com, click the ✏️ pencil, edit, press
**Commit changes**. The Actions tab shows the deploy running; the live site
updates in about a minute. Every list in the file has a comment explaining it.

| I want to… | Do this |
|---|---|
| Change the "new music coming soon" strip | Edit `comingSoon` |
| Show recent Instagram posts on the home page | Paste post URLs (post → ⋯ → Copy link) into `featuredInstagramPosts` |
| Add a poster to the archive | Upload the image to `assets/posters/` (Add file → Upload files), then add a `{ image, caption }` line to `posters` |
| Add a venue pin to the map | Add to `venues` — right-click the spot in Google Maps to copy `lat, lng` |
| Extend the band timeline | Add to `bandTimeline` |
| Update merch | Change `status` ("available" / "wip" / "soldout"), swap `image`, add a `link` |
| Link a member's Instagram | Put the URL in their `social` field |

Keep uploaded posters under ~500 KB each (export from Canva at "medium"
quality) so the page stays fast.

If an edit breaks something, it's almost always a missing comma or quote in
`site-config.js`. The deploy workflow checks the file and will fail with the
line number, and the previous version of the site stays live until you fix it.

## Deployment

### One-time setup

1. Push this folder to `main` on `https://github.com/DamienGranet/BAC_Website`
   (all files at the repo root).
2. On GitHub: **Settings → Pages → Source: GitHub Actions.**
3. Done. Every push to `main` now deploys automatically. You can also trigger
   a deploy by hand from the **Actions** tab → *Deploy to GitHub Pages* →
   *Run workflow*.

The site serves at `https://damiengranet.github.io/BAC_Website/` (the URL
matches the repo name's capitalisation — rename the repo to `bac_website` in
Settings → General if you want it lowercase) and at the custom domain once
DNS is connected.

### Custom domain (bronzeagecollapse.band)

The repo already contains the `CNAME` file. At your domain registrar:

1. Four **A records** on the apex `bronzeagecollapse.band` →
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
2. (Recommended) **CNAME record** `www` → `damiengranet.github.io`
3. GitHub: **Settings → Pages → Custom domain** → `bronzeagecollapse.band` →
   Save → tick **Enforce HTTPS** when the certificate is issued.

These IPs are GitHub's documented Pages addresses; double-check the official
"GitHub Pages custom domain" docs if it's been a while.

Until the domain is live, Open Graph link previews (which hard-code the final
domain) won't resolve on the `github.io` URL. If you want previews sooner,
find-and-replace `https://bronzeagecollapse.band/` with the `github.io` URL in
the HTML files, then swap back when DNS lands. Platforms cache previews —
refresh with their debug tools (e.g. developers.facebook.com/tools/debug).

### Working locally on a Mac

No installs needed — macOS ships with Python:

```bash
git clone https://github.com/DamienGranet/BAC_Website.git
cd BAC_Website
python3 -m http.server 8000
# open http://localhost:8000
```

Edit, refresh the browser, and when happy:

```bash
git add -A && git commit -m "Update posters" && git push
```

The push triggers the deploy automatically.

### Moving to Cloudflare Pages later (optional)

Nothing about the site needs to change:

1. Cloudflare dashboard → Workers & Pages → Create → Pages →
   Connect to the GitHub repo.
2. Build settings: **Framework preset: None · Build command: (empty) ·
   Output directory: `/`**.
3. Point the domain's DNS at Cloudflare instead of the GitHub A records.

You can even run both during a transition; the `CNAME` file is ignored by
Cloudflare and only matters to GitHub.

## Design system (for extending the site)

Colour and type tokens are CSS variables at the top of `css/style.css`.
The rules of the house style, per band feedback: flat colour (no gradient
lettering), display headings in Cinzel set uppercase so every letter is the
same height, one quiet outline button style, bronze used sparingly as a flat
accent. The stage-photo palette (near-black plum, burgundy, cream) does the
heavy lifting.

To add a page: copy `merch.html`, change the title/meta/OG tags and content,
add it to the `nav__links` and footer of each page. Reusable pieces:
`.section`, `.card`, `.grid--3`, `.btn`, `.gallery`, `.badge`, `.timeline`.

The venue map is Leaflet + CARTO dark tiles (both free, no API key). Pins are
data-driven from `venues` in the config. The Spotify player and Instagram
embeds load from Spotify/Instagram directly — nothing to maintain.

## Housekeeping

- **Never delete** `CNAME`, `.nojekyll`, or `.github/workflows/deploy.yml`.
- Keep writing `alt` text for new images; the site respects reduced-motion
  settings and keyboard focus out of the box.

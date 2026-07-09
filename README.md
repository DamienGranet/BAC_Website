# Bronze Age Collapse — Band Website

Static site for [bronzeagecollapse.band](https://bronzeagecollapse.band/), hosted free on GitHub Pages.
No build step, no frameworks, no dependencies to update — just HTML, CSS, and one config file.

## How the site is organised

```
├── index.html            Home (hero, gigs module, about, album, listen, Instagram, contact)
├── gigs.html             Upcoming + past gigs, milestones timeline, live photos
├── merch.html            Merch
├── 404.html              Themed "page not found"
├── css/style.css         All styling (colour tokens at the top)
├── js/main.js            Renders config data into the pages (rarely needs editing)
├── data/site-config.js   ★ THE FILE YOU EDIT ★
├── assets/               Images (posters go in assets/posters/)
├── CNAME                 The custom domain — do not delete
└── .nojekyll             Tells GitHub not to run Jekyll — do not delete
```

## Day-to-day updates (95% of everything)

Open **`data/site-config.js`** on github.com, click the ✏️ pencil, edit, commit.
The live site updates in about a minute. Everything is commented inside the file.

| I want to… | Edit this in `site-config.js` |
|---|---|
| Announce a gig | Add an entry to `upcomingGigs` |
| Archive a gig + poster | Move it to `pastGigs`, upload the poster to `assets/posters/`, set its `poster` path |
| Change the "coming soon" ticker | Edit `comingSoon` (delete released singles, add new ones) |
| Feature an Instagram post on the home page | Paste the post URL into `featuredInstagramPost` |
| Add a member's Instagram | Put the URL in their `social` field under `members` |
| Update merch (e.g. tees go live) | Change `status` to `"available"`, add a `link` if you have a store |
| Add a milestone | Add to `milestones` |

**Uploading images on github.com:** open the `assets/posters/` folder → *Add file* → *Upload files*.
Keep posters under ~500 KB each (export from Canva at "medium" quality) so pages stay fast.

## One-time setup: deploying to GitHub Pages

1. Create the repo `https://github.com/DamienGranet/BAC_Website` and push these files to the `main` branch (all files at the repo root, not in a subfolder).
2. On GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save.**
3. The site goes live at `https://damiengranet.github.io/BAC_Website/` within a couple of minutes.
   - Note: the URL matches the repo name's exact capitalisation. If you want the lowercase
     `damiengranet.github.io/bac_website`, name the repo `bac_website` (you can rename it in
     Settings → General with no other changes needed).

### Connecting the custom domain (bronzeagecollapse.band)

The repo already contains a `CNAME` file with the domain, so GitHub is ready. On your domain
registrar's DNS panel:

1. Add four **A records** for the apex domain `bronzeagecollapse.band` pointing to GitHub Pages:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
2. (Recommended) Add a **CNAME record** for `www` → `damiengranet.github.io`
3. On GitHub: **Settings → Pages → Custom domain** → enter `bronzeagecollapse.band` → Save,
   then tick **Enforce HTTPS** once the certificate is issued (can take up to a day).

Verify the exact IPs against GitHub's current documentation if it has been a while —
search "GitHub Pages custom domain apex" for the official docs page.

### Before the custom domain is live

Everything works on the `github.io` URL except two things that hard-code the final domain:

- **Link previews (Open Graph tags)** point at `https://bronzeagecollapse.band/...`, so shared
  links won't show the preview image until the domain is connected. If you want previews on the
  `github.io` URL in the meantime, find-and-replace `https://bronzeagecollapse.band/` with
  `https://damiengranet.github.io/BAC_Website/` in the three HTML files (and swap back later).
- `sitemap.xml` and `robots.txt` reference the final domain — harmless either way.

After sharing a link once, Facebook/Discord/etc. cache the preview. To refresh it, use the
platform's debugger (e.g. developers.facebook.com/tools/debug) or add `?v=2` to the URL.

## Design system (for extending the site)

Colours and fonts are defined once as CSS variables at the top of `css/style.css`:
bronze (`--bronze`), burgundy (`--burgundy`), cream text (`--cream`), stage-light violet/magenta
accents, on a near-black plum base — all sampled from the gig photos and Canva assets.
Headings use **Cinzel** (matches the Trajan-style Canva poster lettering); body text is **Inter**.

To add a new page:
1. Copy `merch.html` (it's the simplest), rename it, change the `<title>`, meta description,
   OG tags, and content.
2. Add a link to it in the `nav__links` block and footer of each page.
3. Reuse the existing classes — `.section`, `.card`, `.grid grid--3`, `.btn btn--bronze`, etc.

Common building blocks already styled for you: gig list rows, timeline entries, badges
(`badge--available` / `badge--wip` / `badge--soldout`), photo gallery, empty states.

## Housekeeping

- **Never delete** `CNAME` or `.nojekyll`.
- The Spotify player and Instagram embed are loaded from Spotify/Instagram directly —
  nothing to maintain, but they require visitors to be online (always true for a website).
- Accessibility: keep writing `alt=""` text for images, and the site already respects
  reduced-motion settings and keyboard focus.
- If something breaks after an edit to `site-config.js`, it's almost always a missing
  comma or quote — the browser console (F12) will tell you the line number.

/* ==========================================================================
   BRONZE AGE COLLAPSE — main.js
   Renders content from data/site-config.js into the pages.
   You should not need to edit this file for routine updates —
   edit data/site-config.js instead.
   ========================================================================== */
(function () {
  "use strict";
  const C = window.BAC || {};
  const $ = (sel) => document.querySelector(sel);

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------------- Ticker: new music coming soon ---------------- */
  const ticker = $("#ticker");
  if (ticker && C.comingSoon && C.comingSoon.length) {
    const items = C.comingSoon
      .map((x) => `<b>${esc(x.title)}</b> <span>(${esc(x.note)})</span>`)
      .join('<span class="dot" aria-hidden="true">◆</span>');
    const chunk = `<span>NEW MUSIC COMING SOON</span><span class="dot" aria-hidden="true">◆</span>${items}<span class="dot" aria-hidden="true">◆</span>`;
    // duplicate for a seamless loop
    ticker.innerHTML = `<div class="ticker__inner">${chunk.repeat(2)}</div>`;
  } else if (ticker) {
    ticker.hidden = true;
  }

  /* ---------------- Gigs ---------------- */
  const gigItem = (g) => `
    <li class="gig">
      <div class="gig__date">${esc(g.date)}</div>
      <div>
        <div class="gig__title">${esc(g.title)}</div>
        ${g.venue ? `<div class="gig__venue">${esc(g.venue)}</div>` : ""}
      </div>
      ${g.link ? `<a class="btn btn--ghost gig__link" href="${esc(g.link)}">Details</a>` : ""}
    </li>`;

  const renderGigs = (sel, list, emptyMsg) => {
    const el = $(sel);
    if (!el) return;
    if (list && list.length) {
      el.innerHTML = `<ul class="gig-list">${list.map(gigItem).join("")}</ul>`;
    } else {
      el.innerHTML = `<div class="empty-state">${emptyMsg}</div>`;
    }
  };

  const ig = C.links && C.links.instagram ? esc(C.links.instagram) : "#";
  renderGigs(
    "#upcoming-gigs",
    C.upcomingGigs,
    `Nothing locked in right now — new gigs are always announced first on
     <a href="${ig}">our Instagram</a>. Follow along so you don't miss the next one.`
  );
  renderGigs(
    "#past-gigs",
    C.pastGigs,
    `Past gig posters will live here. (Band admin: add them in
     <code>data/site-config.js</code> under <code>pastGigs</code>.)`
  );

  /* ---------------- Milestones timeline ---------------- */
  const tl = $("#milestones");
  if (tl && C.milestones && C.milestones.length) {
    tl.innerHTML = C.milestones
      .map(
        (m) => `
      <li>
        <div class="t-date">${esc(m.date)}</div>
        <div class="t-title">${esc(m.title)}</div>
        <div class="t-detail">${esc(m.detail)}
          ${m.link ? ` <a href="${esc(m.link)}">${esc(m.linkLabel || "More")}</a>` : ""}
        </div>
      </li>`
      )
      .join("");
  }

  /* ---------------- Members ---------------- */
  const mem = $("#members");
  if (mem && C.members) {
    mem.innerHTML = C.members
      .map((m) => {
        const name = m.social
          ? `<a href="${esc(m.social)}">${esc(m.name)}</a>`
          : esc(m.name);
        return `
        <div class="card member">
          <div class="member__role">${esc(m.role)}</div>
          <div class="member__name">${name}</div>
        </div>`;
      })
      .join("");
  }

  /* ---------------- Listen links ---------------- */
  const listen = $("#listen-links");
  if (listen && C.links) {
    const defs = [
      ["spotify", "Spotify", "Stream the album", "S"],
      ["apple", "Apple Music", "Stream the album", "A"],
      ["youtube", "YouTube Music", "Stream the album", "Y"],
      ["unearthed", "Triple J Unearthed", "Support local music", "J"],
    ];
    listen.innerHTML = defs
      .filter(([k]) => C.links[k])
      .map(
        ([k, label, sub, letter]) => `
      <a class="card" href="${esc(C.links[k])}">
        <span class="icon" aria-hidden="true">${letter}</span>
        <span><span class="label">${label}</span><br><span class="sub">${sub}</span></span>
      </a>`
      )
      .join("");
  }

  /* ---------------- Spotify embed ---------------- */
  const sp = $("#spotify-embed");
  if (sp && C.spotifyArtistId) {
    sp.innerHTML = `
      <iframe class="embed-frame" title="Bronze Age Collapse on Spotify"
        src="https://open.spotify.com/embed/artist/${esc(C.spotifyArtistId)}?utm_source=generator&theme=0"
        height="420" loading="lazy" allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
  }

  /* ---------------- Instagram ---------------- */
  const insta = $("#insta-embed");
  if (insta) {
    if (C.featuredInstagramPost) {
      insta.innerHTML = `
        <blockquote class="instagram-media" data-instgrm-permalink="${esc(C.featuredInstagramPost)}"
          data-instgrm-version="14" style="margin:0 auto; max-width:540px; width:100%;"></blockquote>`;
      const s = document.createElement("script");
      s.async = true;
      s.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(s);
    } else {
      insta.innerHTML = `
        <div class="card insta-card">
          <h3>@bronze_age_collapse_band</h3>
          <p>Gig announcements, new music news, and general band nonsense — Instagram is where it all lands first.</p>
          <a class="btn btn--bronze" href="${ig}">Follow on Instagram</a>
        </div>`;
    }
  }

  /* ---------------- Merch ---------------- */
  const merch = $("#merch-grid");
  if (merch && C.merch) {
    const badge = { available: "Available now", wip: "In the works", soldout: "Sold out" };
    merch.innerHTML = C.merch
      .map(
        (m) => `
      <div class="card merch-card">
        <div class="merch__img"><img src="${esc(m.image)}" alt="${esc(m.name)}" loading="lazy"></div>
        <span class="badge badge--${esc(m.status)}">${badge[m.status] || esc(m.status)}</span>
        <h3>${esc(m.name)}</h3>
        <p>${esc(m.blurb)}</p>
        <p style="margin-top:.8rem">${
          m.link
            ? `<a class="btn btn--bronze" href="${esc(m.link)}">Get it</a>`
            : `<a href="${ig}">DM us on Instagram</a> to grab one.`
        }</p>
      </div>`
      )
      .join("");
  }

  /* ---------------- Footer ---------------- */
  const fLinks = $("#footer-links");
  if (fLinks && C.links) {
    const defs = [
      ["linktree", "Linktree — everything in one place"],
      ["spotify", "Spotify"],
      ["apple", "Apple Music"],
      ["youtube", "YouTube Music"],
      ["unearthed", "Triple J Unearthed"],
      ["instagram", "Instagram"],
      ["pressWoroni", "Woroni Radio feature"],
    ];
    fLinks.innerHTML = defs
      .filter(([k]) => C.links[k])
      .map(([k, label]) => `<li><a href="${esc(C.links[k])}">${label}</a></li>`)
      .join("");
  }

  const fFriends = $("#footer-friends");
  if (fFriends && C.friends && C.friends.length) {
    fFriends.innerHTML = C.friends
      .map((f) => `<li><a href="${esc(f.url)}">${esc(f.name)}</a></li>`)
      .join("");
  }

  const fContact = $("#footer-contact");
  if (fContact && C.links) {
    fContact.innerHTML = `
      <li><a href="mailto:${esc(C.links.email)}">${esc(C.links.email)}</a></li>
      <li><a href="${ig}">DM @bronze_age_collapse_band</a></li>
      <li>Bookings &amp; band admin: Damien Granet (drums)</li>`;
  }

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
})();

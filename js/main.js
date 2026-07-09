/* ==========================================================================
   BRONZE AGE COLLAPSE — main.js
   Renders content from data/site-config.js into the pages.
   Routine updates belong in data/site-config.js, not here.
   ========================================================================== */
(function () {
  "use strict";
  const C = window.BAC || {};
  const $ = (sel) => document.querySelector(sel);

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ig = C.links && C.links.instagram ? esc(C.links.instagram) : "#";

  /* ---------------- Ticker: new music coming soon ---------------- */
  const ticker = $("#ticker");
  if (ticker && C.comingSoon && C.comingSoon.length) {
    const items = C.comingSoon
      .map((x) => `<b>${esc(x.title)}</b> <span>(${esc(x.note)})</span>`)
      .join('<span class="dot" aria-hidden="true">·</span>');
    const chunk = `<span class="ticker__chunk"><span>New music coming soon</span><span class="dot" aria-hidden="true">·</span>${items}<span class="dot" aria-hidden="true">·</span></span>`;
    ticker.innerHTML = `<div class="ticker__inner">${chunk}${chunk.replace('class="ticker__chunk"', 'class="ticker__chunk" aria-hidden="true"')}</div>`;
  } else if (ticker) {
    ticker.hidden = true;
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

  /* ---------------- Listen links (brand icons) ---------------- */
  const listen = $("#listen-links");
  if (listen && C.links) {
    const defs = [
      ["spotify", "Spotify", "Stream the album", "assets/icons/spotify.svg"],
      ["apple", "Apple Music", "Stream the album", "assets/icons/applemusic.svg"],
      ["youtube", "YouTube Music", "Stream the album", "assets/icons/youtubemusic.svg"],
      ["unearthed", "Triple J Unearthed", "Support local music", "assets/icons/radio.svg"],
    ];
    listen.innerHTML = defs
      .filter(([k]) => C.links[k])
      .map(
        ([k, label, sub, icon]) => `
      <a class="card" href="${esc(C.links[k])}">
        <span class="icon" aria-hidden="true"><img src="${icon}" alt=""></span>
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

  /* ---------------- Instagram (gigs section) ---------------- */
  const insta = $("#insta-embed");
  if (insta) {
    const posts = C.featuredInstagramPosts || [];
    if (posts.length) {
      insta.innerHTML = `<div class="insta-grid">${posts
        .slice(0, 3)
        .map(
          (url) => `
        <blockquote class="instagram-media" data-instgrm-permalink="${esc(url)}"
          data-instgrm-version="14" style="margin:0; max-width:420px; width:100%;"></blockquote>`
        )
        .join("")}</div>
        <p style="text-align:center; margin-top:1.2rem">
          <a class="btn" href="${ig}">Follow on Instagram</a>
        </p>`;
      const s = document.createElement("script");
      s.async = true;
      s.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(s);
    } else {
      insta.innerHTML = `
        <div class="card insta-card">
          <h3>@bronze_age_collapse_band</h3>
          <p>Gig announcements, new music, and general band goings-on all land here first.</p>
          <a class="btn" href="${ig}">Follow on Instagram</a>
        </div>`;
    }
  }

  /* ---------------- Poster archive ---------------- */
  const postersEl = $("#poster-archive");
  if (postersEl && C.posters && C.posters.length) {
    postersEl.innerHTML = C.posters
      .map(
        (p) => `
      <figure>
        <img src="${esc(p.image)}" alt="Gig poster: ${esc(p.caption)}" loading="lazy">
        <figcaption>${esc(p.caption)}</figcaption>
      </figure>`
      )
      .join("");
  }

  /* ---------------- Venue map (Leaflet) ---------------- */
  const mapEl = $("#venue-map");
  if (mapEl && C.venues && C.venues.length && window.L) {
    const map = L.map(mapEl, { scrollWheelZoom: false });
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19,
    }).addTo(map);

    const markers = [];
    C.venues.forEach((v) => {
      const marker = L.circleMarker([v.lat, v.lng], {
        radius: 8,
        color: "#f2ecdf",
        weight: 1.5,
        fillColor: v.closed ? "#6b5a92" : "#a12a37",
        fillOpacity: 0.95,
      }).addTo(map);
      marker.bindPopup(
        `<b>${esc(v.name)}</b><br>${esc(v.area)}${v.note ? " — " + esc(v.note) : ""}${
          v.closed ? "<br><i>Since closed</i>" : ""
        }`
      );
      markers.push({ marker, v });
    });
    map.fitBounds(
      L.latLngBounds(C.venues.map((v) => [v.lat, v.lng])).pad(0.18)
    );

    // clickable list under the map
    const list = $("#venue-list");
    if (list) {
      list.innerHTML = C.venues
        .map(
          (v, i) =>
            `<li><button type="button" data-i="${i}">${esc(v.name)}</button>
             <span class="area">— ${esc(v.area)}</span></li>`
        )
        .join("");
      list.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-i]");
        if (!btn) return;
        const { marker, v } = markers[Number(btn.dataset.i)];
        map.setView([v.lat, v.lng], 16);
        marker.openPopup();
      });
    }
  } else if (mapEl) {
    mapEl.innerHTML =
      '<p style="padding:1.5rem">The map needs an internet connection to load.</p>';
  }

  /* ---------------- Band timeline ---------------- */
  const tl = $("#band-timeline");
  if (tl && C.bandTimeline && C.bandTimeline.length) {
    tl.innerHTML = C.bandTimeline
      .map(
        (m) => `
      <li>
        <div class="t-card">
          <div class="t-date">${esc(m.date)}</div>
          <div class="t-title">${esc(m.title)}</div>
          ${m.detail ? `<div class="t-detail">${esc(m.detail)}${
            m.link ? ` <a href="${esc(m.link)}">${esc(m.linkLabel || "More")}</a>` : ""
          }</div>` : m.link ? `<div class="t-detail"><a href="${esc(m.link)}">${esc(m.linkLabel || "More")}</a></div>` : ""}
        </div>
      </li>`
      )
      .join("");
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
            ? `<a class="btn" href="${esc(m.link)}">Get it</a>`
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
    ];
    fLinks.innerHTML = defs
      .filter(([k]) => C.links[k])
      .map(([k, label]) => `<li><a href="${esc(C.links[k])}">${label}</a></li>`)
      .join("");
  }

  const fContact = $("#footer-contact");
  if (fContact && C.links) {
    fContact.innerHTML = `
      <li><a href="mailto:${esc(C.links.email)}">${esc(C.links.email)}</a></li>
      <li><a href="${ig}">DM @bronze_age_collapse_band</a></li>`;
  }

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
})();

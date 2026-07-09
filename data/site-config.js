/* ==========================================================================
   BRONZE AGE COLLAPSE — SITE CONFIG
   ==========================================================================
   This is the ONLY file you need to edit for day-to-day updates.
   Edit it on github.com (pencil icon), commit, and the site redeploys
   automatically within a minute or two.

   Rules of thumb:
   - Keep the commas! Every item in a list ends with a comma except the last.
   - Text goes inside "double quotes".
   - Lines starting with // are comments and do nothing.
   ========================================================================== */

window.BAC = {

  /* ------------------------------------------------------------------
     STREAMING + SOCIAL LINKS
     ------------------------------------------------------------------ */
  links: {
    spotify:    "https://open.spotify.com/intl-fr/artist/3QsOVEVzFFD0ByheW88tjf",
    youtube:    "https://music.youtube.com/channel/UCV4npXjZ-cxzKWkuwVIuZUA",
    apple:      "https://music.apple.com/us/artist/bronze-age-collapse/1815113758",
    unearthed:  "https://www.abc.net.au/triplejunearthed/artist/bronze-age-collapse",
    instagram:  "https://www.instagram.com/bronze_age_collapse_band/",
    linktree:   "https://linktr.ee/bronzeagecollapseband",
    email:      "bronzeagecollapseband@gmail.com",
    pressWoroni:"https://www.woroni.com.au/words/woroni-radios-picks-best-local-gold-for-2026-so-far/",
  },

  /* Spotify artist ID — powers the embedded player on the home page */
  spotifyArtistId: "3QsOVEVzFFD0ByheW88tjf",

  /* ------------------------------------------------------------------
     INSTAGRAM POSTS ON THE HOME PAGE
     Paste up to 3 post URLs (Instagram > post > ⋯ > Copy link) and they
     appear embedded in the "gigs" section. Leave the list empty [] to
     show a simple follow button instead.
     ------------------------------------------------------------------ */
  featuredInstagramPosts: [
     "https://www.instagram.com/p/DVSKzxFk-Qq/","https://www.instagram.com/p/DUzNZpDkix5/","https://www.instagram.com/p/DQYd7JXExVe/"
  ],

  /* ------------------------------------------------------------------
     NEW MUSIC BANNER — the strip at the top of every page.
     Remove songs as they release; add new ones any time.
     ------------------------------------------------------------------ */
  comingSoon: [
    { title: "In Situ",    note: "single — upcoming album" },
    { title: "Holding On", note: "single — upcoming album" },
    { title: "Cold Air",   note: "single — upcoming EP" },
  ],

  /* ------------------------------------------------------------------
     BAND MEMBERS — put an Instagram URL in `social` to make a name a
     link, or leave it null.
     ------------------------------------------------------------------ */
  members: [
    { name: "Liam Sandison", role: "Vocals & Guitar", social: null },
    { name: "Jonny Hill",    role: "Vocals & Guitar", social: null },
    { name: "Jacob Walker",  role: "Bass",            social: null },
    { name: "Damien Granet", role: "Drums",           social: null },
  ],

  /* ------------------------------------------------------------------
     POSTER ARCHIVE (Archive page)
     To add a poster: upload the image to assets/posters/ on GitHub,
     then add a line here. Newest first looks best.
     ------------------------------------------------------------------ */
  posters: [
    { image: "assets/posters/bush-week-marie-reay.jpg",
      caption: "Bush Week — Marie Reay Lvl 6, Fri July 25" },
    { image: "assets/posters/baso-25-sep-vector.jpg",
      caption: "With Nightswim & Good Lightning — The Baso, 25 Sep" },
    { image: "assets/posters/getaway-launch-baso.jpg",
      caption: "Getaway single launch — The Baso, 25 Sept" },
    { image: "assets/posters/getaway-launch-social.jpg",
      caption: "Getaway single launch announcement" },
    { image: "assets/posters/acoustic-smiths-alternative.jpg",
      caption: "Acoustic set — Smith's Alternative, Thu Sep 4" },
    { image: "assets/posters/o-week-sullys-creek.jpg",
      caption: "O-Week — Sully's Creek Amphitheatre, Fri 20 Feb" },
    { image: "assets/posters/album-party-pot-belly.jpg",
      caption: "Game of Charades album party — The Pot Belly, Fri 6 Mar" },
  ],

  /* ------------------------------------------------------------------
     SOME PLACES WE'VE PLAYED (Archive page map)
     lat/lng are decimal coordinates — right-click a spot in Google Maps
     and it shows them. Set closed: true for venues that no longer exist.
     ------------------------------------------------------------------ */
  venues: [
    { name: "The Baso", area: "Belconnen",
      lat: -35.240317, lng: 149.059104, closed: false,
      note: "2 Cohen St — thebaso.com.au" },
    { name: "The Pot Belly", area: "Belconnen",
      lat: -35.241873, lng: 149.062711, closed: false,
      note: "Weedon Close institution" },
    { name: "Shadows Night Club", area: "Civic",
      lat: -35.279234, lng: 149.130282, closed: false, note: "East Row" },
    { name: "Dissent Café & Bar", area: "Civic",
      lat: -35.279138, lng: 149.132006, closed: false, note: "City Walk" },
    { name: "Smith's Alternative", area: "Civic",
      lat: -35.278524, lng: 149.128612, closed: false, note: "Alinga St" },
    { name: "Transit Bar", area: "Civic",
      lat: -35.279534, lng: 149.130817, closed: false, note: "London Circuit" },
    { name: "Dickson Square", area: "Dickson",
      lat: -35.250144, lng: 149.139857, closed: false, note: "Open-air" },
    { name: "Haig Park", area: "Braddon",
      lat: -35.269100, lng: 149.133000, closed: false, note: "Under the pines" },
    { name: "Marie Reay Building", area: "ANU campus",
      lat: -35.277667, lng: 149.120510, closed: false, note: "Level 6, Kambri" },
    { name: "Sullivans Creek Amphitheatre", area: "ANU campus",
      lat: -35.277200, lng: 149.118500, closed: false, note: "Uni Ave, by the creek" },
  ],

  /* ------------------------------------------------------------------
     BAND TIMELINE (Archive page)
     `link` and `linkLabel` are optional — set both or leave them out.
     ------------------------------------------------------------------ */
  bandTimeline: [
    { date: "Early 2022",
      title: "Jonny and Damo jam",
      detail: "It begins." },
    { date: "February 2023",
      title: "Liam, Jacob and Damo jam Led Zeppelin and Soundgarden late at night",
      detail: "Nobody complains. A sign." },
    { date: "March 2023",
      title: "Band is formed",
      detail: "We name ourselves the Bismarcks, after the German politician. Many gigs ensue." },
    { date: "December 2024",
      title: "Recording begins for Game of Charades",
      detail: "" },
    { date: "1 January 2026",
      title: "Game of Charades releases on streaming",
      detail: "Nine tracks, everywhere you listen.",
      link: "https://open.spotify.com/intl-fr/artist/3QsOVEVzFFD0ByheW88tjf",
      linkLabel: "Listen on Spotify" },
    { date: "June 2026",
      title: "First singles recorded for an aspirational second album",
      detail: "" },
  ],

  /* ------------------------------------------------------------------
     MERCH — status is "available" | "wip" | "soldout".
     `link` (optional): where to buy; null shows "DM us on Instagram".
     ------------------------------------------------------------------ */
  merch: [
    {
      name: "BAC Stickers",
      status: "available",
      image: "assets/logo-drum.png",
      blurb: "Slap the bass drum on your laptop, water bottle, or long-suffering car.",
      link: null,
    },
    {
      name: "T-Shirts",
      status: "wip",
      image: "assets/album-game-of-charades.jpg",
      blurb: "In the works. Watch Instagram for the drop.",
      link: null,
    },
    {
      name: "Game of Charades — CD",
      status: "wip",
      image: "assets/album-game-of-charades.jpg",
      blurb: "The debut album, physically. Coming soon.",
      link: null,
    },
  ],
};

/* ==========================================================================
   BRONZE AGE COLLAPSE — SITE CONFIG
   ==========================================================================
   This is the ONLY file you need to edit for day-to-day updates.
   Edit it on github.com (pencil icon) or locally, commit, and the site
   updates within a minute or two.

   Rules of thumb:
   - Keep the commas! Every item in a list ends with a comma except the last.
   - Text goes inside "double quotes".
   - To hide something, set it to null or delete the entry.
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

  /* Spotify artist ID — used for the embedded music player/carousel */
  spotifyArtistId: "3QsOVEVzFFD0ByheW88tjf",

  /* ------------------------------------------------------------------
     INSTAGRAM — paste the URL of the post you want featured on the
     home page. Get it from Instagram > post > ⋯ > Copy link.
     Set to null to show the follow card only.
     ------------------------------------------------------------------ */
  featuredInstagramPost: null,

  /* ------------------------------------------------------------------
     NEW MUSIC BANNER — shows in the ticker at the top of every page.
     Remove items as they get released (then add them to `releases`).
     ------------------------------------------------------------------ */
  comingSoon: [
    { title: "In Situ",    note: "single — upcoming album" },
    { title: "Holding On", note: "single — upcoming album" },
    { title: "Cold Air",   note: "single — upcoming EP" },
  ],

  /* ------------------------------------------------------------------
     RELEASES
     ------------------------------------------------------------------ */
  releases: [
    {
      title: "Game of Charades",
      type: "Album",
      date: "1 January 2026",
      cover: "assets/album-game-of-charades.jpg",
      tracks: [
        "Voidsteer", "Getaway", "Therapy", "Delusions", "Bittersweet",
        "The World", "Melancholia", "Phil's Big Night Out", "Stone Lips",
      ],
    },
  ],

  /* ------------------------------------------------------------------
     BAND MEMBERS
     `social` is optional — paste a member's Instagram (or other) URL
     between the quotes to turn their name into a link, or leave null.
     ------------------------------------------------------------------ */
  members: [
    { name: "Liam Sandison", role: "Vocals & Guitar", social: null },
    { name: "Jonny Hill",    role: "Vocals & Guitar", social: null },
    { name: "Jacob Walker",  role: "Bass",            social: null },
    { name: "Damien Granet", role: "Drums",           social: null },
  ],

  /* ------------------------------------------------------------------
     GIGS — the schedule module on the home page and the Gigs page
     both read from these two lists.

     To add a gig:
       { date: "12 Sep 2026", title: "Gig name", venue: "Venue, City",
         link: "https://tickets...", poster: "assets/posters/my-poster.jpg" }

     `link` and `poster` are optional (use null).
     Put poster images in assets/posters/ (any size; portrait looks best).
     ------------------------------------------------------------------ */
  upcomingGigs: [
    /* No gigs announced here yet — follow Instagram for announcements. */
  ],

  pastGigs: [
    /* Example (delete the slashes at the start of each line to use):
    // { date: "1 Jan 2026", title: "Album launch", venue: "Venue, Canberra",
    //   link: null, poster: "assets/posters/launch.jpg" },
    */
  ],

  /* ------------------------------------------------------------------
     MILESTONES — non-gig history shown on the Gigs page timeline.
     ------------------------------------------------------------------ */
  milestones: [
    {
      date: "1 January 2026",
      title: "Debut album — Game of Charades",
      detail: "Nine tracks of grunge-inspired hard rock, out on all platforms.",
      link: "https://open.spotify.com/intl-fr/artist/3QsOVEVzFFD0ByheW88tjf",
      linkLabel: "Listen on Spotify",
    },
    {
      date: "2026",
      title: "\u201CThe World\u201D picked by Woroni Radio",
      detail: "Featured in Woroni Radio's picks of the best local gold for 2026 so far.",
      link: "https://www.woroni.com.au/words/woroni-radios-picks-best-local-gold-for-2026-so-far/",
      linkLabel: "Read the article",
    },
  ],

  /* ------------------------------------------------------------------
     MERCH — set status to "available" | "wip" | "soldout".
     `link` (optional): where to buy/order; null shows "DM us on Instagram".
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
      image: "assets/bac-lettering.png",
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

  /* ------------------------------------------------------------------
     FRIENDS OF THE BAND — small links in the footer.
     ------------------------------------------------------------------ */
  friends: [
    { name: "ANU CSSA", url: "https://cssa.club/" },
  ],
};

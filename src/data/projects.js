// All works shown in the "All Works" grid.
// `available: true` projects get a full case-study page at /work/:slug.

const img = (name) => `/images/${name}.webp`

const allProjects = [
  {
    slug: 'cubit',
    title: 'Cubit.',
    category: 'Website',
    cover: img('cubit-devices'),
    back: img('cubit-devices'),
    blurb: 'Website, 3D direction and identity for a studio that says the most with the least.',
    available: true,
    service: 'Web Design & Development',
    scope: '3D Direction · Motion · Identity',
    platforms: 'Web · Mobile',
    client: 'Cubit',
    year: '2026',
    eyebrow: 'Cubit. — Website, 3D Direction & Motion',
    kicker: 'Website & Digital Identity',
    intro:
      'Cubit is a multidisciplinary design studio built on one idea: say the most with the least. Our challenge was to give it a website and identity that feel measured and cinematic — one cube, one colour, and type that speaks in capitals.',
    hero: img('cubit-devices'),
    heroFit: 'tall',
    // Long-form copy used by the case-study sections below (translated per locale).
    copy: {
      overview: 'Overview',
      lead: 'The identity reduces the studio to a single object — an indigo cube — and lets it carry every page, every print and every screen.',
      cols: [
        'Around the cube we generated a family of 3D scenes: a lone cube on a grey cyclorama, a tumbling field of indigo, white and carbon, and four project worlds.',
        'Condensed display type states the four pillars — clarity, depth, purpose, timelessness — while a calm grid, rounded panels and an indigo footer keep the experience fast and consistent from desktop to phone.',
      ],
      tags: ['Web design', 'Development', '3D direction', 'Motion', 'Identity'],
      brief: 'The brief',
      challenge: 'Challenge',
      challengeTitle: 'A studio with range, and a site that must not shout.',
      challengeText:
        'Cubit works across brands, interiors, digital experiences and visual identities. The website had to hold all of it without becoming a catalogue — clarity over volume, a point of view over a list of services.',
      approach: 'Approach',
      approachTitle: 'One object, one accent, and generous space.',
      approachText:
        'We let a single cube stand in for the studio, set the language in heavy condensed capitals, and gave every section room to breathe. Motion is slow and deliberate, so the work reads before the effect does.',
      process: 'Process',
      processTitle: 'How we worked.',
      steps: [
        { title: 'Listen', lines: ['Four pillars', 'The brief'] },
        { title: 'Direct', lines: ['3D scenes', 'Motion loops'] },
        { title: 'Brand', lines: ['Identity kit', 'Print and product'] },
        { title: 'Design', lines: ['Page system', 'Mobile layouts'] },
        { title: 'Build', lines: ['One responsive system', '390 to 1440 px'] },
        { title: 'Launch', lines: ['cubit.studio', 'Web and mobile'] },
      ],
      parallel: 'In parallel',
      live: 'Live',
      guidelines: 'Brand guidelines',
      guidelinesTitle: 'The rules behind the cube.',
      identity: 'Identity',
      identityTitle: 'Off the screen, into the street.',
      digital: 'Digital',
      digitalTitle: 'One system, every screen.',
      caps: {
        walkthrough: 'cubit.studio — site walkthrough',
        studio: 'The system in the studio — posters, objects and screens',
        process: 'In the studio — proofs, folders and the first indigo book',
        guidelines: 'Brand guidelines — identity, logo anatomy and typographics',
        identity: 'Tote, card, packaging and stationery — one wordmark, one indigo',
        digital: 'Tablet, phone and desktop — the same grid, type and indigo',
      },
    },
    sections: [
      { type: 'textblock' },
      { type: 'image', src: img('cubit-studio'), alt: 'Cubit posters on a concrete studio wall, cubes on a stone plinth and the website on two monitors', cap: 'studio', num: '01' },
      { type: 'brief' },
      { type: 'heading', label: 'process', title: 'processTitle', n: '03' },
      { type: 'process' },
      { type: 'image', src: img('cubit-process'), alt: 'Two designers laughing across a concrete table covered in Cubit prints and indigo rulers', cap: 'process', num: '01' },
      { type: 'heading', label: 'guidelines', title: 'guidelinesTitle', n: '04' },
      {
        type: 'pair',
        flat: true,
        items: [
          { src: img('cubit-guide-identity'), alt: 'Cubit brand guidelines: wordmark, clearspace, colours and logo anatomy' },
          { src: img('cubit-guide-type'), alt: 'Cubit typographics: the four pillars, typographic scale and grid rules' },
        ],
        cap: 'guidelines',
        num: '02 — 03',
      },
      { type: 'heading', label: 'identity', title: 'identityTitle', n: '05' },
      { type: 'image', src: img('cubit-street'), alt: 'A skater carrying a Cubit tote and a black Cubit card at golden hour', parallax: true },
      {
        type: 'pair',
        flat: true,
        items: [
          { src: img('cubit-tote'), alt: 'Cubit tote, black box with an indigo cube seal and an indigo book' },
          { src: img('cubit-stationery'), alt: 'Cubit stationery: business cards, folder, letterheads and indigo rulers' },
        ],
      },
      { type: 'image', src: img('cubit-card'), alt: 'A black Cubit card, a phone with the Cubit app and a type study on stone', parallax: true, cap: 'identity', num: '02 — 05' },
      { type: 'heading', label: 'digital', title: 'digitalTitle', n: '06' },
      { type: 'smallvideo', src: '/media/cubit-walkthrough.mp4', poster: '/media/cubit-walkthrough-poster.jpg', alt: 'The Cubit website scrolling on a desktop monitor', cap: 'walkthrough' },
      {
        type: 'duo',
        items: [
          { src: img('cubit-app-hand'), alt: 'A hand holding a phone with the Cubit app in a loft studio' },
          { src: img('cubit-app-phones'), alt: 'Two phones showing Cubit app screens on sandstone' },
        ],
      },
      { type: 'image', src: img('cubit-desk'), alt: 'Cubit page layouts on a desktop display and a tablet', cap: 'digital', num: '06 — 09' },
    ],
  },
  {
    slug: 'noreving',
    title: 'Noreving',
    category: 'Visuals',
    cover: img('card-noreving'),
    back: img('noreving-bike'),
    blurb: 'Noreving production visuals — light, speed and shadow for an e-bike launch.',
    available: false,
  },
  {
    slug: 'musical-co-working',
    title: 'Musical Co-working',
    category: 'Interior Design',
    cover: img('card-musical-coworking'),
    blurb: 'A co-working space tuned like an instrument — walnut, steel and sound.',
    available: true,
    service: 'Interior Design',
    client: 'Redacted',
    year: '2026',
    intro:
      'A co-working lounge designed around listening. Walnut panelling, brushed steel and a wall of speaker drivers turn a working floor into a room that feels tuned rather than furnished.',
    body:
      'We approached the space like an acoustic object. Warm timber absorbs and softens, the steel wall reflects and projects, and low lounge seating keeps sight lines open across the room. Vinyl, hi-fi and soft furnishings set a slower pace — a place to focus, meet, or simply listen.',
    hero: img('mc-1'),
    sections: [
      { type: 'image', src: img('mc-2'), alt: 'Lounge with steel speaker wall and walnut panelling' },
      { type: 'image', src: img('mc-3'), alt: 'Record console beneath a wall of vinyl', size: 'half' },
      { type: 'image', src: img('mc-4'), alt: 'Lounge with marble, walnut shelving and bean bags' },
    ],
  },
  {
    slug: 'dlvrnc',
    title: 'DLVRNC.',
    fullName: 'Delivrance',
    category: 'Branding',
    cover: img('card-dlvrnc'),
    blurb: 'Sportswear identity & art direction built around movement and belonging.',
    available: true,
    service: 'Visual Brand Identity',
    client: 'DLVRNC.',
    year: '2026',
    theme: { bg: '#E6EFF1', ink: '#101114', accent: '#9ED5EF' },
    eyebrow: 'DLVRNC. — Sportswear Identity & Art Direction',
    intro:
      'DLVRNC. is a sportswear concept inspired by running culture and the freedom found in movement. Our challenge was to create an identity that feels focused and confident, connecting the discipline of training with the shared energy of a running club.',
    body:
      'The visual identity centres on a tightly connected wordmark, bold typography, and a restrained palette of black, white, and ice blue. Fluid patterns and motion blur introduce a sense of pace, balanced by clean layouts and close-up product imagery. Across apparel, digital visuals, and animation, these elements create a consistent expression of the brand—built around movement, individuality, and belonging.',
    hero: img('dl-hero'),
    sections: [
      { type: 'image', src: img('dl-construction'), alt: 'DLVRNC. wordmark construction grid', bleed: true },
      { type: 'image', src: img('dl-bezier'), alt: 'Wordmark curves and windbreaker detail', bleed: true },
      { type: 'image', src: img('dl-marks'), alt: 'Wordmark on light neutral, carbon and glacier blue', bleed: true },
      { type: 'image', src: img('dl-crowd'), alt: 'Running club in DLVRNC. kit', bleed: true, parallax: true },
      {
        type: 'trio',
        items: [
          { src: img('dl-sprint'), alt: 'Two runners sprinting on a blue track' },
          { src: img('dl-ramp'), alt: 'Runner on a concrete spiral ramp' },
          { src: img('dl-track'), alt: 'Two runners in DLVRNC. jackets' },
        ],
      },
      {
        type: 'palette',
        swatches: [
          { name: 'Light neutral', hex: '#E6EFF1', rgb: '230, 239, 241', cmyk: '5, 1, 0, 5', area: 'a', ink: '#101114' },
          { name: 'Glacier Blue', hex: '#9ED5EF', rgb: '158, 213, 239', cmyk: '34, 11, 0, 6', area: 'b', ink: '#101114' },
          { name: 'Carbon', hex: '#101114', rgb: '16, 17, 20', cmyk: '20, 15, 0, 92', area: 'c', ink: '#ffffff' },
        ],
      },
      { type: 'image', src: img('dl-night'), alt: 'Night sprint on a red track', bleed: true, parallax: true },
      {
        type: 'video',
        src: '/media/dlvrnc-site.mp4',
        poster: '/media/dlvrnc-site-poster.jpg',
        side: img('dl-appicon'),
        alt: 'DLVRNC. e-commerce website walkthrough',
      },
      { type: 'image', src: img('dl-grid'), alt: 'Cycling campaign photography grid', bleed: true },
      { type: 'image', src: img('dl-ooh'), alt: 'Billboard, poster and bus-shelter campaign', bleed: true },
      { type: 'image', src: img('dl-social'), alt: 'Social profile and story templates', bleed: true },
    ],
  },
  {
    slug: 'domain-watch',
    title: 'Domain Watch',
    category: 'Visuals',
    cover: img('card-domain-watch'),
    blurb: 'Product visuals for a brushed-steel timepiece — light as material.',
    available: false,
  },
  {
    slug: 'hotel-ground-floor',
    title: 'Hotel Ground Floor',
    category: 'Interior Design',
    cover: img('card-hotel-ground-floor'),
    blurb: 'A reception carved from sand and plaster, framed by timber arches.',
    available: false,
  },
  {
    slug: 'nouzha',
    title: 'Nouz’ha',
    category: 'Domain',
    cover: img('card-nouzha'),
    blurb: 'Fragrance identity & art direction — scent, memory and personal ritual.',
    available: true,
    service: 'Visual Brand Identity',
    client: 'Nouz’ha',
    year: '2025',
    theme: { bg: '#FFFFFF', ink: '#101114', accent: '#480202' },
    eyebrow: 'Nouz’ha — Fragrance Identity & Art Direction',
    intro:
      'Nouz’ha is a fragrance concept exploring the connection between scent, memory, and personal ritual. The aim was to create an identity that feels intimate and distinctive, pairing expressive forms with a restrained, contemporary presentation.',
    body:
      'The visual identity centres on a sculptural emblem, combining flowing curves with sharp details. A palette of oxblood, pearl gray, warm gray, and ink black brings depth and softness, complemented by metallic finishes and dramatic product imagery. Across packaging and visual communication, close-up compositions highlight texture, light, and form, translating the sensory character of fragrance into a visual experience.',
    hero: img('nz-hero'),
    heroFit: 'tall',
    sections: [
      { type: 'image', src: img('nz-marks'), alt: 'Nouz’ha emblem on steel, oxblood and pearl gray', bleed: true },
      {
        type: 'palette',
        swatches: [
          { name: 'Pearl Gray', hex: '#E5E5E3', rgb: '229, 229, 227', cmyk: '0, 0, 1, 10', area: 'a', ink: '#101114' },
          { name: 'Oxblood', hex: '#480202', rgb: '72, 2, 2', cmyk: '0, 97, 97, 72', area: 'b', ink: '#ffffff' },
          { name: 'Warm Gray', hex: '#A3A09F', rgb: '163, 160, 159', cmyk: '0, 2, 2, 36', area: 'c', ink: '#101114' },
          { name: 'Ink Black', hex: '#101114', rgb: '16, 17, 20', cmyk: '20, 15, 0, 92', area: 'd', ink: '#ffffff' },
        ],
      },
      {
        type: 'trio',
        flush: true,
        items: [
          { src: img('nz-seal-envelope'), alt: 'Engraved envelope on a pewter plate' },
          { src: img('nz-seal-silver'), alt: 'Silver wax seal with the Nouz’ha emblem' },
          { src: img('nz-seal-red'), alt: 'Red wax seal with the Nouz’ha emblem' },
        ],
      },
      { type: 'image', src: img('nz-construction'), alt: 'Emblem construction grid', bleed: true },
      { type: 'image', src: img('nz-bezier'), alt: 'Emblem bezier outlines', bleed: true },
      { type: 'image', src: img('nz-floral'), alt: 'Sculpted silver floral ornament', bleed: true, parallax: true },
      {
        type: 'pair',
        items: [
          { src: img('nz-bottle-motion'), alt: 'Engraved bottle in motion' },
          { src: img('nz-bottle-bag'), alt: 'Bottles in a clear bag' },
        ],
      },
      { type: 'image', src: img('nz-flatlay'), alt: 'Engraved bottle and wax cap flat lay', inset: true },
      {
        type: 'pair',
        items: [
          { src: img('nz-bottle-duo'), alt: 'Two bottles falling' },
          { src: img('nz-bottle-glow'), alt: 'Bottle in soft spotlight' },
        ],
      },
    ],
  },
  {
    slug: 'villa-013',
    title: 'Villa 013',
    category: 'Interior Design',
    cover: img('card-villa-013'),
    blurb: 'Dining and living in muted stone, linen and ochre.',
    available: false,
  },
  {
    slug: 'standing-orders',
    title: 'Standing Orders',
    category: 'Automations',
    cover: img('card-standing-orders'),
    blurb: 'Automated workflows that take repetitive work off the table.',
    available: false,
  },
  {
    slug: 'community-app',
    title: 'Project Name',
    category: 'Software',
    cover: img('card-project-name'),
    blurb: 'User interface for web and mobile — a community and events platform.',
    available: false,
  },
]


// Order of the "All Works" grid. DLVRNC leads; Cubit sits mid-grid.
const ORDER = [
  'dlvrnc',
  'noreving',
  'musical-co-working',
  'domain-watch',
  'cubit',
  'hotel-ground-floor',
  'nouzha',
  'villa-013',
  'standing-orders',
  'community-app',
]
export const projects = ORDER.map((slug) => allProjects.find((p) => p.slug === slug))

export const availableProjects = projects.filter((p) => p.available)

export const getProject = (slug) => availableProjects.find((p) => p.slug === slug)

export const nextProject = (slug) => {
  const i = availableProjects.findIndex((p) => p.slug === slug)
  return availableProjects[(i + 1) % availableProjects.length]
}

// "Recently.." hero slider on the home page
export const featured = [
  { slug: 'dlvrnc', title: 'Delivrance', category: 'Sportswear', image: img('home-hero-dlvrnc') },
  { slug: 'cubit', title: 'Cubit.', category: 'Website', image: img('cubit-desk'), pos: 'center 55%' },
  { slug: 'nouzha', title: 'Nouz’ha', category: 'Fragrance', image: img('nz-floral') },
  { slug: 'musical-co-working', title: 'Musical Co-working', category: 'Interior Design', image: img('mc-2') },
  { slug: 'dlvrnc', title: 'Delivrance', category: 'Campaign', image: img('dl-night'), pos: 'center 40%' },
  { slug: 'nouzha', title: 'Nouz’ha', category: 'Packaging', image: img('nz-flatlay'), pos: 'center 45%' },
]

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
    slug: 'kinetik',
    title: 'Kinetik.',
    category: 'Automations',
    cover: img('card-kinetik'),
    back: img('kinetik-dashboard'),
    blurb: 'An autonomous ERP core — AI agents that reconcile, procure and audit, with people in the loop.',
    available: true,
    service: 'Product Design & Development',
    scope: 'Brand · UX/UI · AI Workflows',
    platforms: 'Web · iOS · Android',
    client: 'Kinetik',
    year: '2026',
    kicker: 'AI Platform, Brand & Product',
    eyebrow: 'Kinetik. — Autonomous ERP: Brand, Product Design & Build',
    intro:
      'Kinetik is an autonomous enterprise core: AI agents that read invoices, reconcile ledgers and raise purchase orders on their own — and stop to ask a person when the stakes are high. We shaped the vision, built the brand, and designed and engineered the product, from the workflow canvas to the mobile approval app.',
    hero: img('kinetik-dashboard'),
    heroFit: 'tall',
    copy: {
      overview: 'Overview',
      lead: 'Finance teams spend their days moving data between systems. Kinetik turns that work into workflows that run themselves — visible, explainable and always under control.',
      cols: [
        'A visual node canvas connects ERP webhooks, databases, LLM reasoning and third-party APIs, with live data pulses showing every step as it runs. Specialised agents pass structured context and memory between tasks instead of relying on brittle single-prompt chains.',
        'Around the canvas sit the modules finance actually needs — three-way invoice matching, predictive procurement, payroll and expense auditing — and the governance that makes autonomy safe: spend limits, approvals, replayable logs and scoped credentials.',
      ],
      tags: ['Product strategy', 'Brand identity', 'UX/UI', 'AI agents', 'Web & mobile', 'Development'],
      vision: 'Vision',
      visionStatement: 'Software that does the work — and shows its working.',
      visionItems: [
        {
          label: 'The problem',
          title: 'People have become the integration layer.',
          text: 'Invoices arrive as PDFs, stock levels live in one system and the ledger in another. Teams export CSVs, match line by line and chase approvals in chat — slow, error-prone and hard to audit.',
        },
        {
          label: 'The vision',
          title: 'An ERP that runs itself, with a human hand on the brake.',
          text: 'Agents handle the routine end to end and pause for people on anything risky. Every decision is recorded with its prompt, inputs and reasoning, so trust is earned rather than assumed.',
        },
      ],
      plan: 'The plan',
      planTitle: 'From whiteboard to launch week.',
      phases: [
        { tag: 'Phase 01', title: 'Discover', text: 'Interviews with finance leads, maps of reconciliation and procurement flows, and the risk model that defines what the AI may do alone.', out: 'Process maps · Risk thresholds' },
        { tag: 'Phase 02', title: 'Brand', text: 'Positioning as a high-velocity execution engine, the K mark, the obsidian-and-crimson palette and a calm geometric type system.', out: 'Identity kit · Voice' },
        { tag: 'Phase 03', title: 'Design & build', text: 'The node canvas, agent orchestrator, ERP connectors and component library — designed and engineered together in weekly releases.', out: 'Web app · Design system' },
        { tag: 'Phase 04', title: 'Govern & launch', text: 'Guardrails, audit trail, self-healing retries and role-based access, then the mobile companion and the launch-week reveal.', out: 'Mobile app · Launch' },
      ],
      working: 'How it works',
      workingTitle: 'One flow, many agents.',
      flow: [
        { title: 'Trigger', lines: ['ERP webhook', 'PDF · CSV · EDI'] },
        { title: 'Parse', lines: ['Clean to JSON schema', 'Validate fields'] },
        {
          label: 'Agents in parallel',
          branch: [
            { title: 'Audit agent', lines: ['Policy checks'] },
            { title: 'Procurement agent', lines: ['Lead-time forecasts'] },
            { title: 'Reconciliation agent', lines: ['PO ↔ receipt ↔ invoice'] },
          ],
        },
        { title: 'Guardrail', lines: ['Under $5,000: approve', 'Above: escalate'], tone: 'dark' },
        { title: 'Post', lines: ['Ledger sync', 'Audit trail'], tone: 'kinetik', small: 'Done' },
      ],
      modulesLabel: 'Core modules',
      modules: [
        { title: 'Visual node canvas', text: 'Drag-and-drop workflows linking ERP webhooks, database queries, LLM reasoning and APIs, with data pulses animating in real time.' },
        { title: 'Multi-agent orchestrator', text: 'Audit, procurement and reconciliation agents share structured context and memory across tasks.' },
        { title: 'Invoice & ledger reconciliation', text: 'Three-way matching of purchase order, goods receipt and invoice, with automatic ledger posting and anomaly flags.' },
        { title: 'Predictive procurement', text: 'Watches stock thresholds and supplier lead times, then drafts, routes and issues purchase orders before a stockout.' },
        { title: 'Payroll & expense auditing', text: 'Checks claims and timesheets against policy, approves what complies and isolates the edge cases.' },
        { title: 'Cross-ERP sync', text: 'Native two-way connectors for SAP, NetSuite, QuickBooks, Postgres and Slack or Teams — no more CSV exports.' },
        { title: 'Data transformation', text: 'Parsers clean raw PDFs, CSVs and EDI payloads into standard JSON schemas before anything touches the ledger.' },
        { title: '“What happens next?” copilot', text: 'Suggests the next logical step from the upstream trigger and the ERP modules already connected.' },
      ],
      governance: 'Governance',
      governanceTitle: 'Autonomy you can audit.',
      trust: [
        { title: 'Human-in-the-loop guardrails', text: 'Confidence thresholds and spend limits — auto-approve under $5,000, pause and escalate above it.' },
        { title: 'Immutable audit trail', text: 'Replayable logs of the prompt, model state, input and decision for every run, ready for SOC 2 reviews.' },
        { title: 'Self-healing retries', text: 'Exponential backoff on rate limits, failover to a secondary model and instant alerts when an endpoint goes down.' },
        { title: 'Access control & vault', text: 'Encrypted secrets and scoped roles, so each agent reaches only the tables and APIs its workflow allows.' },
      ],
      branding: 'Branding',
      brandingTitle: 'Engineered for high-velocity execution.',
      execution: 'Execution',
      executionTitle: 'A calm command surface for complex work.',
      stats: [
        { value: '99.8%', label: 'Auto-reconciliation rate surfaced in the telemetry dashboard' },
        { value: '$5,000', label: 'Default threshold before a human must approve' },
        { value: '5', label: 'Native connectors: SAP, NetSuite, QuickBooks, Postgres, Slack/Teams' },
        { value: '3', label: 'Specialised agents: audit, procurement, reconciliation' },
      ],
      launch: 'Launch',
      launchTitle: 'Live on stage, 14–20 November.',
      caps: {
        flow: 'A typical run — from webhook to ledger, with a human checkpoint',
        brand: 'Moodboard — palette, type, photography and the first stickers',
        mark: 'The K mark as an app icon, and the founder story',
        components: 'UI components — node canvas, controls and the “What happens next?” copilot',
        film: 'Product film — the workflow canvas running live',
        devices: 'Web app and Kinetik Mobile Companion — approve or reject from anywhere',
        launch: 'Kinetik Live, launch week — and the team behind it',
      },
    },
    sections: [
      { type: 'textblock' },
      { type: 'split', n: '02', label: 'vision', statement: 'visionStatement', items: 'visionItems' },
      { type: 'heading', label: 'plan', title: 'planTitle', n: '03' },
      { type: 'phases', items: 'phases' },
      { type: 'heading', label: 'working', title: 'workingTitle', n: '04' },
      { type: 'process', cap: 'flow' },
      { type: 'features', label: 'modulesLabel', items: 'modules' },
      { type: 'heading', label: 'governance', title: 'governanceTitle', n: '05' },
      { type: 'features', items: 'trust', accent: true },
      { type: 'heading', label: 'branding', title: 'brandingTitle', n: '06' },
      { type: 'image', src: img('kinetik-moodboard'), alt: 'Kinetik moodboard: Obsidian, Graphite, Crimson and Scarlet swatches, type specimens, K stickers and team polaroids', cap: 'brand', num: '01' },
      {
        type: 'pair',
        items: [
          { src: img('kinetik-icon'), alt: 'The red K mark as a glossy black app icon' },
          { src: img('kinetik-founder'), alt: 'Founder portrait beside the line "Engineered for high-velocity enterprise execution"' },
        ],
        cap: 'mark',
        num: '02 — 03',
      },
      {
        type: 'palette',
        swatches: [
          { name: 'Obsidian Black', hex: '#0A0A0C', rgb: '10, 10, 12', cmyk: '17, 17, 0, 95', area: 'a', ink: '#ffffff' },
          { name: 'Crimson Pulse', hex: '#FF1E38', rgb: '255, 30, 56', cmyk: '0, 88, 78, 0', area: 'b', ink: '#ffffff' },
          { name: 'Graphite Slate', hex: '#1C1C22', rgb: '28, 28, 34', cmyk: '18, 18, 0, 87', area: 'c', ink: '#ffffff' },
          { name: 'Scarlet Glow', hex: '#FF6B7A', rgb: '255, 107, 122', cmyk: '0, 58, 52, 0', area: 'd', ink: '#0A0A0C' },
        ],
      },
      { type: 'heading', label: 'execution', title: 'executionTitle', n: '07' },
      { type: 'image', src: img('kinetik-components'), alt: 'Kinetik UI components: node canvas, controls and the "What happens next?" menu', cap: 'components', num: '04' },
      { type: 'smallvideo', src: '/media/kinetik-film.mp4', poster: '/media/kinetik-film-poster.jpg', alt: 'The Kinetik workflow canvas pulsing with live data', cap: 'film' },
      { type: 'image', src: img('kinetik-devices'), alt: 'Kinetik on a laptop with the mobile companion app showing an approval', parallax: true, cap: 'devices', num: '05' },
      { type: 'stats', items: 'stats' },
      { type: 'heading', label: 'launch', title: 'launchTitle', n: '08' },
      {
        type: 'duo',
        items: [
          { src: img('kinetik-launch'), alt: 'Kinetik Live launch stage: "Autonomous Enterprise Core", 14–20 Nov 2026' },
          { src: img('kinetik-team'), alt: 'Polaroid labelled “core build”: two engineers at a red-lit screen' },
        ],
        cap: 'launch',
        num: '06 — 07',
      },
    ],
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
  'kinetik',
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

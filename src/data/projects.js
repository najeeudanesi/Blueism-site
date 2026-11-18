// All works shown in the "All Works" grid.
// `available: true` projects get a full case-study page at /work/:slug.

const img = (name) => `/images/${name}.webp`

const allProjects = [
  {
    slug: 'shoowarma',
    title: 'Shoowarma',
    category: 'Animations',
    cover: img('sh-hero'),
    back: img('sh-shop-illustration'),
    blurb: 'Character animations, identity and packaging for a shawarma shop with big wrap energy.',
    available: true,
    service: 'Character Animation & Brand Identity',
    client: 'Shoowarma',
    year: '2026',
    eyebrow: 'Shoowarma — Animations, Characters, Identity & Packaging',
    kicker: 'Restaurant Brand Animations',
    intro:
      'Shoowarma is a shawarma shop that refuses to be serious. We gave it a loud orange, a chunky wordmark and a crew of hand-drawn characters who sprint, climb and carve their way across bags, bottles, tees and screens — so every wrap feels like it was made by someone having a good day.',
    body:
      'The identity is built from three ingredients: Spit Orange, pita cream and charcoal ink; a heavy rounded wordmark; and a cast of illustrated regulars — the carver, the runner and the friend who always grabs the last wrap. The crew goes everywhere. They sprint across the bags, wrap the paper, climb the spit and star on the Ayran bottle, while three patterns — characters, logo wrap and ribbon — turn any surface into Shoowarma in a second.',
    hero: img('sh-delivery-loop'),
    heroFit: 'full',
    heroBg: '#FFF3DB',
    sections: [
      { type: 'image', src: img('sh-wordmarks'), alt: 'Shoowarma wordmark in orange on charcoal and charcoal on orange', bleed: true },
      { type: 'image', src: img('sh-patterns'), alt: 'Three patterns: the crew, the logo wrap and the ribbon', bleed: true },
      {
        type: 'palette',
        swatches: [
          { name: 'Pita Cream', hex: '#FBEDDC', rgb: '251, 237, 220', cmyk: '0, 6, 12, 2', area: 'a', ink: '#272626' },
          { name: 'Spit Orange', hex: '#FF6917', rgb: '255, 105, 23', cmyk: '0, 59, 91, 0', area: 'b', ink: '#272626' },
          { name: 'Charcoal', hex: '#272626', rgb: '39, 38, 38', cmyk: '0, 3, 3, 85', area: 'c', ink: '#FBEDDC' },
        ],
      },
      { type: 'image', src: img('sh-shop-illustration'), alt: 'Illustrated Shoowarma shop: the carver at the spit, the counter and a customer grabbing her wrap' },
      {
        // the three character animations side by side at one shared height, capped so they never upscale past their source pixels
        type: 'row',
        compact: true,
        items: [
          { src: img('sh-roll-with-us'), alt: 'Shoowarma “Roll with us.” — the runner crew sprinting across an orange and cream banner', ratio: 1 },
          { src: img('sh-box-anim'), alt: 'Shoowarma wrap box opening and closing — “Good food. Ready to go.”', ratio: 0.842 },
          { src: img('sh-laptop-anim'), alt: 'Laptop on an orange chair scrolling the Shoowarma website', ratio: 0.881 },
        ],
      },
    ],
  },
  {
    slug: 'avren',
    title: 'Avren',
    category: 'Visuals',
    fullbleed: true,
    cover: img('card-avren'),
    back: img('av-front'),
    blurb: 'Avren production visuals — light, speed and shadow for an e-bike launch.',
    available: true,
    service: 'Product Visuals · 3D Rendering',
    client: 'Avren',
    year: '2026',
    intro:
      'Launch visuals for Avren, a city e-bike built around a single bar of light. We kept the bike in near darkness and let its integrated headlight do the talking — every frame is lit by the product itself.',
    body:
      'The renders work like a slow reveal: a streak of light at speed, the frame stepping out of the shadow, then the headtube up close, where the light bar sits flush in the carbon. A tight monochrome palette, soft falloff and motion blur keep the focus on form, finish and that one line of light.',
    hero: img('av-red-hero'),
    heroFit: 'natural',
    sections: [
      {
        type: 'row',
        gapped: true,
        items: [
          { src: img('av-red-headtube'), alt: 'Avren headtube and light bar against a red backdrop', ratio: 0.7984 },
          { src: img('av-red-cassette'), alt: 'Avren rear cassette and derailleur against red spokes', ratio: 0.7985 },
        ],
      },
      {
        type: 'row',
        gapped: true,
        items: [
          { src: img('av-headtube'), alt: 'Close-up of the Avren headtube with its integrated light bar', ratio: 0.4447 },
          { src: img('av-brake'), alt: 'Avren rear disc brake and chainstay lit from behind', ratio: 0.7518 },
          { src: img('av-pedal'), alt: 'Avren bottom bracket, crank and pedal in low light', ratio: 0.8001 },
        ],
      },
      {
        type: 'row',
        gapped: true,
        items: [
          { src: img('av-fork'), alt: 'Avren frame, fork and headlight up close, the AVREN wordmark on the downtube', ratio: 0.7517 },
        ],
      },
      {
        type: 'row',
        gapped: true,
        items: [
          { src: img('av-seat'), alt: 'Avren saddle and seat tube in soft side light', ratio: 0.7984 },
          { src: img('av-light'), alt: 'Avren headlight cutting through the dark in a motion-blurred streak', ratio: 0.7993 },
        ],
      },
      { type: 'image', src: img('av-street'), alt: 'Avren e-bike moving through light and shadow on a city street', bleed: true },
    ],
  },
  {
    slug: 'musical-co-working',
    title: 'Musical Co-working',
    category: 'Interior Design',
    fullbleed: true,
    cover: img('mc-2'),
    blurb: 'A co-working space tuned like an instrument — walnut, steel and sound.',
    available: true,
    service: 'Interior Design',
    client: 'Redacted',
    year: '2026',
    intro:
      'A co-working lounge designed around listening. Walnut panelling, brushed steel and a wall of speaker drivers turn a working floor into a room that feels tuned rather than furnished.',
    body:
      'We approached the space like an acoustic object. Warm timber absorbs and softens, the steel wall reflects and projects, and low lounge seating keeps sight lines open across the room. Vinyl, hi-fi and soft furnishings set a slower pace — a place to focus, meet, or simply listen.',
    hero: img('mc-2'),
    sections: [
      { type: 'image', src: img('mc-4'), alt: 'Lounge with marble, walnut shelving and bean bags', bleed: true },
      {
        type: 'bento',
        items: [
          { src: img('mc-3'), alt: 'Record console beneath a wall of vinyl', span: 4, ratio: 1.08 },
          { src: img('mc-1'), alt: 'Lounge with steel speaker wall, walnut panelling and people passing through', span: 8, ratio: 2.16 },
        ],
      },
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
    showcase: {
      label: "Website showcase",
      title: "The DLVRNC. online store.",
      text: "A sportswear shop built like a training log — new drops up front, collections by sport and a checkout that stays out of the way, on desktop and phone.",
    },
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
        poster: img('dl-website'),
        side: img('dl-appicon'),
        alt: 'DLVRNC. e-commerce website walkthrough',
      },
      { type: 'image', src: img('dl-grid'), alt: 'Cycling campaign photography grid', bleed: true },
      {
        type: 'bento',
        items: [
          { src: img('dl-billboard'), alt: '“Built Different.” billboard for the black windbreaker', span: 12, ratio: 3.05 },
          { src: img('dl-poster'), alt: '“Move at your pace.” street poster by a running track', span: 6, ratio: 1.49 },
          { src: img('dl-shelter'), alt: '“Keep moving.” bus-shelter ad for the white mesh T-shirt', span: 6, ratio: 1.49 },
        ],
      },
      {
        type: 'bento',
        items: [
          { src: img('dl-profile'), alt: 'DLVRNC. social profile card', span: 6, ratio: 1.49 },
          { src: img('dl-phone'), alt: 'DLVRNC. Instagram profile on a phone', span: 6, rows: 2, ratio: 0.73 },
          { src: img('dl-mile'), alt: '“Every mile counts.” running collection card', span: 6, ratio: 1.42 },
        ],
      },
      { type: 'image', src: img('dl-stories'), alt: 'Instagram story templates', bleed: true },
      { type: 'showcase', src: '/media/dlvrnc-showcase.mp4', poster: '/media/dlvrnc-showcase-poster.jpg', bg: '#E6EFF1', ink: '#101114', alt: 'DLVRNC. website showcase: desktop and mobile scrolling side by side' },
    ],
  },
  {
    slug: 'silvatch',
    hidden: true, // kept but not shown on the site — remove this line to bring it back
    title: 'Silvatch',
    category: 'Visuals',
    fullbleed: true,
    cover: img('card-silvatch'),
    back: img('sv-wrist'),
    blurb: 'Product visuals for a brushed-steel timepiece — light as material.',
    available: true,
    service: 'Product Visuals · 3D Rendering',
    client: 'Silvatch',
    year: '2026',
    intro:
      'Launch visuals for Silvatch, a brushed-steel watch with an octagonal bezel and an integrated bracelet. We lit it with a single amber source raking across the metal, so the finish tells the story.',
    body:
      'The series moves from detail to wrist: the sunray dial and screw-set bezel, the caseback catching a hard rim of light, the case suspended in a glow, and finally the watch worn by a figure in silhouette. One colour of light, one material, and shadows deep enough to make the steel the brightest thing in the frame.',
    hero: img('sv-hero'),
    sections: [
      {
        type: 'row',
        items: [
          { src: img('sv-dial'), alt: 'Silvatch sunray dial, screw-set octagonal bezel and integrated bracelet', ratio: 0.8003 },
          { src: img('sv-caseback'), alt: 'Silvatch caseback catching a hard rim of amber light', ratio: 0.8003 },
        ],
      },
      { type: 'image', src: img('sv-wrist-wide'), alt: 'Figure in silhouette wearing the Silvatch watch against an amber spotlight', bleed: true },
    ],
  },
  {
    slug: 'dar-titawin',
    title: 'Dar Titawin',
    category: 'Interior Design',
    fullbleed: true,
    cover: img('card-hotel-ground-floor'),
    blurb: 'A reception carved from sand and plaster, framed by timber arches.',
    available: true,
    service: 'Interior Design',
    client: 'Redacted',
    year: '2026',
    intro:
      'The ground floor of a seafront hotel in Tetouan — reception, lounge and café — drawn from the White Dove city itself: lime plaster, Andalusian blue and carved cedar.',
    body:
      'We treated the floor as one walk from the street to the sea. A reception desk hewn like raw stone sits beneath blue plaster arches; a cedar mashrabiya screens the lounge and scatters patterned light across the concrete; and the café opens fully onto the Mediterranean, with walnut, terracotta leather and black marble keeping the palette warm and grounded.',
    hero: img('dt-reception'),
    sections: [
      { type: 'image', src: img('dt-desk'), alt: 'Hewn-stone reception desk before blue plaster arches with slatted cedar', bleed: true },
      { type: 'image', src: img('dt-cafe'), alt: 'Café opening onto the Mediterranean, with a mashrabiya screen and black marble bar', parallax: true, bleed: true },
      {
        type: 'bento',
        items: [
          { src: img('dt-lounge'), alt: 'Lounge with blue sofas and a carved cedar mashrabiya screen', span: 4, ratio: '16 / 9' },
          { src: img('dt-arches'), alt: 'Lift lobby set into blue plaster arches', span: 4, ratio: '16 / 9' },
          { src: img('dt-coffee'), alt: 'Coffee counter and walnut dining tables in warm light', span: 4, ratio: '16 / 9' },
        ],
      },
      { type: 'image', src: img('dt-terrace'), alt: 'Dining room with walnut tables facing palms and the sea', bleed: true },
    ],
  },
  {
    slug: 'nouzha',
    title: 'Nouz’ha',
    category: 'Branding',
    cover: img('card-nouzha'),
    back: img('card-nouzha-back'),
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
    hidden: true, // kept but not shown on the site — remove this line to bring it back
    title: 'Villa 013',
    category: 'Interior Design',
    fullbleed: true,
    cover: img('card-villa-013'),
    back: img('v13-bedroom'),
    blurb: 'Dining and living in muted stone, linen and ochre.',
    available: true,
    service: 'Interior Design',
    client: 'Redacted',
    year: '2026',
    intro:
      'A private villa planned as one long, quiet sequence — living, dining, two bedrooms and a bath — in muted stone, smoked timber and linen, with a few notes of ochre to keep it warm.',
    body:
      'Open plan, but never one big room: timber slats, a fireplace wall and a sunken ceiling over the dining table divide the ground floor into places to sit, eat and talk. Upstairs the palette softens into fluted panels, walnut and deep-pile rugs, while the bathroom turns to green mosaic, a stone tub and a backlit mirror — calm, tactile and lit low.',
    hero: img('v13-hero'),
    sections: [
      {
        type: 'row',
        items: [
          { src: img('v13-living'), alt: 'Living room with fireplace wall, media panel and slate-blue lounge chairs', ratio: 1 },
          { src: img('v13-dining'), alt: 'Dining table seen through vertical timber slats', ratio: 1 },
        ],
      },
      { type: 'image', src: img('v13-bedroom-wide'), alt: 'Bedroom with fluted headboard wall, twin pendants and herringbone floor', bleed: true },
      {
        type: 'row',
        items: [
          { src: img('v13-bedroom-dusk'), alt: 'Guest bedroom at dusk with walnut ceiling fan and deep-pile rug', ratio: 1 },
          { src: img('v13-vanity'), alt: 'Vanity with a backlit round mirror and marble basin', ratio: 1 },
        ],
      },
      { type: 'image', src: img('v13-bath-wide'), alt: 'Bathroom with a stone freestanding tub, glass shower and green mosaic', bleed: true },
    ],
  },
  {
    slug: 'aurared',
    title: 'Aurared',
    category: 'Visuals',
    fullbleed: true,
    cover: img('card-aurared'),
    back: img('ar-wash-moss'),
    blurb: 'Botanical skincare packaging, staged where the ingredients grow.',
    available: true,
    service: 'Packaging & Art Direction',
    client: 'Aurared',
    year: '2026',
    intro:
      'Aurared is a botanical skincare line of three essentials — a hand wash, a facial cleanser and a hand balm. We designed the packaging and art-directed a campaign that returns each product to the landscape its formula comes from.',
    body:
      'Bottle-green glass and soft-touch tubes carry a quiet cream label. Instead of studio sweeps, every product is set on moss, stone, driftwood and sea cliff, so the packaging is always seen in the light and texture it is meant to evoke.',
    hero: img('ar-hero'),
    stories: {
      branchNum: '02 / Facial Cleanser',
      branchTitle: 'Rested on a living branch.',
      branchText:
        'The cleanser sits where fern meets moss — cool air, soft green light and nothing in a hurry. A gentle daily cleanse, photographed the way it should feel: fresh, clear and quietly alive.',
      strip: 'Three climates, one green — the Hand Balm in wildflowers, the Hand Wash in the undergrowth, the Balm again on wet stone.',
      labelNum: 'The label',
      labelTitle: 'A field journal, not a beauty counter.',
      labelText:
        'Each label reads like a page of notes: a number, a name, what it does and how much is inside — 01 Hand Wash, 02 Facial Cleanser, 03 Hand Balm. A single rust-red rule is the only accent, so the glass, the green and the landscape do the rest.',
    },
    sections: [
      { type: 'story', src: img('ar-cleanser-branch'), alt: 'Aurared Facial Cleanser resting on a moss-covered branch among ferns', num: 'branchNum', title: 'branchTitle', text: 'branchText', bg: '#E4E9E2', ink: '#1D2A1A' },
      {
        type: 'row',
        cap: 'strip',
        items: [
          { src: img('ar-balm-flowers'), alt: 'Aurared Hand Balm standing on moss among wildflowers', ratio: 1 },
          { src: img('ar-wash-moss'), alt: 'Aurared Hand Wash lying in deep green moss and ferns', ratio: 1 },
          { src: img('ar-balm-stone'), alt: 'Aurared Hand Balm resting on wet, mossy stone', ratio: 1 },
        ],
      },
      { type: 'story', flip: true, src: img('ar-cleanser-driftwood'), alt: 'Aurared Facial Cleanser set in weathered driftwood and moss', num: 'labelNum', title: 'labelTitle', text: 'labelText', bg: '#1D2A1A', ink: '#EEF0E6' },
    ],
  },
  {
    slug: 'kinetik',
    title: 'Kinetik.',
    category: 'Automations',
    fullbleed: true,
    cover: img('card-kinetik-new'),
    back: img('kn-screens'),
    blurb: 'An autonomous ERP core — AI agents that reconcile, procure and audit, with people in the loop.',
    available: true,
    service: 'Product Design, Development & Automation',
    scope: 'Brand · UX/UI · AI Workflows · Automation',
    platforms: 'Web · iOS · Android',
    client: 'Kinetik',
    year: '2026',
    kicker: 'AI Automation Platform, Brand & Product',
    eyebrow: 'Kinetik. — Autonomous ERP: Brand, Product Design & Build',
    intro:
      'Kinetik is an autonomous enterprise core: AI agents that read invoices, reconcile ledgers and raise purchase orders on their own — and stop to ask a person when the stakes are high. We shaped the vision, built the brand, and designed and engineered the product, from the workflow canvas to the mobile approval app.',
    hero: img('kn-hero'),
    heroFit: 'natural',
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
    showcase: {
      label: "App showcase",
      title: "Watch a workflow run itself.",
      text: "The Kinetik dashboard in motion — an invoice moving through extraction, AI reconciliation and the ledger, then a tour of workflows, agents, finance and integrations, and the same app on a phone.",
    },
    sections: [
      { type: 'textblock' },
      { type: 'split', n: '02', label: 'vision', statement: 'visionStatement', items: 'visionItems' },
      { type: 'heading', label: 'plan', title: 'planTitle', n: '03' },
      { type: 'phases', items: 'phases' },
      { type: 'image', src: img('kn-bloom'), alt: 'The Kinetik flower mark glowing orange through vertical light slats', bleed: true },
      { type: 'heading', label: 'working', title: 'workingTitle', n: '04' },
      { type: 'process', cap: 'flow' },
      { type: 'features', label: 'modulesLabel', items: 'modules' },
      { type: 'image', src: img('kn-screens'), alt: 'Grid of Kinetik dashboard screens: overview, finance, workflows, integrations, agents and activity', bleed: true },
      { type: 'heading', label: 'governance', title: 'governanceTitle', n: '05' },
      { type: 'features', items: 'trust', accent: true },
      { type: 'heading', label: 'branding', title: 'brandingTitle', n: '06' },
      { type: 'image', src: img('kn-brand'), alt: 'Kinetik in the browser tab and as an app icon on a phone home screen', bleed: true },
      {
        type: 'palette',
        swatches: [
          { name: 'Obsidian', hex: '#090909', rgb: '9, 9, 9', cmyk: '0, 0, 0, 96', area: 'a', ink: '#F2EEE8' },
          { name: 'Kinetik Orange', hex: '#FF4B10', rgb: '255, 75, 16', cmyk: '0, 71, 94, 0', area: 'b', ink: '#090909' },
          { name: 'Bone', hex: '#F2EEE8', rgb: '242, 238, 232', cmyk: '0, 2, 4, 5', area: 'c', ink: '#090909' },
          { name: 'Ember', hex: '#FFB36C', rgb: '255, 179, 108', cmyk: '0, 30, 58, 0', area: 'd', ink: '#090909' },
        ],
      },
      { type: 'stats', items: 'stats' },
      { type: 'showcase', src: '/media/kinetik-showcase.mp4', poster: '/media/kinetik-showcase-poster.jpg', bg: '#090909', ink: '#F2EEE8', alt: 'Kinetik showcase: the demo workflow running, a tour of the dashboard pages and the mobile layout' },
    ],
  },
]


// Order of the "All Works" grid. DLVRNC leads.
const ORDER = [
  'dlvrnc',
  'shoowarma',
  'avren',
  'musical-co-working',
  'silvatch',
  'aurared',
  'dar-titawin',
  'nouzha',
  'villa-013',
  'kinetik',
]
// Projects marked `hidden: true` keep their data but stay off the grid and get no page.
export const projects = ORDER.map((slug) => allProjects.find((p) => p.slug === slug)).filter((p) => !p.hidden)

export const availableProjects = projects.filter((p) => p.available)

export const getProject = (slug) => availableProjects.find((p) => p.slug === slug)

export const nextProject = (slug) => {
  const i = availableProjects.findIndex((p) => p.slug === slug)
  return availableProjects[(i + 1) % availableProjects.length]
}

// "Recently.." hero slider on the home page
export const featured = [
  { slug: 'dlvrnc', title: 'DLVRNC.', category: 'Sportswear', image: img('home-hero-dlvrnc') },
  { slug: 'nouzha', title: 'Nouz’ha', category: 'Fragrance', image: img('nz-floral') },
  { slug: 'musical-co-working', title: 'Musical Co-working', category: 'Interior Design', image: img('mc-2') },
  { slug: 'dlvrnc', title: 'DLVRNC.', category: 'Campaign', image: img('dl-night'), pos: 'center 40%' },
  { slug: 'nouzha', title: 'Nouz’ha', category: 'Packaging', image: img('nz-flatlay'), pos: 'center 45%' },
]

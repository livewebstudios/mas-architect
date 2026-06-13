# MAS Architect — Pre-Build Plan (Phase 0)

**Project:** Rebuild of mas-architect.net as a premium architectural portfolio
**Stack:** Astro + React + Tailwind • Motion • Decap CMS v3.1.2 (pinned) • Formspree • Netlify
**Staging:** mas-architect.netlify.app → **Final:** mas-architect.net
**Status:** ⛔ AWAITING APPROVAL — no code, scaffold, or installs until Jon signs off.
**Prepared:** 2026-06-13

---

## STEP 1 — OLD SITE CONTENT INVENTORY (scraped via Firecrawl)

### Firm details (verified, migrate exactly)
| Field | Value |
|---|---|
| Firm | MAS Architect (MAS = Mark Stefanelli) |
| Tagline | "Rebuilding Neighborhoods, One House at a Time" |
| Phone | (201) 952-1500 |
| Email | markatect2@gmail.com |
| Address | 375 Murray Hill Pkwy, East Rutherford, NJ 07073 |
| Facebook | facebook.com/profile.php?id=100067624868198 |
| Instagram | instagram.com/stefanelli.architect |
| Sister company | Modular Building Systems — mbs-nj.com |
| YouTube | youtube.com/watch?v=rdUi8knZS_0 (MBS / Stefanelli) |

### Team (from /about-us — REAL)
- **Mark Stefanelli** — Owner / Principal Architect
- **Kyle Bendel** — Project Architect
- **Bianca Sanchez** — Production and Design

### Services (from /services-2 — REAL, 6 items)
1. Residential Architecture
2. Commercial Architecture
3. Renovations & Additions
4. Interior Design
5. Consulting & Planning
6. Sustainable Design

### Home page work categories (REAL)
Residential · New Homes · Commercial · Multifamily · Modular Building Systems

### Process (from /process — REAL, 6 phases)
1. Site Analysis & Existing Conditions
2. Design Phase
3. Variance Phase
4. Construction Documents
5. Bidding Process
6. Construction Administration

### Construction Documents (from /construction-documents — REAL, 8 sheets, each a downloadable PDF)
1. Site Plan & Zoning — `SHT-1-SITE-PLAN-AND-ZONING-1-1.pdf`
2. Demolition Plans — `SHT-2-DEMOLITION-PLANS.pdf`
3. Basement & First Floor Construction Plans — `SHT-3-BASEMENT-FIRST-FLOOR-PLAN.pdf`
4. Second Floor & Roof Plan — `SHT-4-SECOND-FLOOR-ROOF-PLAN.pdf`
5. Elevations — `SHT-5-ELEVATIONS.pdf`
6. Electrical Plans — `SHT-6-ELECTRICAL-PLANS.pdf`
7. Section & Plumbing Riser Diagram — `SHT-7-SECTIONS-PLUMBING-RISER.pdf`
8. Specifications — `SHT-8-SPECIFICATIONS-1.pdf`

### Planbooks (REAL — named house plans with render boards)
- **3 Bedroom:** Rueda House, Quinones
- **4 Bedroom:** 4bed, Dscirica, Kang House, Gramaglia House
- **5 Bedroom:** DiMarco, LaNeve, Mike's House, 716 3rd Ave, Dallara, Trinidad, Patel
- Each planbook page repeats a 6-step sidebar (Site Analysis, Design, Imagery, Budget, Construction Documents, Permits) and links to MBS.

### Blog posts (REAL — all 3 migrate in full, dated Sep 22 2025, author MAS)
1. **Sustainable Design: Building for the Future** — img `front-picUSED.jpg`
2. **Why Renovations Can Be Just as Impactful as New Builds** — img `Ruita-renderUSED.jpg`
3. **The Value of Thoughtful Residential Design** — img `FRONT-RIGHT-RENDERUSED.jpg`

### Testimonials (REAL)
- Joseph — Valley Industrial Contracting LLC
- Jose — J. B. Construction Inc
- Carlos — C and G Builders LLC

### Stats block (REAL-ish marketing figures)
250+ Completed Projects · 35+ Years Experience · 100% Client Satisfaction · 50+ Communities Served

### Contact form fields (REAL)
Name (First/Last) · Email (+confirm) · Phone · Comments (600 char max) · reCAPTCHA

---

### ⚠️ FLAGGED — NOT real content (Divi "Construction" theme demo filler — recommend DROP)
| Item | Finding |
|---|---|
| `/our-history` | 100% Lorem ipsum + fake team ("Marie Johnson – UI Designer", "Kenu Reeves – SEO Expert"), "Zikzag manufacturing", "consulting since 2002". Pure demo. |
| `/design-concepts` | Empty stub ("Videos", no content). |
| `/kitchens` | Empty stub. |
| `/project/project-name-1`…`8` | All Lorem ipsum with `divi-digital-*.png` demo images. No real project write-ups exist. |
| "Our Vision / economics + information technology / business consultancy" blurb (appears on About & Services) | Demo filler — does not describe an architecture firm. Recommend rewrite. |
| `/products/*` (Japanese polo shirts, toy trains, ear cuffs) | **Spam injection** — the WordPress site is compromised. Exclude entirely; flag to Jon as a security note. |

**Consequence:** There are **no genuine per-project case studies** to migrate. The real visual portfolio = the architectural **renders + planbook boards**. New Projects page will be an image-driven gallery (not 8 fake "Project Name N" detail pages).

---

## STEP 2 — REFERENCE INTERACTION INVENTORY (acova.ai)

acova.ai is a **Webflow** site (Four Stripes studio). Interaction vocabulary to echo (NOT its palette):

| Pattern | Observed behavior | We replicate as |
|---|---|---|
| **Video hero** | HTML5 `<video>` background behind headline | Hero with muted looping video / atmospheric motion bg |
| **Split-text headline** | Headline rendered word-by-word for staggered reveal | Motion stagger reveal on hero `<h1>` words |
| **Looping marquee CTA** | "Contact us" repeated → infinite scroll on the button | `MarqueeButton` (looping text on hover) |
| **Scroll-pinned feature list** | Numbered 01–06 features; sticky image column crossfades as you scroll | `PinnedFeatures` (sticky + image crossfade) — reused for Process |
| **Count-up stats** | 20X / 43kg / 10,000+ animate in | `StatCounter` (count-up on enter) |
| **Smooth scroll** | Eased, momentum scrolling | Lenis smooth-scroll island |
| **Card hover reveals** | Insight cards reveal image/title on hover | `ProjectCard` hover image reveal |
| **Section eyebrows** | Small all-caps labels above each section | Mono eyebrow labels (ties to blueprint motif) |
| **Generous whitespace, precise rhythm** | Large vertical spacing, restrained type | Section rhythm tokens below |

---

## A) SITE MAP

```
/                       Home
/about                  About — Mark's bio, firm story, team, stats, testimonials
/services               Services hub — 6 services overview
  /services/process               6-phase process (scroll-pinned)
  /services/construction-documents 8-sheet set + PDF downloads
  /services/planbooks             3 / 4 / 5-bedroom galleries
  /services/modular-building-systems  MBS + video + link to mbs-nj.com
/projects               Portfolio gallery (renders + planbook boards, filter + lightbox)
/blog                   Blog index (8 posts: 3 migrated + 5 new)
/blog/[slug]            Individual post (Decap-managed)
/contact                Contact (Formspree form + map + details)
/thank-you              Post-submit confirmation (Formspree _next target)
/admin                  Decap CMS (pinned 3.1.2)
/404                    Custom not-found
```

### Primary nav (ALL CAPS per LWS rule)
`HOME · ABOUT · SERVICES ▾ · PROJECTS · BLOG · CONTACT`
- **SERVICES ▾** dropdown: Process · Construction Documents · Planbooks (3/4/5 Bedroom) · Modular Building Systems
- Sticky header; mobile = full-screen drawer, uppercase links.

---

## B) COMPONENT INVENTORY

**Astro (static, zero/low JS):**
`BaseLayout` · `SEOHead` (meta/OG/JSON-LD) · `Header`+`MobileNav` · `Footer` (incl. LWS badge) · `SectionHeading` (mono eyebrow + serif title) · `ServiceCard` · `ProcessList` (static fallback) · `ConstructionDocItem` (thumb→PDF) · `PlanbookGallery` · `StatList` · `TestimonialCard` · `BlogIndex` · `BlogPostLayout` · `ContactForm` · `DimensionLine`/`CropMarks`/`GridTexture` (SVG/CSS blueprint motifs).

**React islands (interactive / Motion):**
`CursorEffect` (custom cursor + ring, hover-aware) · `SmoothScroll` (Lenis) · `ScrollReveal` (Motion in-view wrapper) · `HeroSection` (video + split-text) · `StatCounter` · `ProjectCard` (hover reveal) · `Lightbox` (gallery) · `PinnedFeatures` (scroll-pinned Process/Services) · `MarqueeButton` · `ParallaxImage`.

Page transitions = **Astro View Transitions** + Motion accents. All motion gated by `prefers-reduced-motion`.

---

## C) CONTENT MIGRATION MAP

| Old site | New home | Action |
|---|---|---|
| Home hero/sections | `/` | Rebuild; rewrite filler |
| About copy + team | `/about` | Migrate copy, real team; **drop Lorem "history"**; rewrite "vision" filler |
| 6 services | `/services` | Migrate names + descriptions verbatim-ish; reformat |
| Process (6 phases) | `/services/process` | Migrate verbatim |
| Construction Docs (8 sheets + PDFs) | `/services/construction-documents` | Migrate all 8 + keep PDF downloads |
| Planbooks 3/4/5 (named) | `/services/planbooks` | Migrate galleries + 6-step copy |
| Modular Building Systems + video | `/services/modular-building-systems` | Migrate; keep mbs-nj.com link + video |
| Portfolio gallery images | `/projects` | Migrate real renders/boards into curated gallery |
| 3 blog posts | `/blog/[slug]` | Migrate full text + images |
| Testimonials | `/` + `/about` | Migrate |
| Contact info + form | `/contact` | Migrate; rebuild form on Formspree |
| `/our-history`, `/design-concepts`, `/kitchens`, 8 demo projects, `/products/*` | — | **DROP** (demo/empty/spam) |

New copy to generate: rewritten hero/about/services intros, project captions, 5 new blog posts, all meta descriptions + alt text.

---

## D) ANIMATION & INTERACTION PLAN

| # | Interaction | Trigger | Behavior | Handler |
|---|---|---|---|---|
| 1 | Custom cursor | mousemove | Dot + lagging ring; grows over links/cards; hidden on touch | `CursorEffect` (React) |
| 2 | Smooth scroll | scroll | Eased momentum scroll | Lenis island |
| 3 | Hero reveal | load | Split-text `<h1>` word stagger; video/grid fade-in | `HeroSection` + Motion |
| 4 | Scroll reveals | in-view | Fade + 16–24px rise, precise easing/stagger | `ScrollReveal` |
| 5 | Parallax | scroll | Hero + project imagery translateY parallax | `ParallaxImage` |
| 6 | Stat count-up | in-view | 0 → target with easing | `StatCounter` |
| 7 | Pinned features | scroll | Sticky image col crossfades across 01–06 (Process/Services) | `PinnedFeatures` |
| 8 | Project hover | hover | Image zoom + navy overlay + crop-mark draw-on | `ProjectCard` |
| 9 | Marquee CTA | hover | Looping "Get in touch" text | `MarqueeButton` |
| 10 | Page transitions | nav | Cross-fade/slide between routes | Astro View Transitions |
| 11 | Dimension-line draw | in-view | Hairlines draw + arrowheads (logo echo) as dividers | SVG + Motion |

- **Cursor spec:** 8px navy dot (instant) + 36px ring (eased lag); ring scales 1.8× + becomes outline on interactive hover; `mix-blend` on imagery; disabled for touch/reduced-motion.
- **Scroll reveal spec:** opacity 0→1, y 20→0, 0.6s, cubic-bezier(0.22,1,0.36,1), 80ms stagger, once.

---

## E) DESIGN TOKENS

### Color (navy sampled from the actual logo)
| Token | Hex | Use |
|---|---|---|
| `--navy` | **#262261** | Primary brand (matches logo exactly) |
| `--navy-deep` | #1B1848 | Hover/active, footer |
| `--indigo-muted` | #5F5C8B | Secondary text (from logo edge) |
| `--ink` | #1A1A1A | Body text |
| `--paper` | #F8F6F1 | Base background (warm off-white) |
| `--linen` | #F2ECE0 | Stone section backgrounds |
| `--white` | #FFFFFF | Cards |
| `--line` | rgba(38,34,97,0.20) | Hairlines / dimension lines |
| `--grid` | rgba(38,34,97,0.05) | Graph-paper texture |

✅ Light throughout — no dark backgrounds (per brief).

### Typography
- **Display / headings:** Fraunces (variable serif — editorial, drafting-adjacent)
- **Body / UI:** Inter (precise geometric grotesque)
- **Technical labels / eyebrows / dimension annotations:** IBM Plex Mono (CAD-draft feel)
- Single `<h1>` per page. Type scale 1.25 ratio.

### Spacing & layout
4px base · scale 4/8/12/16/24/32/48/64/96/128 · container max 1280px · gutter 24px · section rhythm 96px desktop / 64px mobile.

### Blueprint motifs
Faint graph-paper grid (5% navy) on hero/stone sections · dimension lines with tick caps + arrowheads (echo logo) as dividers/stat framing · corner registration/crop marks on cards · leading-zero mono eyebrows (01/02).

---

## F) DECAP CMS CONFIG PLAN

- **CDN pinned exactly:** `https://unpkg.com/decap-cms@3.1.2/dist/decap-cms.js` (no `^`, no auto-update).
- **Admin:** `/public/admin/index.html` + `config.yml` → route `/admin`.
- **Backend:** `git-gateway` + Netlify Identity (Jon enables Identity + Git Gateway in Netlify).
- **Media:** `public/images/blog`, public path `/images/blog`.
- **Collection `blog`** → fields:
  `title` (string) · `date` (datetime) · `author` (string, default "Mark Stefanelli") · `slug` (string) · `featured_image` (image) · `excerpt` (text) · `meta_description` (string) · `body` (markdown).
- **Astro consumption:** posts as Markdown in `src/content/blog/`, read via **Astro Content Collections** (typed schema in `src/content/config.ts`). *(Decision point — see below.)*

---

## G) FORMSPREE CONFIG

- `action="https://formspree.io/f/FORMSPREE_ID"` (placeholder — Jon supplies ID), method POST.
- **Fields:** Name · Email · Phone · **Project Type** (select: Residential / Commercial / Renovation / Modular / Other) · Message.
- Hidden `_next` → `https://mas-architect.net/thank-you` (bypasses Formspree branding per LWS).
- Honeypot `_gotcha`; client-side validation; accessible labels + ARIA live error region.

---

## H) NETLIFY CONFIG

`netlify.toml`:
```toml
[build]
  command = "astro build"
  publish = "dist"
[build.environment]
  NODE_VERSION = "20"
[[redirects]]
  from = "/admin/*"
  to = "/admin/index.html"
  status = 200
```
- Static output (no SSR adapter needed). `astro.config` `site = "https://mas-architect.net"`.
- Netlify Identity widget on `/admin` and site for Git Gateway auth.
- Auto-generated `sitemap.xml` (@astrojs/sitemap) + `robots.txt`.

---

## I) IMAGE PLAN

All real images pulled from `/wp-content/uploads/` → repathed under `/public/images/{projects,planbooks,blog,team,docs}`.

| Group | Sources | New path | Notes |
|---|---|---|---|
| Portfolio renders | pb1–3, 01–05, 14-1, R_588-WASHINGTON | `/images/projects/` | Use full-size, not 400×250 thumbs |
| Planbook boards | Rueda, Quinones, Kang, Gramaglia, Dscirica, DiMarco, LaNeve, Mike's, 716-3rd, Dallara, Trinidad, Patel | `/images/planbooks/` | Wide composite "boards" — crop/feature carefully |
| Blog | front-picUSED, Ruita-renderUSED, FRONT-RIGHT-RENDERUSED | `/images/blog/` | Full-size versions |
| Team | Mark/Kyle/Bianca (UUID jpgs) | `/images/team/` | OK as-is |
| About | IMG_8179USED, IMG-9490USED | `/images/about/` | OK |
| Construction docs | thumbs 1–8 (300×300) + 8 PDFs | `/images/docs/` + `/public/docs/` | Keep PDFs downloadable |
| Logo (provided) | logo-trans.png, logo-white.png | `/images/` | Use `<img>` exactly, per LWS rule |

**🔶 Higgsfield candidates (flagged — need approval to generate):**
- **Hero:** old site lacks a strong wide hero asset → generate an atmospheric architectural motion background OR enhance/extend the best existing render to cinematic 16:9.
- **Planbook boards:** wide multi-panel composites; may need extension/clean crops for card framing.
- Any render that proves low-res on retina → upscale.

---

## J) BLOG POST OUTLINES (5 new — 600–900 words each, author Mark Stefanelli)

**1. "What to Expect When Hiring an Architect for a Home Addition"** *(Residential, approachable)* — slug `hiring-architect-home-addition`
- Why an architect matters for additions (vs. contractor-only)
- The walkthrough: from first conversation to feasibility
- Design + how additions tie into existing structure/site
- Permits/variances demystified (ties to Process)
- Timeline + what homeowners should prepare

**2. "Why Permits Matter More Than You Think"** *(Residential, demystifying)* — slug `why-permits-matter`
- What a building permit actually protects you from
- Risks of skipping (resale, insurance, safety, fines)
- The NJ permit/variance landscape (local context)
- How MAS handles permitting for clients
- Permits as an investment, not a hurdle

**3. "How Architecture Impacts Retail Foot Traffic"** *(Commercial, strategic)* — slug `architecture-retail-foot-traffic`
- First impressions: façade + entry as conversion drivers
- Flow, sightlines, dwell time inside
- Lighting, materials, signage integration
- Accessibility = wider customer base
- ROI: design choices that move the needle

**4. "The Hidden Costs of Skipping Schematic Design"** *(Commercial, direct)* — slug `hidden-costs-skipping-schematic-design`
- What schematic design is and why it's first
- Change orders + rework when you skip it
- Misalignment between stakeholders/budget
- Schedule slippage downstream
- How upfront design de-risks the whole budget

**5. "How AI Is Changing Architectural Visualization"** *(Thought leadership, forward-looking)* — slug `ai-architectural-visualization`
- From hand renders → CAD → AI-assisted visualization
- Faster iteration, photoreal concepts earlier
- Helping clients "see" before building (ties to Imagery step)
- Where human architects stay essential (judgment, code, craft)
- How MAS adopts AI responsibly

---

## LWS GLOBAL COMPLIANCE
✅ Logo via `<img>` (provided PNG, as-is) · ✅ Nav ALL CAPS · ✅ LWS footer badge (verifiedsecured.png → livewebstudios.com) · ✅ GA4 placeholder every page · ✅ CSS variables for color/font · ✅ semantic HTML5, single H1, meta/JSON-LD/OG · ✅ Formspree · ✅ `.gitignore` · ✅ pre-launch SEO + 4 Impeccable passes + UI/UX Pro Max before any client preview.
⚠️ **Path note:** Astro/Vite emits hashed assets referenced from domain root (`/_astro/…`). This deploys to a domain root (Netlify), so it won't suffer the subfolder-move breakage the LWS relative-path rule guards against. Flagging for awareness since it differs from hand-coded LWS static sites.

---

## ✅ LOCKED DECISIONS (Jon, 2026-06-13)
1. **Drop demo/spam pages** — our-history (Lorem), design-concepts/kitchens (stubs), 8 fake projects, /products (spam). ✔
2. **Projects = curated visual gallery** built from real renders + planbook boards (no fake per-project pages). ✔
3. **Blog data layer = Astro Content Collections** (typed schema in `src/content/config.ts`). ✔
4. **Fonts = Fraunces (display) + Inter (body) + IBM Plex Mono (labels).** ✔
5. **Higgsfield hero = YES** — generate atmospheric architectural hero; flag/enhance low-res renders during build. ✔
6. **Security note (not a build task):** the live WordPress site is compromised (/products spam). The old host should be cleaned/locked down — does not affect this rebuild.

**STOP. Plan complete + decisions locked. Awaiting Jon's explicit "go" to begin Phase 1 (scaffold) — no code, scaffold, or installs until then.**

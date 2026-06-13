# Claude Code Prompt — MAS Architect Site Rebuild
## Target: Claude Code (Agentic, autonomous build)
## Template: ReAct + Stop Conditions (Template H)

---

```
<objective>
Rebuild mas-architect.net as a premium AI Platformed website using Astro + React, deployed to Netlify at mas-architect.netlify.app, with Decap CMS for blog management and Formspree for the contact form. The new site must feel like an upscale architectural portfolio — light, precise, and motion-forward — inspired by acova.ai's interaction design but built for an architecture firm, not a tech company.

STOP after completing the Pre-Build Plan (Phase 0). Output the full plan and wait for human approval before writing any code.
</objective>

<context>
Client: MAS Architect — Mark Stefanelli, principal architect. MAS = his initials.
Old site: https://mas-architect.net (scrape with Firecrawl — ALL content must migrate)
Design reference: https://www.acova.ai (scrape for interaction patterns, scroll effects, cursor animation, layout rhythm — NOT color palette)
Logo: provided as PNG file in project (navy blueprint-style sketched lettering on transparent background — must be used exactly as-is)
Staging URL: mas-architect.netlify.app
Final domain: mas-architect.net (DNS cutover after approval)
</context>

<stack>
- Framework: Astro (primary) with React for interactive components
- Styling: Tailwind CSS
- CMS: Decap CMS v3.1.2 (PINNED — do NOT use auto-update or ^3.x.x — this version has a known image widget crash in later releases)
- Forms: Formspree (form ID to be configured by Jon Wolf — leave as placeholder FORMSPREE_ID)
- Hosting: Netlify
- Animation: Motion (Framer Motion) for scroll effects, entrance animations, cursor behavior
- Images: All sourced from the scraped old site. Higgsfield may be used to enhance, extend, or animate images if needed.
- Repo: GitHub (Jon Wolf will init the repo — CC should scaffold locally)
</stack>

<design_direction>
Palette:
- Background: light — off-white or very light warm gray (NOT black, NOT dark)
- Primary accent: navy blue (#1B2A6B or similar — match the logo's navy exactly)
- Secondary: warm stone/linen (#F5F0E8 or similar) for section backgrounds
- Text: near-black (#1A1A1A)
- Subtle texture: faint graph paper or architectural drafting grid as a background texture element — very subtle, not distracting

Typography:
- Primary: clean geometric sans-serif (Inter, DM Sans, or similar — pick what best suits architectural precision)
- Accent/headings: consider a serif or display face that pairs with the drafting aesthetic
- Blueprint-style elements (dimension lines, tick marks, hairline rules) as decorative motifs throughout

Interactions (from acova.ai reference — match these patterns):
- Custom cursor or cursor trail effect
- Scroll-triggered section entrance animations (elements slide/fade in with precision timing)
- Parallax effects on hero and project imagery
- Smooth page transitions
- Hover states on project cards with image reveal or overlay

Feel: Architectural drafting room meets premium portfolio. Deliberate. Precise. NOT flashy. The logo says everything — match that energy across the entire site.
</design_direction>

<content_rules>
MUST migrate from old site (non-negotiable):
- All plan book content (descriptions, images, any downloadable assets)
- All construction document content
- All services pages — exact service names and descriptions must survive; reformatting is fine
- All project portfolio entries with images
- All 3 existing blog posts (titles, content, images)
- All contact information and firm details
- About/bio content for Mark Stefanelli

CC may rewrite, reformat, and restructure any copy for clarity, SEO, and modern web presentation — but NOTHING from the above list gets dropped.

New content CC must generate:
- 5 new blog posts. Mix:
  1. Residential — "What to expect when hiring an architect for a home addition" (homeowner audience, approachable tone)
  2. Residential — "Why permits matter more than you think" (homeowner audience, demystifying tone)
  3. Commercial — "How architecture impacts retail foot traffic" (developer/business audience, strategic tone)
  4. Commercial — "The hidden costs of skipping schematic design" (developer audience, direct tone)
  5. Thought leadership — "How AI is changing architectural visualization" (industry/general audience, forward-looking tone)
  Each post: 600–900 words, proper H2/H3 structure, SEO meta description, suggested slug. Mark Stefanelli credited as author.

Page structure (CC may adjust but must cover all content):
- Home (hero, services overview, featured projects, about teaser, CTA)
- Projects / Portfolio (all project entries from old site)
- Services (all services from old site — plan books, construction documents, full service list)
- About (Mark Stefanelli bio — sourced from old site, enhanced)
- Blog (all 3 migrated + 5 new posts, Decap CMS managed)
- Contact (Formspree form — name, email, phone, message, project type)
</content_rules>

<phase_0_preplan>
BEFORE WRITING ANY CODE — execute this phase and STOP.

Step 1: Scrape the old site
Use Firecrawl to crawl https://mas-architect.net
Extract: all page text, all image URLs, navigation structure, service names, project names, blog post titles and content, contact info, any downloadable file links.
Output a complete content inventory.

Step 2: Scrape the reference site
Use Firecrawl to crawl https://www.acova.ai
Extract: page structure, section layout patterns, navigation behavior, any observable animation trigger descriptions (from CSS class names, data attributes, or structure).
Output a reference interaction inventory.

Step 3: Produce the Pre-Build Plan
Output a structured document containing:

A) SITE MAP
Full proposed page structure with route paths (/, /projects, /services, /about, /blog, /blog/[slug], /contact)
Navigation menu structure

B) COMPONENT INVENTORY
List every major component to be built (HeroSection, ProjectCard, ServiceBlock, BlogPost, ContactForm, CursorEffect, ScrollReveal, etc.)
Note which components use React vs Astro-only

C) CONTENT MIGRATION MAP
For every piece of content on the old site: where it lives on the new site
Flag any content that needs rewriting vs direct migration

D) ANIMATION & INTERACTION PLAN
List every planned animation/interaction
Describe trigger, behavior, and which Motion component handles it
Cursor effect spec
Scroll reveal pattern spec

E) DESIGN TOKENS
Exact hex values for all colors (navy matched to logo)
Font family decisions
Spacing scale
Texture/motif plan for blueprint decorative elements

F) DECAP CMS CONFIG PLAN
Blog collection schema (title, date, author, slug, featured image, body, meta description)
Admin route: /admin
Note: pin Decap CDN to version 3.1.2 exactly

G) FORMSPREE CONFIG
Form fields list
Placeholder for FORMSPREE_ID
Redirect/thank you behavior

H) NETLIFY CONFIG
netlify.toml settings
Build command, publish directory
Any redirect rules needed

I) IMAGE PLAN
List all images sourced from old site with their proposed new paths
Flag any images that are low resolution or need Higgsfield enhancement/extension
Note any hero sections where a Higgsfield-generated atmospheric video or motion background would elevate the design

J) BLOG POST OUTLINES
5-bullet outline for each of the 5 new blog posts before writing full content

STOP HERE. Output the full Pre-Build Plan and wait for human approval.
Do not scaffold the project. Do not write any code. Do not install any packages.
</phase_0_preplan>

<build_phases>
These execute ONLY after human approves the Pre-Build Plan.

Phase 1: Project scaffold
- Init Astro project with React integration and Tailwind
- Set up Netlify config (netlify.toml)
- Set up Decap CMS v3.1.2 (pinned)
- Install Motion
- Create /public, /src/components, /src/pages, /src/layouts, /src/styles, /src/content structure
✅ Checkpoint: scaffold complete, dev server runs locally

Phase 2: Design system
- Implement all design tokens (colors, fonts, spacing) in Tailwind config
- Build base layout (header, footer, nav)
- Implement cursor effect component
- Implement scroll reveal wrapper component
- Build blueprint decorative motif components (dimension lines, grid texture)
✅ Checkpoint: design system live, layout renders, cursor and scroll effects work

Phase 3: Content migration + page builds
- Build Home page with all sections
- Build Projects/Portfolio page and individual project entries
- Build Services page (plan books, construction documents, full services — all content from old site)
- Build About page (Mark Stefanelli bio)
- Build Contact page with Formspree form
✅ Checkpoint: all migrated content renders correctly, forms submit to Formspree placeholder

Phase 4: Blog
- Configure Decap CMS collections
- Migrate 3 existing blog posts as Markdown content files
- Write and add 5 new blog posts as Markdown content files
- Build blog index and individual post pages
✅ Checkpoint: blog renders all 8 posts, Decap admin accessible at /admin

Phase 5: Animations + polish
- Implement all scroll-triggered entrance animations
- Implement parallax on hero and project imagery
- Implement page transitions
- Implement hover effects on project cards
- Final responsive QA (mobile, tablet, desktop)
✅ Checkpoint: all animations fire correctly, site is fully responsive

Phase 6: Netlify deploy
- Push to GitHub (Jon Wolf will handle repo init — CC scaffolds locally, outputs git init instructions)
- Build succeeds on Netlify
- Staging URL confirmed live: mas-architect.netlify.app
✅ Final checkpoint: staging site live, all pages load, form submits, blog CMS works
</build_phases>

<allowed_actions>
- Scrape URLs using Firecrawl
- Read, write, and create files within the project directory
- Install packages listed in package.json (Astro, React, Tailwind, Motion, Decap CMS)
- Run build and dev commands
- Use Higgsfield to enhance, extend, or animate images where flagged in the image plan
- Generate all written content (copy, blog posts, meta descriptions, alt text)
</allowed_actions>

<forbidden_actions>
- Do NOT push to GitHub — Jon Wolf handles all git operations
- Do NOT deploy to Netlify manually — Jon Wolf approves all deploys
- Do NOT modify DNS settings
- Do NOT use Decap CMS version other than 3.1.2 pinned — no caret (^) version specifier
- Do NOT use a dark background — the site is light
- Do NOT drop any content from the old site (plan books, construction docs, services, projects, blog posts)
- Do NOT make architecture decisions (new frameworks, additional services, major structural changes) without showing options and waiting for human approval
- Do NOT write a single line of code before the Pre-Build Plan is approved
</forbidden_actions>

<stop_conditions>
Pause and wait for human review when:
- Phase 0 Pre-Build Plan is complete (MANDATORY STOP)
- A content item from the old site cannot be found or scraped and needs clarification
- An image from the old site is missing and a Higgsfield replacement would be needed
- Two valid implementation approaches exist that would affect architecture (e.g., Astro content collections vs. markdown files for blog)
- Any error cannot be resolved within 2 attempts
- Any task would require touching files or services outside the project scope
</stop_conditions>

<checkpoints>
After each Phase completion, output:
✅ [Phase name] — [one sentence: what was completed]
Then list every file created or modified.
At final completion, output a full site map with all routes, all components, and all content files.
</checkpoints>
```

---

🎯 Target: Claude Code (autonomous agentic build)
💡 ReAct + Stop Conditions template applied — hard gate after Phase 0 Pre-Build Plan prevents code generation until Jon reviews and approves the full plan; all content migration rules, design tokens, animation specs, and CMS constraints locked before a single file is written.

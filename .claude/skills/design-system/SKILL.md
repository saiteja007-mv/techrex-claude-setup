---
name: design-system
description: "Implements UI designs based on brand design systems from awesome-design-md. Trigger when: user asks to design a website, redesign UI, change UI style, make it look like [brand], apply [brand] design, build a landing page, update the look and feel, or anything related to UI/UX design and styling. Examples: 'redesign like Apple', 'make the UI look like Stripe', 'design a landing page', 'change the website style to look like Linear', 'apply Vercel design system'."
---

# Design System Skill

Apply professional brand design systems to any web project using curated DESIGN.md files from [awesome-design-md](https://github.com/VoltAgent/awesome-design-md).

## When to Activate

Trigger this skill when the user:
- Asks to **design**, **redesign**, or **restyle** a website or UI
- Says "make it look like [brand]" (e.g., "make it look like Apple")
- Asks to **apply a design system** or **change the look and feel**
- Wants to **build a landing page** or **update UI styling**
- Mentions any brand name in the context of UI design
- Asks for a **modern**, **clean**, **premium**, or **minimal** design (suggest matching brands)

Do NOT trigger for:
- Backend-only changes with no UI impact
- Database or API work
- Non-visual functionality changes

## Available Brand Design Systems

65 brands available. Key examples:

| Brand | Style |
|-------|-------|
| apple | Premium white space, SF Pro, cinematic imagery |
| stripe | Signature purple gradients, weight-300 elegance |
| vercel | Black and white precision, Geist font |
| linear.app | Ultra-minimal, precise, purple accent |
| notion | Warm minimalism, serif headings, soft surfaces |
| airbnb | Warm coral accent, photography-driven, rounded UI |
| spotify | Vibrant green on dark, bold type, album-art-driven |
| tesla | Radical subtraction, full-viewport photography |
| supabase | Dark emerald theme, code-first |
| framer | Bold black and blue, motion-first |
| figma | Vibrant multi-color, playful yet professional |
| raycast | Sleek dark chrome, vibrant gradient accents |
| cursor | AI-first code editor, sleek dark interface |
| coinbase | Clean blue identity, trust-focused |
| superhuman | Premium dark UI, keyboard-first, purple glow |

Run `npx getdesign@latest list` for the full catalog.

## Workflow

### Step 1: Identify the Brand

If the user specifies a brand (e.g., "like Apple", "Stripe style"):
- Use that brand directly.

If the user describes a style without naming a brand:
- Match their description to the best brand. Examples:
  - "clean and minimal" → `vercel` or `linear.app`
  - "premium and elegant" → `apple` or `stripe`
  - "dark and techy" → `cursor` or `supabase`
  - "friendly and colorful" → `airbnb` or `figma`
  - "bold and futuristic" → `tesla` or `spacex`
  - "enterprise and professional" → `ibm` or `hashicorp`
- Tell the user which brand you're using and why.

### Step 2: Fetch the Design System

Download the DESIGN.md file for the chosen brand:

```bash
npx getdesign@latest add <brand> --out ./DESIGN.md
```

If a DESIGN.md already exists and user wants a different brand:
```bash
npx getdesign@latest add <brand> --force
```

For multiple brand references in one project:
```bash
npx getdesign@latest add <brand> --out ./designs/<brand>/DESIGN.md
```

### Step 3: Read and Understand the Design System

Read the generated `DESIGN.md` file thoroughly. It contains:
- **Color palette** (primary, secondary, accent, semantic colors)
- **Typography** (font families, sizes, weights, line heights)
- **Spacing system** (padding, margins, gaps)
- **Border radius and shadows**
- **Component patterns** (buttons, cards, inputs, navigation)
- **Layout principles** (grid, containers, breakpoints)
- **Animation and motion** guidelines
- **Dark/light mode** specifications

### Step 4: Implement the Design

Apply the design system to the project:

1. **Global styles first** — Set CSS variables / Tailwind config / theme tokens from the DESIGN.md color palette, typography, and spacing
2. **Layout structure** — Apply container widths, grid systems, and responsive breakpoints
3. **Component styling** — Style buttons, cards, inputs, navigation, and other UI elements according to the design patterns
4. **Typography hierarchy** — Set heading sizes, body text, and font weights
5. **Spacing and rhythm** — Apply consistent padding and margins
6. **Motion and transitions** — Add animations per the design guidelines
7. **Dark mode** — Implement if the design system specifies it

### Step 5: Validate

After implementation:
- Check that colors, fonts, spacing match the DESIGN.md spec
- Verify responsive behavior at specified breakpoints
- Ensure accessibility (contrast ratios, focus states)
- Compare against the brand's actual website for visual fidelity

## Framework-Specific Notes

### Tailwind CSS
- Map DESIGN.md tokens to `tailwind.config.js` `theme.extend`
- Use CSS variables for dynamic theming

### CSS Modules / Vanilla CSS
- Create a `variables.css` with all design tokens
- Import into global stylesheet

### Next.js / React
- Create a theme provider if needed
- Use CSS variables or styled-components tokens

### Vue / Nuxt
- Map to CSS custom properties or UnoCSS config

## Example Usage

**User:** "Redesign my portfolio to look like Apple"

**Agent flow:**
1. Run `npx getdesign@latest add apple --out ./DESIGN.md`
2. Read `./DESIGN.md`
3. Extract: white backgrounds, SF Pro typography, generous white space, subtle shadows, cinematic hero sections
4. Update global CSS/Tailwind with Apple design tokens
5. Restyle components: minimal navigation, large hero imagery, clean card layouts
6. Apply Apple's animation patterns (smooth fades, subtle parallax)

**User:** "I want a clean, modern SaaS landing page"

**Agent flow:**
1. Suggest `vercel` or `stripe` design system (clean SaaS aesthetic)
2. Confirm with user, then fetch DESIGN.md
3. Implement the full design system

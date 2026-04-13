# Veredder — Wireframe Specification
## Framer Build Handoff Document

> Version 1.0 — April 2026
> Platform: Framer | Domain: veredder.com
> This document describes every section, component, and interaction in enough detail to build the site 1:1 in Framer.

---

## Table of Contents

1. [Global Foundations](#1-global-foundations)
2. [Navigation](#2-navigation)
3. [HOME — Hero Section](#3-home--hero-section)
4. [HOME — Selected Work](#4-home--selected-work)
5. [HOME — About / Bio](#5-home--about--bio)
6. [HOME — Services](#6-home--services)
7. [HOME — Footer](#7-home--footer)
8. [Project Page Template](#8-project-page-template)
9. [Shared Components](#9-shared-components)
10. [Animation & Interaction Spec](#10-animation--interaction-spec)
11. [Responsive Breakpoints](#11-responsive-breakpoints)

---

## 1. Global Foundations

### 1.1 Page Container

| Property | Value |
|----------|-------|
| Max width | `1440px` |
| Content max width | `1200px` |
| Side padding (desktop) | `80px` |
| Side padding (tablet) | `48px` |
| Side padding (mobile) | `20px` |
| Background | `#060608` |
| Overflow-x | `hidden` |

The page container is centered horizontally. All sections sit inside this container unless explicitly noted as full-bleed.

### 1.2 Grid System

| Breakpoint | Columns | Gutter | Margin |
|------------|---------|--------|--------|
| Desktop (1280+) | 12 | `24px` | `80px` |
| Tablet (768-1279) | 8 | `20px` | `48px` |
| Mobile (< 768) | 4 | `16px` | `20px` |

**Framer implementation:** Use Framer's built-in Layout (Flex or Grid) on each section frame. Do not use a single global grid component; instead, set each section's internal grid independently.

### 1.3 Typography Scale

| Role | Font | Weight | Desktop Size | Tablet Size | Mobile Size | Line Height | Letter Spacing |
|------|------|--------|-------------|-------------|-------------|-------------|----------------|
| Display XL | Neue Regrade | Bold (700) | `80px` / `5rem` | `56px` / `3.5rem` | `40px` / `2.5rem` | `0.95` | `-0.03em` |
| Display L | Neue Regrade | Bold (700) | `56px` / `3.5rem` | `44px` / `2.75rem` | `32px` / `2rem` | `1.0` | `-0.02em` |
| Heading 1 | Neue Regrade | Bold (700) | `40px` / `2.5rem` | `32px` / `2rem` | `28px` / `1.75rem` | `1.1` | `-0.01em` |
| Heading 2 | Neue Regrade | Bold (700) | `32px` / `2rem` | `28px` / `1.75rem` | `24px` / `1.5rem` | `1.15` | `-0.01em` |
| Heading 3 | Geist | Medium (500) | `24px` / `1.5rem` | `20px` / `1.25rem` | `18px` / `1.125rem` | `1.3` | `0` |
| Serif Accent | Instrument Serif | Regular (400) | `28px` / `1.75rem` | `24px` / `1.5rem` | `20px` / `1.25rem` | `1.3` | `0.01em` |
| Body Large | Geist | Regular (400) | `18px` / `1.125rem` | `17px` | `16px` / `1rem` | `1.6` | `0` |
| Body | Geist | Regular (400) | `16px` / `1rem` | `16px` | `15px` | `1.6` | `0` |
| Caption | Geist | Medium (500) | `13px` / `0.8125rem` | `13px` | `12px` | `1.4` | `0.04em` |
| Label | Geist | Medium (500) | `11px` / `0.6875rem` | `11px` | `11px` | `1.2` | `0.08em` |

**Framer implementation:** Create Text Styles in the Framer Design panel for each role. Reference them by name when styling text layers.

### 1.4 Spacing Scale

Use an 8px base unit for all spacing.

| Token | Value | Usage |
|-------|-------|-------|
| `space-xs` | `4px` | Tight internal padding |
| `space-sm` | `8px` | Between related elements |
| `space-md` | `16px` | Default internal gaps |
| `space-lg` | `24px` | Between components |
| `space-xl` | `32px` | Between sub-sections |
| `space-2xl` | `48px` | Between content groups |
| `space-3xl` | `64px` | Standard section gap (mobile) |
| `space-4xl` | `96px` | Standard section gap (tablet) |
| `space-5xl` | `120px` | Standard section gap (desktop) |
| `space-6xl` | `160px` | Hero-level vertical spacing |

### 1.5 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | `4px` | Tags, badges |
| `radius-md` | `8px` | Buttons, inputs |
| `radius-lg` | `12px` | Cards |
| `radius-xl` | `16px` | Large cards, modals |
| `radius-2xl` | `24px` | Hero images, feature blocks |
| `radius-full` | `9999px` | Pills, circular avatars |

### 1.6 Noise Texture Overlay

A full-page overlay frame sits above all content with:
- Background: repeating noise/grain texture (PNG tile, ~200x200px)
- Opacity: `3%` (0.03)
- Blend mode: `overlay`
- Pointer events: `none`
- Position: `fixed`, inset `0`
- Z-index: `999` (above all content, below cursor)

**Framer implementation:** Add a Frame at the top level of the page, set position to Fixed, fill the viewport, apply the noise image as a tile fill, set opacity to 3%, and disable pointer events.

---

## 2. Navigation

### 2.1 Layout

The navigation is a **sticky top bar** that appears on scroll (not visible on initial load in the Hero).

| Property | Value |
|----------|-------|
| Position | `sticky` / `fixed` top |
| Height | `64px` |
| Background | `rgba(6, 6, 8, 0.85)` |
| Backdrop filter | `blur(16px) saturate(180%)` |
| Border bottom | `1px solid #1E1E2E` |
| Z-index | `100` |
| Padding horizontal | Same as page container (80 / 48 / 20) |
| Visibility trigger | After scrolling past Hero section (~100vh) |

### 2.2 Content (Desktop)

```
[Logo/Wordmark]                              [Work]  [About]  [Services]  [Contact CTA]
 left-aligned                                                              right-aligned
```

| Element | Spec |
|---------|------|
| **Logo** | "Veredder" wordmark in Neue Regrade Bold, `20px`, `#F0F0F0`. On hover: gradient text (`#AAFF00` to `#9B30FF`) |
| **Nav links** | Geist Medium, `14px`, `#B0B0C0`. Hover: `#F0F0F0`. Active: `#AAFF00`. Spacing between links: `32px` |
| **Contact CTA** | Pill button, `height: 36px`, `padding: 0 20px`, `border-radius: 9999px`, background `#AAFF00`, text `#060608` Geist Medium `14px`. Hover: `#CCFF44` + glow shadow |

### 2.3 Content (Mobile)

```
[Logo/Wordmark]                              [Hamburger Icon]
```

| Element | Spec |
|---------|------|
| **Hamburger** | 3 horizontal lines, `20px` wide, `2px` thick, `#F0F0F0`, spacing `5px` between lines |
| **Menu open** | Full-screen overlay, background `#060608` at `98%` opacity. Links stacked vertically, centered, Neue Regrade Bold `32px`, spacing `24px` between links. Contact CTA at bottom as full-width pill. Close icon top-right (`24x24px` X mark) |
| **Transition** | Menu slides down from top, `400ms ease-out`. Links stagger-fade in with `60ms` delay each |

**Framer implementation:** Use Framer's built-in navigation component or create a custom sticky Frame. For mobile, use a Framer overlay transition or page overlay component.

---

## 3. HOME -- Hero Section

### 3.1 Dimensions

| Property | Value |
|----------|-------|
| Height | `100vh` (full viewport) |
| Width | Full-bleed (`100vw`) |
| Min height | `700px` |
| Display | Flex, column, center-center |
| Padding top | `0` (nav not visible here) |
| Padding bottom | `0` |

### 3.2 Background Layer

A looping video or animated background fills the entire hero.

| Property | Value |
|----------|-------|
| Type | MP4 video loop OR Framer Motion canvas |
| Content | Abstract particles/fluid simulation in green (`#AAFF00`) and purple (`#9B30FF`) on black |
| Fit | `object-fit: cover` |
| Opacity | `40%` — subtle, not overwhelming |
| Position | Absolute, inset 0 |
| Playback | Autoplay, muted, loop, `playsinline` |

On top of the video, add a radial gradient overlay:
```
radial-gradient(ellipse 60% 60% at 50% 50%, transparent 0%, #060608 70%)
```
This vignettes the video, keeping center visible and edges dark.

### 3.3 Content Layer

All content is centered both vertically and horizontally.

```
                    [Serif Accent Label]
              "Diretor Criativo | IA Audiovisual"

                   [MAIN HEADLINE]
              "CREATIVE DIRECTION FOR
                  THE AI ERA"
                 (gradient text)

                   [Subtitle]
           One-liner about what Veredder does

                [Primary CTA]    [Secondary CTA]
              "Ver Trabalhos"   "Fale Comigo"

                [Scroll Indicator]
                     arrow-down
```

#### Element Specifications

| Element | Font | Size (Desktop) | Color | Details |
|---------|------|----------------|-------|---------|
| **Serif label** | Instrument Serif Italic | `18px` | `#B0B0C0` | Uppercase tracking `0.1em`. Opacity `0.8` |
| **Headline** | Neue Regrade Bold | `80px` | Gradient text (`--gradient-text`) | Max-width `800px`. Text-align center. `-webkit-background-clip: text` |
| **Subtitle** | Geist Regular | `18px` | `#B0B0C0` | Max-width `480px`. Text-align center. Margin-top `24px` |
| **CTA Primary** | Geist Medium | `16px` | `#060608` on `#AAFF00` bg | `height: 52px`, `padding: 0 32px`, `border-radius: 9999px`. Glow shadow on hover |
| **CTA Secondary** | Geist Medium | `16px` | `#9B30FF` | Outline style: `border: 1px solid #9B30FF`, transparent bg. Hover: `bg: #1A0A33`, glow purple |
| **Scroll indicator** | Custom SVG | `24px` | `#B0B0C0` at `50%` opacity | Chevron-down or thin arrow. Animated: continuous bounce `2s ease-in-out infinite`. Position absolute, bottom `40px` |

#### Spacing between elements (top to bottom):
- Serif label to headline: `16px`
- Headline to subtitle: `24px`
- Subtitle to CTA row: `40px`
- Between CTAs: `16px`

### 3.4 Responsive Behavior

| Breakpoint | Changes |
|------------|---------|
| **Tablet** | Headline `56px`, subtitle `17px`, CTAs stay side-by-side, max-width headline `600px` |
| **Mobile** | Headline `36px`, subtitle `16px`, CTAs stack vertically (full-width, `48px` height), scroll indicator hidden, min-height `100svh` |

**Framer implementation:** Use a Stack (vertical, centered) inside a full-viewport Frame. Set the video as a background Video layer. Use Framer's built-in responsive variants for breakpoint adjustments. For the gradient text, use a Code Override or Rich Text with inline CSS.

---

## 4. HOME -- Selected Work

### 4.1 Section Container

| Property | Value |
|----------|-------|
| Padding top | `120px` (desktop), `96px` (tablet), `64px` (mobile) |
| Padding bottom | `120px` / `96px` / `64px` |
| Max width | `1200px` centered |

### 4.2 Section Header

```
[Section Label]          "SELECTED WORK"              [Filter Pills — optional]
                                                      All | Image | Video | Campaign
```

| Element | Font | Size | Color | Details |
|---------|------|------|-------|---------|
| **Section label** | Label style, Geist Medium | `11px` | `#AAFF00` | Uppercase, tracking `0.12em`. Left-aligned |
| **Section title** | Heading 1, Neue Regrade Bold | `40px` | `#F0F0F0` | Left-aligned. Margin-top `8px` |
| **Filter pills** | Geist Medium | `13px` | `#B0B0C0` | Right-aligned on desktop, below title on mobile. Active pill: `#F0F0F0` with `border-bottom: 2px solid #AAFF00`. Spacing `24px` between pills |

Title-to-grid spacing: `48px`

### 4.3 Project Grid

#### Desktop Layout (1280+)

```
+---------------------------+     +---------------------------+
|                           |     |                           |
|     PROJECT CARD 1        |     |     PROJECT CARD 2        |
|     (landscape)           |     |     (landscape)           |
|     aspect-ratio: 16/10   |     |     aspect-ratio: 16/10   |
|                           |     |                           |
+---------------------------+     +---------------------------+

+---------------------------+     +---------------------------+
|                           |     |                           |
|     PROJECT CARD 3        |     |     PROJECT CARD 4        |
|     (landscape)           |     |     (landscape)           |
|     aspect-ratio: 16/10   |     |     aspect-ratio: 16/10   |
|                           |     |                           |
+---------------------------+     +---------------------------+

+------------------------------------------+  +--------------+
|                                          |  |              |
|     PROJECT CARD 5                       |  |  CARD 6      |
|     (wide — spans 7 cols)                |  |  (narrow)    |
|     aspect-ratio: 21/10                  |  |  4:5 ratio   |
|                                          |  |              |
+------------------------------------------+  +--------------+
```

| Property | Value |
|----------|-------|
| Grid | `2 columns` for rows 1-2, then asymmetric `7col + 5col` for row 3 |
| Gap | `24px` (both row and column) |
| Card aspect ratio | Default `16/10`, varies for visual rhythm (see row 3) |

#### Card Anatomy

Each card is a clickable Frame linking to `/project/[slug]`.

```
+-----------------------------------------------+
|                                                |
|          [Thumbnail Image/Video]               |
|          (fills entire card, object-fit: cover)|
|                                                |
|  +------------------------------------------+  |
|  | [Project Title]          [Type Tag]      |  |  <-- overlay, bottom
|  | "Project Name"           "Video IA"      |  |
|  +------------------------------------------+  |
+-----------------------------------------------+
```

| Layer | Spec |
|-------|------|
| **Container** | `border-radius: 12px`, `overflow: hidden`, `border: 1px solid #1E1E2E` |
| **Thumbnail** | Image or short video loop (3-5s). `object-fit: cover`. If placeholder: solid `#0D0D12` with centered "Em Breve" text in Geist Medium `16px` `#50506B` |
| **Overlay gradient** | Bottom 40% of card: `linear-gradient(to top, rgba(6,6,8,0.9) 0%, transparent 100%)`. Always visible, intensifies on hover |
| **Project title** | Geist Medium `18px`, `#F0F0F0`. Bottom-left, padding `24px` |
| **Type tag** | Geist Medium `11px`, uppercase, `#AAFF00`, tracking `0.08em`. Bottom-right, padding `24px`. Background: `rgba(170,255,0,0.1)`, `border-radius: 4px`, `padding: 4px 8px` |

#### Card Hover State

| Property | Default | Hover (300ms ease) |
|----------|---------|-----|
| Border color | `#1E1E2E` | `#AAFF00` at `40%` opacity |
| Box shadow | `none` | `0 0 30px rgba(170,255,0,0.15), 0 0 60px rgba(170,255,0,0.05)` |
| Image scale | `1.0` | `1.04` (subtle zoom via `transform: scale`) |
| Overlay opacity | `0.6` | `0.85` |
| Title position | bottom `24px` | bottom `28px` (shifts up `4px`) |

#### Tablet Layout (768-1279)

- Grid changes to `2 columns` for all rows
- All cards use `16/10` aspect ratio
- Gap: `20px`
- Row 3: both cards become equal width (2-col)

#### Mobile Layout (< 768)

- Grid changes to `1 column`
- All cards stack vertically
- Aspect ratio: `16/9`
- Gap: `16px`
- Show max 4 cards, with a "Ver todos" link below

**Framer implementation:** Use a Framer Grid layout component. Each card is a Link-wrapped Frame with a background Image, an overlay Frame with gradient fill, and text layers. Use Variants for hover states. For placeholder cards, create a "coming soon" variant.

---

## 5. HOME -- About / Bio

### 5.1 Section Container

| Property | Value |
|----------|-------|
| Padding top/bottom | `120px` / `96px` / `64px` (desktop / tablet / mobile) |
| Background | `#060608` (same as page, or use `#0D0D12` for subtle contrast) |

### 5.2 Layout — Desktop (2 Columns)

```
+--- 5 cols (text) ---+--- 1 col gap ---+--- 6 cols (visual) ---+
|                      |                  |                       |
|  [Section Label]     |                  |  +------------------+|
|  "ABOUT"             |                  |  |                  ||
|                      |                  |  |  Photo / Visual  ||
|  [Serif Accent]      |                  |  |  (portrait)      ||
|  "Where AI meets     |                  |  |  aspect: 3/4     ||
|   creative vision"   |                  |  |  border-radius:  ||
|                      |                  |  |  16px             ||
|  [Body Text]         |                  |  |                  ||
|  2-3 paragraphs      |                  |  +------------------+|
|  about Veredder's    |                  |                       |
|  story and vision    |                  |  [Floating accent]    |
|                      |                  |  Small gradient orb   |
|  [Link]              |                  |  or glow behind image |
|  "Full story --->"   |                  |                       |
+----------------------+------------------+-----------------------+
```

#### Element Specifications

| Element | Font | Size | Color | Details |
|---------|------|------|-------|---------|
| **Section label** | Label, Geist Medium | `11px` | `#AAFF00` | Uppercase, tracking `0.12em` |
| **Serif headline** | Instrument Serif Regular | `40px` (desktop) | `#F0F0F0` | Margin-top `12px`. Max-width `420px`. Line-height `1.2` |
| **Body text** | Geist Regular | `18px` | `#B0B0C0` | Margin-top `32px`. Max-width `440px`. Line-height `1.7` |
| **Link** | Geist Medium | `16px` | `#AAFF00` | Margin-top `32px`. Arrow animates right `4px` on hover. Underline on hover |

#### Visual Side

| Property | Value |
|----------|-------|
| Image frame | `border-radius: 16px`, `overflow: hidden` |
| Aspect ratio | `3/4` (portrait) |
| Glow effect | Behind image: radial gradient `rgba(155,48,255,0.12)` extending `120px` past image edges. Adds purple ambient light feel |
| Border | `1px solid #1E1E2E` |

### 5.3 Layout — Tablet

- Same 2-column layout but tighter: `5 cols + 3 cols`
- Image aspect ratio becomes `4/5`
- Body text `17px`

### 5.4 Layout — Mobile

- Single column, stacked
- Order: Label > Serif headline > Photo (full-width, aspect `16/10`, `border-radius: 12px`) > Body text > Link
- Serif headline: `28px`
- Body text: `16px`
- Photo margin-top: `32px`
- Body text margin-top: `24px`

**Framer implementation:** Use a horizontal Stack (desktop/tablet) that converts to vertical Stack (mobile) via responsive layout. The glow behind the image can be a blurred ellipse Frame with purple fill behind the image layer.

---

## 6. HOME -- Services

### 6.1 Section Container

| Property | Value |
|----------|-------|
| Padding top/bottom | `120px` / `96px` / `64px` |
| Background | `#0D0D12` — use surface color to differentiate from adjacent sections |
| Border top/bottom | `1px solid #1E1E2E` |

### 6.2 Section Header

```
                        [Section Label]
                        "WHAT I DO"

                        [Section Title]
                   "Services & Expertise"

                        [Subtitle]
              "AI-powered creative direction for
               brands that want to lead, not follow."
```

All centered.

| Element | Font | Size | Color |
|---------|------|------|-------|
| **Label** | Geist Medium | `11px` | `#AAFF00`, uppercase, tracking `0.12em` |
| **Title** | Neue Regrade Bold | `40px` | `#F0F0F0` |
| **Subtitle** | Geist Regular | `18px` | `#B0B0C0`, max-width `520px` |

Header to cards spacing: `64px`

### 6.3 Service Cards Grid

#### Desktop Layout (4 columns)

```
+---card 1---+  +---card 2---+  +---card 3---+  +---card 4---+
|  [icon]    |  |  [icon]    |  |  [icon]    |  |  [icon]    |
|            |  |            |  |            |  |            |
|  Title     |  |  Title     |  |  Title     |  |  Title     |
|  Desc      |  |  Desc      |  |  Desc      |  |  Desc      |
+------------+  +------------+  +------------+  +------------+
```

| Property | Value |
|----------|-------|
| Grid | 4 columns, gap `24px` |
| Card width | Equal (1fr each) |
| Card padding | `32px` |
| Card background | `#14141C` |
| Card border | `1px solid #1E1E2E` |
| Card border-radius | `16px` |

#### Card Anatomy

```
+-------------------------------+
|                               |
|  [Icon / Visual]              |  40x40px, monochrome #AAFF00
|                               |
|  [Service Title]              |  Neue Regrade Bold, 20px, #F0F0F0
|                               |  margin-top: 24px
|  [Service Description]       |  Geist Regular, 15px, #B0B0C0
|  2-3 lines max               |  margin-top: 12px, line-height: 1.6
|                               |
+-------------------------------+
```

**Service cards content (4 cards):**

1. **Direcao Criativa IA** — Icon: compass/wand. "Concepcao e direcao artistica de projetos visuais usando inteligencia artificial como ferramenta criativa."
2. **Producao de Video IA** — Icon: film/play. "Videos gerados e editados com IA — de concept a entrega final, com narrativa e qualidade cinematica."
3. **Geracao de Imagens IA** — Icon: image/sparkle. "Criacao de imagens originais com IA para campanhas, branding, editorial e conteudo digital."
4. **Consultoria Criativa** — Icon: chat/lightbulb. "Orientacao estrategica para marcas e studios que querem integrar IA no processo criativo."

#### Card Hover State

| Property | Default | Hover (400ms ease) |
|----------|---------|-----|
| Border | `1px solid #1E1E2E` | `1px solid transparent` + gradient border pseudo-element (`--gradient-border`) |
| Box shadow | `none` | `--shadow-glow-dual` |
| Icon color | `#AAFF00` | `#CCFF44` |
| Transform | `none` | `translateY(-4px)` |
| Background | `#14141C` | `#14141C` (unchanged) |

**Gradient border on hover:** Use the pseudo-element technique from the Color System doc. The border animates in via opacity transition.

#### Tablet Layout (768-1279)

- Grid: `2 columns`, gap `20px`
- Cards arranged in 2x2

#### Mobile Layout (< 768)

- Grid: `1 column`, gap `16px`
- Cards stack vertically, full width
- Card padding: `24px`

### 6.4 Bottom CTA (below cards)

| Property | Value |
|----------|-------|
| Margin-top | `64px` |
| Alignment | Center |
| Text | "Vamos conversar?" in Geist Medium `16px` `#B0B0C0` |
| Button | "Entre em contato" — Primary pill button (same as nav CTA but `height: 48px`, `padding: 0 28px`) |

**Framer implementation:** Use a Framer Grid or Wrap layout for the cards. Each card is a Frame with variants for default/hover. The gradient border on hover is best achieved with a Code Override that toggles a wrapper frame's gradient background (acting as the border).

---

## 7. HOME -- Footer

### 7.1 Section Container

| Property | Value |
|----------|-------|
| Padding top | `80px` |
| Padding bottom | `40px` |
| Background | `#060608` |
| Border top | `1px solid #1E1E2E` with green glow: `box-shadow: 0 -1px 30px rgba(170,255,0,0.06)` |

### 7.2 Layout — Desktop

```
+------ Left (6 cols) ------+------ Right (6 cols) ------+
|                            |                             |
|  [Wordmark]                |  [Social Links]             |
|  "Veredder"                |  Instagram  X  LinkedIn     |
|  Neue Regrade Bold, 24px   |  Email                      |
|                            |                             |
|  [Tagline]                 |  [CTA]                      |
|  "Creative Direction       |  "Vamos criar algo?"        |
|   for the AI Era"          |  Arrow-right link           |
|  Geist Regular, 15px       |                             |
|  #B0B0C0                   |                             |
+----------------------------+-----------------------------+

+-----------------------------------------------------------+
|                      [Divider line]                       |
|                   1px solid #1E1E2E                       |
+-----------------------------------------------------------+

+--- Left ---+------ Center ------+------ Right ------+
|  (c) 2026  |  Built with AI     |   Privacy  Terms  |
|  Veredder  |  [badge/text]      |                    |
+------------+--------------------+--------------------+
```

#### Element Specifications

| Element | Font | Size | Color | Details |
|---------|------|------|-------|---------|
| **Wordmark** | Neue Regrade Bold | `24px` | `#F0F0F0` | — |
| **Tagline** | Geist Regular | `15px` | `#B0B0C0` | Margin-top `12px`, max-width `280px` |
| **Social links** | Geist Medium | `14px` | `#B0B0C0` | Hover: `#AAFF00`. Spacing `24px` between links. Can also be icon-only (24x24px SVG) |
| **CTA link** | Geist Medium | `16px` | `#AAFF00` | Arrow animates right on hover |
| **Divider** | — | — | `#1E1E2E` | Full-width, margin `40px 0` |
| **Copyright** | Geist Regular | `13px` | `#50506B` | — |
| **Built with AI** | Geist Medium | `11px` | `#7A7A94` | Badge style: `border: 1px solid #1E1E2E`, `border-radius: 9999px`, `padding: 4px 12px` |
| **Legal links** | Geist Regular | `13px` | `#50506B` | Hover: `#B0B0C0`. Spacing `16px` |

### 7.3 Layout — Mobile

- All content stacks vertically, left-aligned
- Social links become a horizontal row of icons
- Bottom bar stacks: copyright > built-with-AI > legal links
- All centered on mobile

**Framer implementation:** Use vertical/horizontal Stacks. The top glow on the border can be a Frame with a green radial gradient at the top edge, very low opacity.

---

## 8. Project Page Template

### 8.1 Page URL Pattern

`/project/[slug]` — e.g., `/project/campaign-xyz`

Each project page follows this template. Content is populated per project.

### 8.2 Section 1: Project Hero

| Property | Value |
|----------|-------|
| Height | `80vh` (desktop), `60vh` (mobile) |
| Min height | `500px` |
| Width | Full-bleed |
| Background | Project hero image or video, `object-fit: cover` |
| Overlay | `linear-gradient(to top, #060608 0%, rgba(6,6,8,0.3) 40%, transparent 60%)` |
| Border radius | `0` (full-bleed) |

Content overlay at bottom:

```
                    [Back Link]
                    "<-- All Projects"

                    [PROJECT TITLE]
                    Neue Regrade Bold, 56px, #F0F0F0

                    [Project Subtitle]
                    Geist Regular, 18px, #B0B0C0
```

| Element | Spec |
|---------|------|
| **Back link** | Geist Medium `14px`, `#B0B0C0`. Hover: `#AAFF00`. Arrow animates left on hover. Positioned top-left, padding `32px` from edges |
| **Title** | Positioned bottom of hero, `padding-bottom: 64px`, left-aligned within content container |
| **Subtitle** | Below title, `margin-top: 8px` |

### 8.3 Section 2: Project Meta

A horizontal strip of metadata below the hero.

```
+----------+----------+----------+----------+
|  CLIENT  |   TYPE   |  PERIOD  | AI TOOLS |
|  Name    |  Video   |  2025    |  Runway  |
|          |  IA      |  Q1-Q2   |  Midj.   |
+----------+----------+----------+----------+
```

| Property | Value |
|----------|-------|
| Container | `padding: 48px 0`, `border-bottom: 1px solid #1E1E2E` |
| Layout | Flex row, `justify-content: space-between` (desktop). Grid 2x2 (mobile) |
| Column label | Geist Medium `11px`, `#7A7A94`, uppercase, tracking `0.08em` |
| Column value | Geist Medium `16px`, `#F0F0F0`, `margin-top: 8px` |

### 8.4 Section 3: Case Study Flow

A structured narrative section. Uses a single-column text layout (centered, narrow).

| Property | Value |
|----------|-------|
| Content max-width | `720px`, centered |
| Section padding | `96px 0` |

#### Sub-sections (each separated by `64px`):

**3a. Context / The Brief**
```
[Sub-label]   "THE BRIEF"          Geist Medium 11px, #AAFF00, uppercase
[Heading]     "What was the        Heading 2, Neue Regrade Bold 32px
               challenge?"
[Body]        2-3 paragraphs       Geist Regular 18px, #B0B0C0, line-height 1.7
```

**3b. Process / How AI Was Used**
```
[Sub-label]   "PROCESS"
[Heading]     "Approach & Tools"
[Body]        Description of workflow
[Inline images/videos]             Full-width within 720px container, border-radius 12px, margin 32px 0
```

**3c. Result / Deliverables**
```
[Sub-label]   "RESULT"
[Heading]     "The Outcome"
[Body]        Description of final deliverables
[Metrics row]                      Optional: impact numbers (views, engagement, etc.)
```

#### Metrics Row (optional)

```
+--------+--------+--------+
|  2.3M  |  45%   |  12    |
| views  | engag. | assets |
+--------+--------+--------+
```

| Property | Value |
|----------|-------|
| Layout | Flex row, `gap: 48px`, centered |
| Number | Neue Regrade Bold `48px`, gradient text (`--gradient-text`) |
| Label | Geist Medium `13px`, `#7A7A94`, uppercase |
| Container | `padding: 48px`, `background: #0D0D12`, `border-radius: 16px`, `border: 1px solid #1E1E2E` |

### 8.5 Section 4: Gallery

A media grid showcasing project deliverables.

| Property | Value |
|----------|-------|
| Padding | `96px 0` |
| Max-width | `1200px` (wider than case study text) |

#### Gallery Grid

```
+------- large --------+  +-- small --+
|                       |  |           |
|   (16/10)             |  |  (1/1)   |
|                       |  |           |
+-----------------------+  +-----------+
+-- small --+  +------- large --------+
|           |  |                       |
|  (1/1)    |  |   (16/10)            |
|           |  |                       |
+-----------+  +-----------------------+
```

- Desktop: Masonry-like 2-column with alternating sizes (8col + 4col, then 4col + 8col)
- Gap: `16px`
- Each image: `border-radius: 12px`, `overflow: hidden`
- On click: Optional lightbox overlay (full-screen, black bg `95%` opacity, image centered, close X top-right)
- Tablet: 2 equal columns
- Mobile: 1 column, all full-width

### 8.6 Section 5: Next Project

A full-width call to continue browsing.

```
+-----------------------------------------------------------+
|                                                           |
|  [Label]        "NEXT PROJECT"                            |
|                                                           |
|  [Project Name]  "Campaign XYZ"                           |
|                  Neue Regrade Bold, 48px                  |
|                                                           |
|  [Arrow]         --->                                     |
|                                                           |
+-----------------------------------------------------------+
```

| Property | Value |
|----------|-------|
| Height | `300px` (desktop), `240px` (mobile) |
| Background | Next project's thumbnail at `20%` opacity, `object-fit: cover` |
| Overlay | `rgba(6,6,8,0.8)` |
| Content | Centered vertically and horizontally |
| Label | Geist Medium `11px`, `#7A7A94`, uppercase |
| Project name | Neue Regrade Bold `48px` (desktop), `32px` (mobile), `#F0F0F0`. Hover: gradient text |
| Cursor | Pointer. Entire section is clickable |
| Hover | Background image opacity `30%`, name gets gradient, arrow shifts right `8px` |
| Transition | `500ms ease` |

**Framer implementation:** Each project page is a CMS-driven template in Framer (if using Framer CMS) or individual pages with shared components. Use Framer's Page Transitions (fade or slide) when navigating between project pages.

---

## 9. Shared Components

### 9.1 Primary Button

| Property | Value |
|----------|-------|
| Height | `48px` (default), `52px` (hero), `36px` (nav) |
| Padding | `0 28px` |
| Border radius | `9999px` (pill) |
| Background | `#AAFF00` |
| Text | Geist Medium `16px` (default), `14px` (small), `#060608` |
| Hover | `background: #CCFF44`, `box-shadow: 0 0 30px rgba(170,255,0,0.4)` |
| Active | `background: #79B300` |
| Transition | `200ms ease` |

### 9.2 Secondary Button

| Property | Value |
|----------|-------|
| Height | `48px` |
| Padding | `0 28px` |
| Border radius | `9999px` |
| Background | `transparent` |
| Border | `1px solid #9B30FF` |
| Text | Geist Medium `16px`, `#B366FF` |
| Hover | `background: #1A0A33`, `border-color: #B366FF`, `box-shadow: 0 0 20px rgba(155,48,255,0.3)` |
| Active | `background: #4A1280` |

### 9.3 Text Link

| Property | Value |
|----------|-------|
| Text | Geist Medium `16px`, `#AAFF00` |
| Decoration | None default. Underline on hover (offset `4px`) |
| Arrow | Optional inline arrow `-->` that shifts right `4px` on hover |
| Hover color | `#CCFF44` with `text-shadow: 0 0 8px rgba(170,255,0,0.3)` |

### 9.4 Section Label (reusable)

| Property | Value |
|----------|-------|
| Font | Geist Medium `11px` |
| Color | `#AAFF00` |
| Transform | `uppercase` |
| Letter spacing | `0.12em` |
| Optional | Left green dot: `6px` circle `#AAFF00` with `margin-right: 8px` |

### 9.5 Gradient Text (reusable)

| Property | Value |
|----------|-------|
| Background | `linear-gradient(90deg, #AAFF00, #9B30FF)` |
| Background-clip | `text` |
| -webkit-text-fill-color | `transparent` |

In Framer: apply via Code Override on the text element's style property.

### 9.6 Tag / Badge

| Property | Value |
|----------|-------|
| Font | Geist Medium `11px`, uppercase |
| Color | `#AAFF00` |
| Background | `rgba(170,255,0,0.1)` |
| Border radius | `4px` |
| Padding | `4px 8px` |
| Variants | Green (default), Purple (`#9B30FF` text, `rgba(155,48,255,0.1)` bg) |

---

## 10. Animation & Interaction Spec

### 10.1 Scroll-Triggered Reveals

Every section and major element uses a scroll-triggered entrance animation.

| Property | Value |
|----------|-------|
| **Trigger** | Element enters viewport (threshold: `20%` visible) |
| **Initial state** | `opacity: 0`, `transform: translateY(32px)` |
| **Animate to** | `opacity: 1`, `transform: translateY(0)` |
| **Duration** | `600ms` |
| **Easing** | `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out expo) |
| **Stagger** | When multiple elements in a group (e.g., service cards), stagger by `100ms` each |
| **Trigger once** | Yes — animation does not reverse on scroll up |

**Framer implementation:** Use Framer's built-in Scroll Animations. Select the element, go to the Animations panel, add "While in Viewport" trigger with fade + slide-up. Set to "Once."

### 10.2 Hero Entrance

The hero content has a staggered entrance on page load (not scroll-triggered).

| Element | Delay | Animation |
|---------|-------|-----------|
| Background video | `0ms` | Fade in from `0` to `40%` opacity, `1200ms`, ease |
| Serif label | `300ms` | Fade + slide-up `20px`, `600ms` |
| Headline | `450ms` | Fade + slide-up `32px`, `800ms` |
| Subtitle | `600ms` | Fade + slide-up `20px`, `600ms` |
| CTAs | `750ms` | Fade + slide-up `20px`, `600ms` |
| Scroll indicator | `1200ms` | Fade in, then bounce loop starts |

### 10.3 Navigation Reveal

| Property | Value |
|----------|-------|
| Trigger | Scroll position > `100vh` |
| Animation | Slide down from `-64px` to `0`, `400ms ease-out` |
| Reverse | When scroll < `100vh`, slide up to `-64px`, `300ms ease-in` |

### 10.4 Card Hover Effects

All hover transitions use `300ms cubic-bezier(0.16, 1, 0.3, 1)`.

- Image zoom: `scale(1)` to `scale(1.04)`
- Border glow: opacity from `0` to `1`
- Title shift: `translateY(0)` to `translateY(-4px)`

### 10.5 Page Transitions (Project Pages)

| Property | Value |
|----------|-------|
| Type | Crossfade |
| Duration | `400ms` |
| Easing | `ease-in-out` |
| Outgoing page | Fade to `0`, `200ms` |
| Incoming page | Fade from `0`, `200ms` (starts at `200ms`) |

**Framer implementation:** Set page transitions in Framer's Page settings. Use "Fade" transition type.

### 10.6 Smooth Scroll

| Property | Value |
|----------|-------|
| Behavior | `smooth` for anchor links (Work, About, Services) |
| Offset | `-80px` (accounts for sticky nav height + gap) |

### 10.7 Custom Cursor (Optional)

| Property | Value |
|----------|-------|
| Shape | Circle, `20px` diameter |
| Color | `#AAFF00` at `50%` opacity |
| Blend mode | `difference` or `exclusion` |
| Follow speed | Slight lag (`lerp 0.15`) for organic feel |
| Hover on links | Scale to `48px`, fill `rgba(170,255,0,0.15)` |

**Framer implementation:** Use a Code Override with `useMotionValue` and `useSpring` to track mouse position and render a fixed-position circle. This is an enhancement, not essential for V1.

---

## 11. Responsive Breakpoints

### 11.1 Breakpoint Definitions

| Name | Range | Framer Breakpoint |
|------|-------|-------------------|
| Desktop L | `1440px+` | Base (design at 1440) |
| Desktop | `1280px - 1439px` | — (fluid within base) |
| Tablet | `768px - 1279px` | Tablet breakpoint |
| Mobile | `< 768px` | Mobile breakpoint |

### 11.2 Responsive Summary Table

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| **Container padding** | `80px` | `48px` | `20px` |
| **Section gap** | `120px` | `96px` | `64px` |
| **Hero headline** | `80px` | `56px` | `36px` |
| **Hero CTAs** | Side-by-side | Side-by-side | Stacked, full-width |
| **Work grid** | 2 cols + asymmetric | 2 cols | 1 col |
| **About layout** | 2 cols (text + image) | 2 cols (narrower image) | 1 col, image above text |
| **Services grid** | 4 cols | 2 cols | 1 col |
| **Footer** | 2 cols top, 3 cols bottom | 1 col stacked | 1 col stacked, centered |
| **Nav** | Full links + CTA | Full links + CTA | Hamburger + overlay |
| **Project hero** | `80vh` | `70vh` | `60vh` |
| **Project meta** | Horizontal row | 2x2 grid | 2x2 grid |
| **Gallery** | Asymmetric 2-col | Equal 2-col | 1 col |

### 11.3 Touch Targets (Mobile)

All interactive elements on mobile must have a minimum touch target of `44x44px` (Apple HIG) or `48x48px` (Material). This applies to:
- Nav hamburger icon
- Menu links
- Buttons
- Social links in footer
- Filter pills
- Back links on project pages

---

## Appendix A: Framer-Specific Build Notes

### Component Architecture

Create these as **Framer Components** for reuse:

1. **SectionLabel** — Green label atom (text + optional dot)
2. **ButtonPrimary** — Pill button with size variants (sm/md/lg)
3. **ButtonSecondary** — Outline pill button
4. **ProjectCard** — With variants: default, hover, placeholder
5. **ServiceCard** — With variants: default, hover
6. **NavBar** — With variants: desktop, mobile-closed, mobile-open
7. **MetaColumn** — Label + value pair for project pages
8. **GradientText** — Text with gradient fill override
9. **SectionContainer** — Wrapper with responsive padding presets
10. **FooterSocials** — Row of social icon links

### Code Overrides Needed

1. **Gradient text** — Apply CSS `background-clip: text` (Framer does not natively support gradient text fills on all text types)
2. **Noise overlay** — Fixed-position noise texture with `pointer-events: none`
3. **Nav scroll visibility** — Show/hide nav based on scroll position
4. **Smooth scroll offset** — Adjust anchor scroll to account for nav height
5. **Custom cursor** (optional) — Mouse-tracking circle element

### CMS Setup (If Using Framer CMS)

For project pages, create a CMS Collection:

| Field | Type | Notes |
|-------|------|-------|
| `title` | Text | Project name |
| `slug` | Slug | Auto-generated from title |
| `subtitle` | Text | Short description |
| `type` | Option | Image IA / Video IA / Campanha / Experimental |
| `client` | Text | Client name |
| `period` | Text | e.g., "2025 Q1-Q2" |
| `ai_tools` | Text | e.g., "Runway, Midjourney, Sora" |
| `hero_media` | Image/Video | Hero visual |
| `thumbnail` | Image | Grid thumbnail |
| `brief` | Rich Text | The challenge |
| `process` | Rich Text | How AI was used |
| `result` | Rich Text | Outcome |
| `gallery` | Multi-Image | Gallery images |
| `metrics` | Text | Optional JSON or formatted string |
| `next_project` | Reference | Link to next project |
| `order` | Number | Sort order in grid |
| `is_placeholder` | Boolean | Show "Em Breve" state |

### Asset Checklist

Before starting the Framer build, prepare:

- [ ] Noise texture tile (PNG, ~200x200px, subtle grain)
- [ ] Hero background video (MP4, 1920x1080, <10MB, 10-15s loop)
- [ ] About section portrait photo
- [ ] Service icons (4x SVG, monochrome, 40x40px viewbox)
- [ ] Social icons (SVG: Instagram, X/Twitter, LinkedIn, Email)
- [ ] Favicon (SVG or ICO, Veredder mark with green accent)
- [ ] OG image (1200x630px, brand visual for social sharing)
- [ ] Placeholder project thumbnails or patterns
- [ ] Neue Regrade font files (if not available via Framer's font picker — check availability)
- [ ] Instrument Serif (available via Google Fonts in Framer)
- [ ] Geist (available via Google Fonts in Framer)

---

## Appendix B: Visual Section Map

```
+===========================================================+
|                        VIEWPORT                            |
+===========================================================+
|                                                           |
|                    [HERO — 100vh]                          |
|              Video bg + gradient overlay                   |
|         Serif label / Headline / Subtitle / CTAs          |
|                    Scroll indicator                        |
|                                                           |
+-----------------------------------------------------------+
|                                                           |
|              [SELECTED WORK — auto height]                |
|         Section label + Title + Filter pills              |
|               2-col project card grid                     |
|           (4-6 cards with hover glow)                     |
|                                                           |
+-----------------------------------------------------------+
|                                                           |
|               [ABOUT / BIO — auto height]                 |
|         Left: Label + Serif title + Body + Link           |
|         Right: Portrait photo + purple glow               |
|                                                           |
+-----------------------------------------------------------+
|                                                           |
|              [SERVICES — auto height]                     |
|           bg: #0D0D12 (surface differentiation)           |
|         Centered header + 4-col card grid                 |
|            Gradient borders on hover                      |
|                   Bottom CTA                              |
|                                                           |
+-----------------------------------------------------------+
|                                                           |
|                  [FOOTER — auto height]                   |
|           Green glow border-top                           |
|         Wordmark + tagline | Socials + CTA               |
|              Divider                                      |
|         Copyright | Built with AI | Legal                 |
|                                                           |
+===========================================================+
```

---

*End of Wireframe Specification. This document, combined with the Color System and Brand Profile documents, provides everything needed to build the Veredder website in Framer.*

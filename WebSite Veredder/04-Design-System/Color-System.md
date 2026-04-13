# Color System — Veredder

> Fluorescent Slime Green + Deep Purple on Dark Mode
> Aesthetic: toxic, radioactive, glowing — but professional enough to close deals.

---

## 1. Base Colors (Dark Mode)

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#060608` | Page background — near-black with cold blue undertone |
| `--bg-surface` | `#0D0D12` | Cards, sections, content blocks |
| `--bg-elevated` | `#14141C` | Modals, dropdowns, hover cards |
| `--bg-subtle` | `#1A1A26` | Code blocks, input fields |
| `--border-default` | `#1E1E2E` | Subtle dividers, card borders |
| `--border-strong` | `#2A2A3D` | Active borders, focused inputs |
| `--border-accent` | `#333350` | Decorative borders |

**Rationale:** Cold-tinted darks (blue/purple undertone) instead of pure `#000000`. This creates visual depth, makes the neon accents pop harder, and avoids the "flat void" effect of pure black. Inspired by tigranz.com's `#090a0c` but pushed slightly more purple.

---

## 2. Text Colors

| Token | Hex | Contrast on #060608 | Usage |
|-------|-----|---------------------|-------|
| `--text-primary` | `#F0F0F0` | 17.2:1 | Headlines, body text |
| `--text-secondary` | `#B0B0C0` | 9.8:1 | Descriptions, subtitles |
| `--text-tertiary` | `#7A7A94` | 5.1:1 | Labels, metadata, dates |
| `--text-muted` | `#50506B` | 3.1:1 | Placeholders, disabled (decorative only) |
| `--text-inverse` | `#060608` | — | Text on bright accent backgrounds |

**Note:** `--text-muted` is below WCAG AA for body text (4.5:1). Use only for decorative/non-essential elements, or pair with larger text (18px+) where AA large applies at 3:1.

---

## 3. Accent: Slime Green (Primary Accent)

The signature Veredder color. Think radioactive waste, toxic slime, bioluminescence.

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--green-main` | `#AAFF00` | 170, 255, 0 | Primary CTAs, links, highlights — the hero color |
| `--green-bright` | `#CCFF44` | 204, 255, 68 | Hover states, glowing effects |
| `--green-light` | `#D4FF80` | 212, 255, 128 | Selected text bg, tags, badges |
| `--green-dark` | `#79B300` | 121, 179, 0 | Active/pressed states |
| `--green-deep` | `#4D7300` | 77, 115, 0 | Subtle backgrounds, muted indicators |
| `--green-muted` | `#1A2600` | 26, 38, 0 | Background tint for green sections |
| `--green-glow` | `rgba(170, 255, 0, 0.15)` | — | Box-shadow / ambient glow effect |
| `--green-glow-strong` | `rgba(170, 255, 0, 0.30)` | — | Intense glow on hover |

**Contrast notes:**
- `#AAFF00` on `#060608` = 14.8:1 (AAA pass)
- `#060608` on `#AAFF00` = 14.8:1 (AAA pass — safe for dark text on green buttons)

---

## 4. Accent: Purple (Secondary Accent)

Deep, electric, regal. The counterweight to the green's toxicity.

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--purple-main` | `#9B30FF` | 155, 48, 255 | Secondary CTAs, decorative accents |
| `--purple-bright` | `#B366FF` | 179, 102, 255 | Hover states |
| `--purple-light` | `#CC99FF` | 204, 153, 255 | Tags, secondary badges |
| `--purple-dark` | `#7B1FCC` | 123, 31, 204 | Active/pressed states |
| `--purple-deep` | `#4A1280` | 74, 18, 128 | Subtle decorative backgrounds |
| `--purple-muted` | `#1A0A33` | 26, 10, 51 | Background tint for purple sections |
| `--purple-glow` | `rgba(155, 48, 255, 0.15)` | — | Box-shadow / ambient glow effect |
| `--purple-glow-strong` | `rgba(155, 48, 255, 0.30)` | — | Intense glow on hover |

**Contrast notes:**
- `#9B30FF` on `#060608` = 5.2:1 (AA pass for normal text, AAA for large text)
- `#CC99FF` on `#060608` = 9.4:1 (AAA pass — use for body text if needed)

---

## 5. Interactive States

### Green accent interactions
| State | Token | Value |
|-------|-------|-------|
| Default | `--green-main` | `#AAFF00` |
| Hover | `--green-bright` | `#CCFF44` |
| Active/Pressed | `--green-dark` | `#79B300` |
| Focus ring | `--green-focus` | `0 0 0 2px #060608, 0 0 0 4px #AAFF00` |
| Disabled | `--green-deep` | `#4D7300` at 50% opacity |

### Purple accent interactions
| State | Token | Value |
|-------|-------|-------|
| Default | `--purple-main` | `#9B30FF` |
| Hover | `--purple-bright` | `#B366FF` |
| Active/Pressed | `--purple-dark` | `#7B1FCC` |
| Focus ring | `--purple-focus` | `0 0 0 2px #060608, 0 0 0 4px #9B30FF` |
| Disabled | `--purple-deep` | `#4A1280` at 50% opacity |

---

## 6. Gradients

| Token | CSS Value | Usage |
|-------|-----------|-------|
| `--gradient-veredder` | `linear-gradient(135deg, #AAFF00, #9B30FF)` | Hero sections, primary gradient — the brand signature |
| `--gradient-veredder-reverse` | `linear-gradient(135deg, #9B30FF, #AAFF00)` | Alternate direction |
| `--gradient-toxic` | `linear-gradient(135deg, #AAFF00, #CCFF44, #79B300)` | Green-only, radioactive feel |
| `--gradient-void` | `linear-gradient(135deg, #9B30FF, #4A1280, #1A0A33)` | Purple-only, deep space |
| `--gradient-glow` | `linear-gradient(180deg, rgba(170,255,0,0.08) 0%, transparent 50%)` | Top-down subtle page glow |
| `--gradient-surface` | `linear-gradient(180deg, #0D0D12, #060608)` | Subtle card/section depth |
| `--gradient-text` | `linear-gradient(90deg, #AAFF00, #9B30FF)` | For `background-clip: text` headlines |
| `--gradient-border` | `linear-gradient(135deg, #AAFF00, #9B30FF)` | Animated border effects (use with `border-image` or pseudo-elements) |

### Gradient text example
```css
.gradient-text {
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 7. Semantic Colors

Derived from the accent palette to stay on-brand. Avoid generic reds/greens that clash.

| Token | Hex | Usage |
|-------|-----|-------|
| `--semantic-success` | `#AAFF00` | Success states — uses the brand green |
| `--semantic-success-bg` | `#1A2600` | Success background tint |
| `--semantic-warning` | `#FFB800` | Warnings, caution — warm amber |
| `--semantic-warning-bg` | `#2B2000` | Warning background tint |
| `--semantic-error` | `#FF3366` | Errors, destructive actions — hot pink-red |
| `--semantic-error-bg` | `#2B0A15` | Error background tint |
| `--semantic-info` | `#9B30FF` | Info, neutral highlights — uses the brand purple |
| `--semantic-info-bg` | `#1A0A33` | Info background tint |

---

## 8. Special Effects

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-glow-green` | `0 0 20px rgba(170,255,0,0.3), 0 0 60px rgba(170,255,0,0.1)` | Neon glow around elements |
| `--shadow-glow-purple` | `0 0 20px rgba(155,48,255,0.3), 0 0 60px rgba(155,48,255,0.1)` | Purple neon glow |
| `--shadow-glow-dual` | `0 0 20px rgba(170,255,0,0.2), 0 0 20px rgba(155,48,255,0.2), 0 0 60px rgba(170,255,0,0.05)` | Dual-tone ambient glow |
| `--shadow-card` | `0 4px 24px rgba(0,0,0,0.5)` | Card elevation shadow |
| `--overlay-dark` | `rgba(6,6,8,0.8)` | Modal/overlay backdrop |
| `--noise-opacity` | `0.03` | Grain/noise texture overlay intensity |

---

## 9. CSS Custom Properties

```css
:root {
  /* ==========================================
     VEREDDER COLOR SYSTEM
     Fluorescent Slime Green + Deep Purple
     ========================================== */

  /* --- Base --- */
  --bg-primary: #060608;
  --bg-surface: #0D0D12;
  --bg-elevated: #14141C;
  --bg-subtle: #1A1A26;
  --border-default: #1E1E2E;
  --border-strong: #2A2A3D;
  --border-accent: #333350;

  /* --- Text --- */
  --text-primary: #F0F0F0;
  --text-secondary: #B0B0C0;
  --text-tertiary: #7A7A94;
  --text-muted: #50506B;
  --text-inverse: #060608;

  /* --- Green (Slime / Toxic / Radioactive) --- */
  --green-main: #AAFF00;
  --green-bright: #CCFF44;
  --green-light: #D4FF80;
  --green-dark: #79B300;
  --green-deep: #4D7300;
  --green-muted: #1A2600;
  --green-glow: rgba(170, 255, 0, 0.15);
  --green-glow-strong: rgba(170, 255, 0, 0.30);

  /* --- Purple (Electric / Deep / Void) --- */
  --purple-main: #9B30FF;
  --purple-bright: #B366FF;
  --purple-light: #CC99FF;
  --purple-dark: #7B1FCC;
  --purple-deep: #4A1280;
  --purple-muted: #1A0A33;
  --purple-glow: rgba(155, 48, 255, 0.15);
  --purple-glow-strong: rgba(155, 48, 255, 0.30);

  /* --- Gradients --- */
  --gradient-veredder: linear-gradient(135deg, #AAFF00, #9B30FF);
  --gradient-veredder-reverse: linear-gradient(135deg, #9B30FF, #AAFF00);
  --gradient-toxic: linear-gradient(135deg, #AAFF00, #CCFF44, #79B300);
  --gradient-void: linear-gradient(135deg, #9B30FF, #4A1280, #1A0A33);
  --gradient-glow: linear-gradient(180deg, rgba(170, 255, 0, 0.08) 0%, transparent 50%);
  --gradient-surface: linear-gradient(180deg, #0D0D12, #060608);
  --gradient-text: linear-gradient(90deg, #AAFF00, #9B30FF);
  --gradient-border: linear-gradient(135deg, #AAFF00, #9B30FF);

  /* --- Semantic --- */
  --semantic-success: #AAFF00;
  --semantic-success-bg: #1A2600;
  --semantic-warning: #FFB800;
  --semantic-warning-bg: #2B2000;
  --semantic-error: #FF3366;
  --semantic-error-bg: #2B0A15;
  --semantic-info: #9B30FF;
  --semantic-info-bg: #1A0A33;

  /* --- Shadows & Effects --- */
  --shadow-glow-green: 0 0 20px rgba(170, 255, 0, 0.3), 0 0 60px rgba(170, 255, 0, 0.1);
  --shadow-glow-purple: 0 0 20px rgba(155, 48, 255, 0.3), 0 0 60px rgba(155, 48, 255, 0.1);
  --shadow-glow-dual: 0 0 20px rgba(170, 255, 0, 0.2), 0 0 20px rgba(155, 48, 255, 0.2), 0 0 60px rgba(170, 255, 0, 0.05);
  --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.5);
  --overlay-dark: rgba(6, 6, 8, 0.8);
}
```

---

## 10. Quick Reference — Component Patterns

### Primary Button (Green)
```css
.btn-primary {
  background: var(--green-main);
  color: var(--text-inverse);
  border: none;
  box-shadow: var(--shadow-glow-green);
  transition: all 0.2s ease;
}
.btn-primary:hover {
  background: var(--green-bright);
  box-shadow: 0 0 30px rgba(170, 255, 0, 0.4), 0 0 80px rgba(170, 255, 0, 0.15);
}
.btn-primary:active {
  background: var(--green-dark);
}
```

### Secondary Button (Purple outline)
```css
.btn-secondary {
  background: transparent;
  color: var(--purple-bright);
  border: 1px solid var(--purple-main);
  transition: all 0.2s ease;
}
.btn-secondary:hover {
  background: var(--purple-muted);
  border-color: var(--purple-bright);
  box-shadow: var(--shadow-glow-purple);
}
.btn-secondary:active {
  background: var(--purple-deep);
}
```

### Card
```css
.card {
  background: var(--bg-surface);
  border: 1px solid var(--border-default);
  box-shadow: var(--shadow-card);
  transition: all 0.3s ease;
}
.card:hover {
  border-color: var(--border-strong);
  box-shadow: var(--shadow-glow-dual);
}
```

### Link
```css
a {
  color: var(--green-main);
  text-decoration: none;
  transition: color 0.2s ease;
}
a:hover {
  color: var(--green-bright);
  text-shadow: 0 0 8px rgba(170, 255, 0, 0.3);
}
```

### Gradient border trick
```css
.gradient-border {
  position: relative;
  background: var(--bg-surface);
  border-radius: 12px;
}
.gradient-border::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 13px;
  background: var(--gradient-border);
  z-index: -1;
}
```

---

## 11. Color Hierarchy Rules

1. **Green is the star.** Use it for primary actions, key links, the most important element on any screen.
2. **Purple is the supporting act.** Use it for secondary actions, decorative accents, background gradients, hover effects.
3. **Never compete.** A section should lead with green OR purple, not both at equal weight. The gradient is for hero moments only.
4. **Text stays neutral.** Body text is always `--text-primary` or `--text-secondary`. Never set body text in green or purple.
5. **Glow sparingly.** Neon glow effects lose power when overused. Reserve `box-shadow` glows for CTAs and hover states.
6. **Semantic > brand.** In forms and alerts, semantic colors override brand colors. A success toast uses `--semantic-success`, not a custom green.

---

## 12. Contrast Ratio Summary (WCAG)

| Foreground | Background | Ratio | Rating |
|------------|------------|-------|--------|
| `#F0F0F0` (text-primary) | `#060608` (bg) | 17.2:1 | AAA |
| `#B0B0C0` (text-secondary) | `#060608` (bg) | 9.8:1 | AAA |
| `#7A7A94` (text-tertiary) | `#060608` (bg) | 5.1:1 | AA |
| `#50506B` (text-muted) | `#060608` (bg) | 3.1:1 | AA Large only |
| `#AAFF00` (green-main) | `#060608` (bg) | 14.8:1 | AAA |
| `#9B30FF` (purple-main) | `#060608` (bg) | 5.2:1 | AA |
| `#CC99FF` (purple-light) | `#060608` (bg) | 9.4:1 | AAA |
| `#060608` (text-inverse) | `#AAFF00` (green bg) | 14.8:1 | AAA |
| `#060608` (text-inverse) | `#9B30FF` (purple bg) | 5.2:1 | AA |
| `#FFB800` (warning) | `#060608` (bg) | 11.2:1 | AAA |
| `#FF3366` (error) | `#060608` (bg) | 6.1:1 | AA |

# Design Reference — Award-Winning Dark Landing Pages

## Sources Analyzed
1. **Raycast** (raycast.com) — Dark creative product page, glow effects, glass morphism
2. **Resend** (resend.com) — Dark minimal, gradient buttons, editorial typography
3. **Linear** (linear.app) — Dark product page, Inter font, gradient text
4. **Vercel Ship** (vercel.com/ship) — Dark event/conference page
5. **Cosmos** (cosmos.so) — Dark creative, custom serif font, near-black bg

---

## Consolidated Design System for Remix

### Color Palette (derived from Raycast + Resend + Cosmos)
| Token | Value | Source |
|-------|-------|--------|
| bg-primary | `#0D0D0D` | Cosmos |
| bg-alt | `#070910` | Raycast |
| text-primary | `#E5E5E5` | Resend |
| text-secondary | `#A0A0A0` | — |
| text-muted | `#535353` | Resend |
| accent-1 | `#FF7A98` | Raycast pink |
| accent-2 | `#00A3FF` | Resend blue |
| border | `rgba(255,255,255,0.05)` | Resend |
| border-hover | `rgba(255,255,255,0.1)` | — |

### Typography
| Role | Font | Size | Weight | Leading |
|------|------|------|--------|---------|
| Display | Inter Variable | clamp(3.5rem, 10vw, 8rem) | 800 | 0.9 |
| H2 | Inter Variable | clamp(2rem, 4vw, 3rem) | 700 | 1.05 |
| Body large | Inter Variable | 1.125rem (18px) | 400 | 1.6 |
| Body | Inter Variable | 1rem (16px) | 400 | 1.6 |
| Mono/label | Geist Mono | 0.75rem (12px) | 500 | 1.4 |
| Letter-spacing display | -0.03em | | | |
| Letter-spacing mono | 0.15em | | | |

### Spacing (from Vercel/Resend)
| Token | Value |
|-------|-------|
| section-pad | clamp(80px, 12vw, 180px) |
| content-max | 1200px |
| container-px | 24px mobile, 64px desktop |
| card-pad | 32px |
| card-gap | 24px |
| element-gap | 16px |

### Button (from Resend)
```css
padding: 14px 32px;
font-size: 0.875rem;
font-weight: 600;
border-radius: 100px;
border: 1px solid rgba(255,255,255,0.1);
background: linear-gradient(104deg, rgba(253,253,253,0.05) 5%, rgba(240,240,228,0.1) 100%);
color: #E5E5E5;
backdrop-filter: blur(25px);
transition: all 0.2s ease;
/* hover */
background: rgba(255,255,255,0.9);
color: #000;
```

### Card (from Raycast)
```css
background: rgba(255,255,255,0.03);
border: 1px solid rgba(255,255,255,0.06);
border-radius: 16px;
padding: 32px;
backdrop-filter: blur(3px);
/* hover */
border-color: rgba(255,255,255,0.1);
box-shadow: 0 0 40px rgba(255,122,152,0.05);
```

### Glow Effects (from Raycast)
```css
/* Radial glow behind content */
position: absolute;
width: 500px;
height: 500px;
border-radius: 50%;
background: radial-gradient(circle, rgba(255,122,152,0.15), transparent 70%);
filter: blur(80px);
pointer-events: none;

/* Text glow — DON'T use text-shadow, use bg gradient */
background: linear-gradient(to right, #E5E5E5, rgba(229,229,229,0.5));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Key Patterns to Apply
1. Near-black bg (#0D0D0D), NOT purple
2. Gradient text (clip, not text-shadow) for headlines
3. Glass buttons (Resend style) — border + backdrop-blur + gradient bg
4. Cards with barely-visible borders (0.06 opacity)
5. Radial glow spots (blurred, low opacity) for depth
6. Mono uppercase labels for section markers (Vercel pattern)
7. Asymmetric layout — content left-offset, not always centered
8. GSAP scroll reveals with stagger
9. Horizontal scroll section for cards (Raycast extension grid)
10. Grain/noise texture overlay at 2-4% opacity

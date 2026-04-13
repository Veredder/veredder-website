// ============================================
// VEREDDER — Framer Code Overrides
// Copie cada override para o Framer Editor
// ============================================

import { Override, useScroll, useMotionValue, useTransform, useSpring } from "framer"
import { useEffect, useState } from "react"

// ─── 1. GRADIENT TEXT ────────────────────────
// Apply to any text element to get the green→purple gradient
export function GradientText(): Override {
    return {
        style: {
            background: "linear-gradient(90deg, #AAFF00, #9B30FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
        },
    }
}

// ─── 2. NAVBAR SCROLL REVEAL ─────────────────
// Apply to the navbar frame — hides at top, shows after scrolling past hero
export function NavScrollReveal(): Override {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > window.innerHeight)
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return {
        animate: {
            y: visible ? 0 : -80,
            opacity: visible ? 1 : 0,
        },
        transition: {
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
        },
        style: {
            position: "fixed" as const,
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
        },
    }
}

// ─── 3. NOISE OVERLAY ────────────────────────
// Apply to a full-screen frame with the noise texture
export function NoiseOverlay(): Override {
    return {
        style: {
            position: "fixed" as const,
            inset: 0,
            pointerEvents: "none" as const,
            opacity: 0.03,
            mixBlendMode: "overlay" as const,
            zIndex: 999,
        },
    }
}

// ─── 4. SCROLL FADE IN ──────────────────────
// Apply to any section/element for scroll-triggered reveal
export function ScrollFadeIn(): Override {
    return {
        initial: { opacity: 0, y: 32 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    }
}

// ─── 5. STAGGER CHILDREN ─────────────────────
// Apply to a parent container (e.g., services grid)
export function StaggerChildren(): Override {
    return {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
        variants: {
            visible: {
                transition: {
                    staggerChildren: 0.1,
                },
            },
        },
    }
}

// Child variant — apply to each card inside the stagger container
export function StaggerChild(): Override {
    return {
        variants: {
            hidden: { opacity: 0, y: 32 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                },
            },
        },
    }
}

// ─── 6. GREEN GLOW HOVER ─────────────────────
// Apply to project cards for the neon hover glow
export function GreenGlowHover(): Override {
    return {
        whileHover: {
            borderColor: "rgba(170, 255, 0, 0.4)",
            boxShadow: "0 0 30px rgba(170, 255, 0, 0.15), 0 0 60px rgba(170, 255, 0, 0.05)",
            scale: 1.01,
        },
        transition: {
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
        },
        style: {
            borderColor: "#1E1E2E",
            borderWidth: 1,
            borderStyle: "solid",
        },
    }
}

// ─── 7. GRADIENT BORDER HOVER ────────────────
// Apply to service cards for the gradient border on hover
export function GradientBorderHover(): Override {
    const [hovered, setHovered] = useState(false)

    return {
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        animate: {
            boxShadow: hovered
                ? "0 0 20px rgba(170,255,0,0.2), 0 0 20px rgba(155,48,255,0.2)"
                : "none",
            y: hovered ? -4 : 0,
        },
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        style: {
            background: hovered
                ? "linear-gradient(#14141C, #14141C) padding-box, linear-gradient(135deg, #AAFF00, #9B30FF) border-box"
                : "#14141C",
            border: hovered
                ? "1px solid transparent"
                : "1px solid #1E1E2E",
            borderRadius: 16,
        },
    }
}

// ─── 8. HERO ENTRANCE ────────────────────────
// Apply to the hero content stack for staggered entrance on load
export function HeroEntrance(): Override {
    return {
        initial: { opacity: 0, y: 32 },
        animate: { opacity: 1, y: 0 },
        transition: {
            duration: 0.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
        },
    }
}

export function HeroEntranceDelay1(): Override {
    return {
        initial: { opacity: 0, y: 32 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] },
    }
}

export function HeroEntranceDelay2(): Override {
    return {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
    }
}

export function HeroEntranceDelay3(): Override {
    return {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] },
    }
}

// ─── 9. SCROLL INDICATOR BOUNCE ──────────────
export function ScrollIndicatorBounce(): Override {
    return {
        initial: { opacity: 0 },
        animate: {
            opacity: 0.5,
            y: [0, 8, 0],
        },
        transition: {
            opacity: { delay: 1.2, duration: 0.6 },
            y: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
            },
        },
    }
}

// ─── 10. SMOOTH SCROLL ANCHOR ────────────────
// Apply to nav links — scrolls to section with offset
export function SmoothScrollTo(sectionId: string): Override {
    return {
        onClick: (e: React.MouseEvent) => {
            e.preventDefault()
            const el = document.getElementById(sectionId)
            if (el) {
                const offset = 80 // nav height
                const y = el.getBoundingClientRect().top + window.scrollY - offset
                window.scrollTo({ top: y, behavior: "smooth" })
            }
        },
        style: { cursor: "pointer" },
    }
}

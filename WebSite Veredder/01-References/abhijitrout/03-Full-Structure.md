# Abhijit Rout — Estrutura Completa do Site (Source Code Analysis)

## Estrutura de Secoes (top to bottom)

### Section 1: Hero (bg: #FFF)
- Full viewport height (100vh)
- Padding: 20px
- **Header Top:** "Abhijit Rout" (left) + "in India" (center) + links (right)
- **Ticker Container:** posicao absoluta centrada, min-height 800px
  - **Posters:** flex row, height 562px, 11 items
  - Cada poster: 200x250px, transform: perspective(1143px) rotateY(-50deg) skewY(20deg)
  - Opacity: 0.7, mask: linear-gradient(3deg, rgba(0,0,0,0.2) 0%, #000 55.7%)
  - Alguns com filter: invert(0.1 / 0.9 / 0.18) para variacoes de cor
  - Conteudo: mix de JPG e GIF animados
  - Animacao: ticker horizontal via Framer component
- **Header Bottom:** "I design and dictate culture" (left) + "Scroll & scavenge" + link down arrow (right)
- Font: Geist, 14px, letter-spacing: -0.03em, color: rgb(11,11,11)

### Transition Before (bg: #FFF → transition)
- **To-black-transition-stretch 2:** imagem PNG 1920x2448
  - transform: rotateX(89deg), transform-origin: 50% 0%
  - aspect-ratio: 0.784314
  - Imagem: gradiente radial blur branco→preto
  - pointer-events: none, user-select: none

### Section 2: Sticky Work Showcase (bg: #000)
- **Sticky FH:** height 100vh, position sticky, top 0
- Background: black (#000)
- Conteudo central com work items
- Spacer de 1500px height para scroll effect
- Content stack com variants (projetos que trocam conforme scroll)

### Transition After
- **To-black-transition-stretch 2:** mesma tecnica, imagem diferente
  - PNG 1920x2448, rotateX(89deg)
  - Transicao preto→branco (inversa)

### Section 3: Project Gallery (bg: #FFF)
- Title com ticker horizontal de nomes de projetos
- Grid/cards de projetos com variantes (Variant 1 a Variant 16)
- Cada card: 500x500px, posicao absoluta centrada
- Scroll-triggered variant switching

### Section 4: About/Work History (bg: #FFF)
- Cards com nome, imagens de instagram
- Card wrap com backdrop-filter: blur(7px), bg: #f6f6f3
- Border: 1px solid rgba(34,34,34,0.1)
- Padding: 10px

### Section 5: About Text (bg: #FFF)
- Conteudo: biografia completa
- 2 versoes (desktop longa, mobile curta)
- Font: 14px Geist
- Empresas linkadas: Cognizant, GrowthX, Razorpay
- Imagem de perfil com grayscale + brightness(1.21)

### Section 6: Work Timeline + Contact (bg: #FFF)
- Work history: Chronicle (Present), Razorpay, GrowthX, Cognizant
- Layout: flex rows com gaps de 20px
- Width: 441px container centrado
- Separator lines: bg #b8b8b8, height 1px

### Footer (bg: #FFF)
- "Still here?" CTA
- "Partnerships start at $4,499/mo"
- Social links: Email, X, Instagram, Cosmos
- Legal: Privacy, Imprint
- Gradient Transition final: rotateX(89deg), PNG 1920x2106

## Tokens de Cor
| Token | Valor |
|-------|-------|
| --token-810567ac (primary-dark) | #000 |
| --token-2626bf1d (primary-light) | #fff |
| --token-d50dfe82 (accent-red) | #e32510 |
| --token-af2e26ab (accent-blue) | #001aff |
| --token-918914e1 (accent-amber) | #ee8b00 |
| --token-18af607a (gray) | #b8b8b8 |
| --token-419394a1 (near-black) | #050505 |
| --token-54251ed0 (dark-gray) | #212121 |

## Tipografia
- **Unica font:** Geist (Regular)
- **Tamanho:** 14px em TUDO (headers, body, nav, footer — tudo 14px!)
- **Letter-spacing:** -0.03em
- **Link color:** #09f (azul)

## Layout
- **Largura do site:** 1200px (desktop), 810px (tablet), 390px (mobile)
- **Container principal:** flex column, centrado

## Padrao de Transicao entre Secoes
1. Secao com conteudo (bg white ou black)
2. Imagem PNG grande (1920x2448) achatada com rotateX(89deg)
3. A imagem e um gradiente radial blur (tipo blob de cor)
4. Isso cria o efeito de "chao colorido se estendendo" na perspectiva
5. Proxima secao comeca

## Imagens de Transicao
| Imagem | Uso |
|--------|-----|
| wv64XhA0rLzc6HRCKNntFNBWT4.png (1920x2448) | Transition Before (branco→preto) |
| xiuZCCKfmu9zwX0tJl3pHHquro.png (1920x2448) | Transition After (preto→branco) |
| Z2oTjU6YZO4guLNtoYRnbZzYmAo.png (1448x1479) | Gradient blob (radial colorido) |
| Gms6WicEPH7DESZodjGDRmeSo.png (1920x2106) | Gradient Transition final |

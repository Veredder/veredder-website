# Analise Comparativa — Abhijit Rout vs Tigran Azatyan

## Resumo Executivo

Ambos sao portfolios de designers criativos construidos no **Framer**, com estetica dark mode. Porem, divergem significativamente em personalidade, estrutura e abordagem tipografica.

---

## Comparativo Lado a Lado

| Dimensao | Abhijit Rout | Tigran Azatyan |
|----------|-------------|----------------|
| **Profissao** | Creative Designer (generalista) | Motion Designer (especialista) |
| **Plataforma** | Framer | Framer |
| **Estrutura** | Single-page scroll | Homepage + Project Pages |
| **Background** | #000000 (pure black) | #090a0c (near-black warm) |
| **Texto principal** | #FFFFFF (pure white) | #FFFDFA (warm white) |
| **Tipografia display** | 12+ fontes experimentais | Neue Regrade (1 familia) |
| **Body font** | Geist | Inter |
| **Cores de acento** | Minimalista (azul, vermelho) | Multi-neon (amarelo, verde, roxo, coral) |
| **Conteudo visual** | Imagens + 1 video | Texto-first + videos nos projetos |
| **Tom pessoal** | Raw, vulneravel, artistico | Profissional, energetico, tech |
| **CTA** | "$4,499/mo partnerships" | "Let's create something amazing" |
| **Interacoes** | Scroll-triggered + zoom-block | Transicoes entre paginas |
| **Analytics** | GA + Hotjar | Nenhum |

---

## O Que Pegar de Cada Um

### De Abhijit Rout (Estetica & Personalidade)
- [x] **Dark mode puro** — elegante, imersivo
- [x] **Tipografia ecletica** — cada secao com sua propria voz
- [x] **Tom pessoal raw** — historia real, vulnerabilidade como forca
- [x] **Tagline forte** — "I design and dictate culture" (memoravel)
- [x] **Whitespace generoso** — respira, nao sufoca
- [x] **Video hero** — impacto visual imediato
- [x] **Zoom-blocking** — protecao de assets
- [x] **Hotjar** — entender comportamento do visitante

### De Tigran Azatyan (Estrutura & Cor)
- [x] **Project pages dedicadas** — cada projeto como case study
- [x] **Warm black/white** — mais organico que pure black/white
- [x] **Cores de acento vibrantes** — personalidade por projeto
- [x] **Metricas de impacto** — "2.3M views" como prova social
- [x] **Neue Regrade** — tipografia bold, moderna, geometric
- [x] **Estrutura de case study** — cliente, desafio, solucao, resultado
- [x] **Footer legal** — disclaimer de trademarks
- [x] **Bio concisa** — direto ao ponto, humanizada

---

## Sintese para Veredder

### Principios de Design
1. **Dark mode warm** — #0A0A0C background (influencia Tigran) com #FFFDF8 texto (warm)
2. **Tipografia dual** — 1 display bold (tipo Neue Regrade) + 1 serif experimental (tipo Instrument Serif) + Geist/Inter para body
3. **Cor de acento unica** — escolher 1 cor signature Veredder (sugestao: tom que represente a marca)
4. **Estrutura hibrida** — Homepage scroll com hero impactante (Abhijit) + Project pages detalhadas (Tigran)
5. **Tom pessoal** — vulneravel e real (Abhijit) + metricas de impacto (Tigran)
6. **Whitespace** — generoso como Abhijit, mas com grid estruturado

### Estrutura Proposta
```
HOME (single-page scroll)
├── Hero (video/animacao + tagline Veredder)
├── Selected Work (grid visual com hover effects)
├── About (bio pessoal + timeline)
├── Services/CTA
└── Footer (sociais + legal)

/project/[slug] (pages individuais)
├── Hero do projeto
├── Context (cliente, tipo, periodo)
├── Case study (desafio → solucao → resultado)
├── Metricas de impacto
└── Next project
```

### Tech Stack Recomendado
- **Build:** Framer (mesmo dos 2 sites — familiar, rapido, visual)
- **OU:** Next.js + Tailwind (mais controle, melhor performance)
- **Fonts:** Google Fonts (Geist + Instrument Serif) + 1-2 custom
- **Analytics:** GA4 + Hotjar
- **Deploy:** Vercel ou Framer hosting

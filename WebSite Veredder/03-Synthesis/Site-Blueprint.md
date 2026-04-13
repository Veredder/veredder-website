# Veredder — Site Blueprint

## Decisoes Estrategicas
- **Plataforma:** Framer
- **Projetos:** Placeholder structure — adicionar via curadoria futura
- **Estetica:** Dark mode, verde gosma fluorescente + roxo, glow effects

---

## Estrutura do Site

### HOME (Single-page scroll — inspirado em Abhijit)

#### 1. Hero Section
- **Background:** Video loop sutil de IA art ou particles verdes/roxas
- **Headline:** Tagline forte Veredder (a definir com copy-squad)
- **Subtitle:** "Diretor Criativo | IA Audiovisual"
- **Gradient text** no headline (verde→roxo)
- **CTA:** "Ver trabalhos" ou "Fale comigo"
- **Efeito:** Glow pulsante no CTA, noise texture overlay sutil

#### 2. Selected Work (Grid)
- Grid 2-3 colunas com thumbnails de projetos
- **Hover effect:** Glow verde + reveal de titulo
- **Placeholder:** 4-6 slots com "Em breve" ou pattern visual ate curadoria
- **Filtro por tipo:** Imagem IA | Video IA | Campanha | Experimental
- Cada card linka para `/project/[slug]`

#### 3. About / Bio
- **Layout:** Texto esquerda + foto/visual direita (inspirado em Abhijit)
- **Conteudo:** Historia pessoal, trajetoria, visao sobre IA criativa
- **Timeline opcional:** experiencias profissionais
- **Tom:** Pessoal, direto, humano

#### 4. Services / O Que Faco
- Cards com servicos:
  - Direcao criativa de projetos IA
  - Producao de video IA
  - Geracao de imagens IA
  - Consultoria criativa IA
- **Design:** Cards com border gradient verde→roxo no hover
- **CTA:** Modelo de preco ou "Vamos conversar"

#### 5. Footer
- Links sociais (Instagram, X, LinkedIn, email)
- "Built with AI" badge
- Legal / Copyright
- **Efeito:** Glow sutil verde no border-top

---

### /project/[slug] (Project Pages — inspirado em Tigran)

#### Estrutura de cada Case Study
1. **Hero:** Imagem/video full-width do projeto
2. **Meta:** Cliente | Tipo | Periodo | Tools IA usadas
3. **Contexto:** O desafio / brief
4. **Processo:** Como IA foi usada (prompts, workflow, iterations)
5. **Resultado:** Deliverables finais + metricas se houver
6. **Gallery:** Grid de imagens/videos do projeto
7. **Next Project:** Link para proximo case

**Nota:** Pages de projeto serao adicionadas conforme curadoria for feita.

---

## Tipografia (Proposta)

| Uso | Font | Peso | Referencia |
|-----|------|------|-----------|
| **Display/Headlines** | Geist ou Neue Regrade | Bold/Black | Mix dos dois sites |
| **Serif accent** | Instrument Serif | Regular/Italic | De Abhijit (contraste elegante) |
| **Body text** | Geist | Regular (400) | De Abhijit (clean, modern) |
| **UI/Labels** | Geist | Medium (500) | Consistencia |
| **Mono/Code** | Geist Mono | Regular | Para tags tecnicas |

---

## Interacoes & Efeitos

### Inspirados em Abhijit
- [x] Scroll-triggered reveals (fade-in sections)
- [x] Zoom-blocking (protecao de assets)
- [x] Video autoplay hero

### Inspirados em Tigran
- [x] Transicoes suaves entre pages
- [x] Hover states com color accent por projeto
- [x] Case study structured flow

### Exclusivos Veredder
- [x] Glow effects (box-shadow neon verde/roxo)
- [x] Gradient text headlines
- [x] Noise/grain texture overlay (vibe analogico + digital)
- [x] Cursor custom (opcional — circulo verde que segue o mouse)
- [x] Cards com gradient-border animado no hover

---

## Analytics & Tracking
- Google Analytics 4
- Hotjar (heatmaps + recordings)
- OG tags completos para social sharing
- Favicon: icone Veredder com acento verde

---

## Proximos Passos
1. [ ] Definir tagline com copy-squad
2. [ ] Criar wireframes no Figma
3. [ ] Construir no Framer
4. [ ] Adicionar projetos apos curadoria
5. [ ] Configurar dominio + deploy

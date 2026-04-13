---
task: reviewCode()
responsavel: "@dev-chief"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: code_to_review
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: review_report
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Clean code principles checked"
  - "[ ] SOLID violations identified"
  - "[ ] Performance concerns flagged"
  - "[ ] Test coverage assessed"
  - "[ ] Actionable feedback provided"
---

# Task: Review Code

## Metadata

| Field         | Value                      |
|---------------|----------------------------|
| Task ID       | `dev-squad:review-code`    |
| Command       | `*review`                  |
| Agent         | dev-chief (routes experts) |
| Version       | 1.0.0                      |

## Execution Phases

### Phase 1: Surface Scan
- Clean code readability (uncle-bob lens)
- Code smells detection (martin-fowler lens)
- Test coverage assessment (kent-beck lens)

### Phase 2: Deep Analysis
- Architecture alignment
- Performance implications (perf-engineer if complex)
- Security considerations
- API contract compliance (api-architect if API code)

### Phase 3: Report
- Prioritized findings (critical → advisory)
- Specific, actionable fix suggestions
- Positive highlights (what's done well)

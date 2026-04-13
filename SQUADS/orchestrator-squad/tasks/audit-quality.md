---
task: auditQuality()
responsavel: "@quality-governor"
responsavel_type: Agent
atomic_layer: Task
elicit: false

Entrada:
  - campo: transition
    tipo: object
    origem: pipeline-coordinator
    obrigatorio: true

Saida:
  - campo: quality_verdict
    tipo: object
    destino: Console
    persistido: true

Checklist:
  - "[ ] Deliverables checked against standards"
  - "[ ] Cross-squad compatibility verified"
  - "[ ] Verdict issued"
---

# Task: Audit Quality

| Field | Value |
|-------|-------|
| Task ID | `orchestrator-squad:audit-quality` |
| Command | `*quality` |
| Agent | quality-governor |

## Execution Phases

### Phase 1: Load quality standards for the transition (from → to)
### Phase 2: Verify deliverables against checklist
### Phase 3: Check cross-squad compatibility
### Phase 4: Issue verdict (PASS / CONDITIONAL / FAIL)
### Phase 5: Provide actionable feedback if not PASS

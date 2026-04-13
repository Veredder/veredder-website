---
task: escalateIssue()
responsavel: "@escalation-handler"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: escalation_description
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: resolution
    tipo: object
    destino: Console
    persistido: true

Checklist:
  - "[ ] Both perspectives gathered"
  - "[ ] Root cause identified"
  - "[ ] Resolution proposed"
  - "[ ] Decision documented"
---

# Task: Escalate Issue

| Field | Value |
|-------|-------|
| Task ID | `orchestrator-squad:escalate-issue` |
| Command | `*escalate` |
| Agent | escalation-handler |

## Execution Phases

### Phase 1: Gather perspectives from both squads
### Phase 2: Identify root cause of conflict/blocker
### Phase 3: Propose pragmatic resolution
### Phase 4: If no consensus, make binding decision
### Phase 5: Document resolution and update pipeline

---
task: manageHandoff()
responsavel: "@handoff-manager"
responsavel_type: Agent
atomic_layer: Task
elicit: false

Entrada:
  - campo: from_squad
    tipo: string
    origem: pipeline-coordinator
    obrigatorio: true
  - campo: to_squad
    tipo: string
    origem: pipeline-coordinator
    obrigatorio: true

Saida:
  - campo: handoff_artifact
    tipo: object
    destino: Console
    persistido: true

Checklist:
  - "[ ] Deliverables verified"
  - "[ ] Context artifact created"
  - "[ ] Quality gate passed"
  - "[ ] Receiving squad acknowledged"
---

# Task: Manage Handoff

| Field | Value |
|-------|-------|
| Task ID | `orchestrator-squad:manage-handoff` |
| Command | `*handoff` |
| Agent | handoff-manager |

## Execution Phases

### Phase 1: Verify current squad's deliverables are complete
### Phase 2: Run quality gate (quality-governor)
### Phase 3: Create handoff artifact (context-keeper)
### Phase 4: Transfer to receiving squad's chief
### Phase 5: Confirm acknowledgment and update tracker

---
task: trackDelivery()
responsavel: "@delivery-tracker"
responsavel_type: Agent
atomic_layer: Task
elicit: false

Entrada:
  - campo: pipeline_id
    tipo: string
    origem: pipeline-coordinator
    obrigatorio: true

Saida:
  - campo: status_report
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] All squads statused"
  - "[ ] Risks identified"
  - "[ ] Blockers flagged"
---

# Task: Track Delivery

| Field | Value |
|-------|-------|
| Task ID | `orchestrator-squad:track-delivery` |
| Command | `*status` |
| Agent | delivery-tracker |

## Execution Phases

### Phase 1: Poll status of each squad in the pipeline
### Phase 2: Identify completed, in-progress, pending, and blocked squads
### Phase 3: Flag risks and blockers
### Phase 4: Generate visual status report

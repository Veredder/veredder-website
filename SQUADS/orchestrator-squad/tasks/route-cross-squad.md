---
task: routeCrossSquad()
responsavel: "@squad-router"
responsavel_type: Agent
atomic_layer: Task
elicit: false

Entrada:
  - campo: request
    tipo: string
    origem: orchestra-chief
    obrigatorio: true

Saida:
  - campo: routing_decision
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Domain keywords extracted"
  - "[ ] Squad matched with confidence"
  - "[ ] Entry agent identified"
---

# Task: Route Cross-Squad

| Field | Value |
|-------|-------|
| Task ID | `orchestrator-squad:route-cross-squad` |
| Command | `*route` |
| Agent | squad-router |

## Execution Phases

### Phase 1: Extract keywords and identify domain(s)
### Phase 2: Match against squad routing map
### Phase 3: If multi-squad, flag for pipeline-coordinator
### Phase 4: Return routing decision with confidence score

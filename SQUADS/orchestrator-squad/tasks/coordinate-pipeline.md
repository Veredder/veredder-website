---
task: coordinatePipeline()
responsavel: "@pipeline-coordinator"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: squads_needed
    tipo: array
    origem: orchestra-chief
    obrigatorio: true

Saida:
  - campo: pipeline_plan
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Dependencies mapped"
  - "[ ] Sequence optimized"
  - "[ ] Parallel opportunities identified"
  - "[ ] Handoff points defined"
---

# Task: Coordinate Pipeline

| Field | Value |
|-------|-------|
| Task ID | `orchestrator-squad:coordinate-pipeline` |
| Command | `*pipeline` |
| Agent | pipeline-coordinator |

## Execution Phases

### Phase 1: Map dependencies between squads
### Phase 2: Identify critical path
### Phase 3: Optimize for parallel execution
### Phase 4: Define handoff points and quality gates
### Phase 5: Generate pipeline plan

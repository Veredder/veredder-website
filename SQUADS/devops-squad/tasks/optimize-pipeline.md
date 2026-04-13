---
task: optimizePipeline()
responsavel: "@ci-cd-engineer"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: current_pipeline
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: optimized_pipeline
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Current pipeline profiled"
  - "[ ] Bottlenecks identified"
  - "[ ] Optimizations applied"
  - "[ ] Build time reduced"
---

# Task: Optimize Pipeline

| Field | Value |
|-------|-------|
| Task ID | `devops-squad:optimize-pipeline` |
| Command | `*optimize-pipeline` |
| Agent | ci-cd-engineer |

## Execution Phases

### Phase 1: Profile current pipeline duration per stage
### Phase 2: Identify bottlenecks (slow tests, no caching, sequential steps)
### Phase 3: Apply optimizations (caching, parallelism, incremental builds)
### Phase 4: Measure improvement

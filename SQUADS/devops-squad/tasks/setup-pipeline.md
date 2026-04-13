---
task: setupPipeline()
responsavel: "@ci-cd-engineer"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: project_type
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: pipeline_config
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Pipeline stages defined"
  - "[ ] Build caching configured"
  - "[ ] Tests integrated"
  - "[ ] Deployment strategy chosen"
  - "[ ] Secrets management configured"
---

# Task: Setup Pipeline

| Field | Value |
|-------|-------|
| Task ID | `devops-squad:setup-pipeline` |
| Command | `*pipeline` |
| Agent | ci-cd-engineer |

## Execution Phases

### Phase 1: Assess project needs and choose pipeline tool
### Phase 2: Design stages (lint, test, build, scan, deploy)
### Phase 3: Configure caching and optimization
### Phase 4: Implement deployment strategy
### Phase 5: Configure secrets and environment variables

---
task: containerize()
responsavel: "@container-specialist"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: application
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: container_config
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Dockerfile created"
  - "[ ] Image optimized"
  - "[ ] Security hardened"
  - "[ ] K8s manifests generated"
---

# Task: Containerize

| Field | Value |
|-------|-------|
| Task ID | `devops-squad:containerize` |
| Command | `*containerize` |
| Agent | container-specialist |

## Execution Phases

### Phase 1: Analyze application and dependencies
### Phase 2: Write optimized Dockerfile (multi-stage)
### Phase 3: Harden security (jessie-frazelle review)
### Phase 4: Generate K8s manifests if needed

---
task: deployService()
responsavel: "@devops-chief"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: service_name
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: deployment_result
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Pre-deployment checks passed"
  - "[ ] Rollback plan defined"
  - "[ ] Deployment executed"
  - "[ ] Health checks verified"
  - "[ ] Monitoring confirmed"
---

# Task: Deploy Service

| Field | Value |
|-------|-------|
| Task ID | `devops-squad:deploy-service` |
| Command | `*deploy` |
| Agent | Routed by devops-chief |

## Execution Phases

### Phase 1: Pre-deployment checks and rollback plan
### Phase 2: Build and push container image
### Phase 3: Deploy with chosen strategy (canary/blue-green/rolling)
### Phase 4: Verify health checks and monitoring
### Phase 5: Confirm deployment success or rollback

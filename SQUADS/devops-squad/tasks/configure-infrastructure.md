---
task: configureInfrastructure()
responsavel: "@iac-engineer"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: infrastructure_requirements
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: iac_config
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Requirements translated to IaC"
  - "[ ] Modules created/reused"
  - "[ ] Plan reviewed"
  - "[ ] State management configured"
---

# Task: Configure Infrastructure

| Field | Value |
|-------|-------|
| Task ID | `devops-squad:configure-infrastructure` |
| Command | `*provision` |
| Agent | iac-engineer |

## Execution Phases

### Phase 1: Translate requirements to infrastructure resources
### Phase 2: Write Terraform/Pulumi configuration
### Phase 3: Plan and review changes
### Phase 4: Apply with proper state management

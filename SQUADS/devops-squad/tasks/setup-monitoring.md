---
task: setupMonitoring()
responsavel: "@monitoring-engineer"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: system_description
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: monitoring_config
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Golden signals identified"
  - "[ ] Metrics collection configured"
  - "[ ] Alerts designed"
  - "[ ] Dashboards created"
---

# Task: Setup Monitoring

| Field | Value |
|-------|-------|
| Task ID | `devops-squad:setup-monitoring` |
| Command | `*monitor` |
| Agent | monitoring-engineer |

## Execution Phases

### Phase 1: Identify golden signals and key metrics
### Phase 2: Configure metrics collection (Prometheus/OTel)
### Phase 3: Design actionable alerts
### Phase 4: Build dashboards

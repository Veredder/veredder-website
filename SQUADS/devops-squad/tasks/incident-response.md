---
task: incidentResponse()
responsavel: "@sre-engineer"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: incident_description
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: incident_report
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Incident triaged"
  - "[ ] Mitigation applied"
  - "[ ] Root cause identified"
  - "[ ] Post-mortem conducted"
---

# Task: Incident Response

| Field | Value |
|-------|-------|
| Task ID | `devops-squad:incident-response` |
| Command | `*incident` |
| Agent | sre-engineer |

## Execution Phases

### Phase 1: Detect and triage — assess severity and impact
### Phase 2: Mitigate — stop the bleeding
### Phase 3: Investigate — find root cause with monitoring-engineer
### Phase 4: Resolve — implement fix
### Phase 5: Post-mortem — blameless review with charity-majors

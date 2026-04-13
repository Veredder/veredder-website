---
task: securityHardening()
responsavel: "@devops-chief"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: infrastructure_target
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: hardening_report
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Attack surface assessed"
  - "[ ] Container security reviewed"
  - "[ ] Network policies configured"
  - "[ ] IAM/RBAC tightened"
  - "[ ] Secrets management verified"
---

# Task: Security Hardening

| Field | Value |
|-------|-------|
| Task ID | `devops-squad:security-hardening` |
| Command | `*secure` |
| Agent | Routed by devops-chief |

## Execution Phases

### Phase 1: Assess attack surface (jessie-frazelle for containers)
### Phase 2: Review cloud security (cloud-architect for IAM/VPC)
### Phase 3: Harden configurations (iac-engineer for compliance)
### Phase 4: Verify secrets management and network policies

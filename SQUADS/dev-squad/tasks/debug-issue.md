---
task: debugIssue()
responsavel: "@dev-chief"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: issue_description
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: fix
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Issue reproduced"
  - "[ ] Root cause identified"
  - "[ ] Fix implemented"
  - "[ ] Regression test added"
---

# Task: Debug Issue

## Metadata

| Field         | Value                      |
|---------------|----------------------------|
| Task ID       | `dev-squad:debug-issue`    |
| Command       | `*debug`                   |
| Agent         | Routed by dev-chief        |
| Version       | 1.0.0                      |

## Execution Phases

### Phase 1: Reproduce
- Understand the expected vs actual behavior
- Create minimal reproduction

### Phase 2: Diagnose
- Identify root cause through systematic debugging
- Route to specialist if domain-specific

### Phase 3: Fix
- Implement minimal fix for root cause
- Write regression test

### Phase 4: Verify
- Confirm fix resolves the issue
- Ensure no side effects

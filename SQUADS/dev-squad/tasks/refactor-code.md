---
task: refactorCode()
responsavel: "@refactor-specialist"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: code_target
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: refactored_code
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Characterization tests written"
  - "[ ] Code smells identified"
  - "[ ] Refactoring plan created"
  - "[ ] Refactoring applied in safe steps"
  - "[ ] All tests pass after refactoring"
---

# Task: Refactor Code

## Metadata

| Field         | Value                       |
|---------------|-----------------------------|
| Task ID       | `dev-squad:refactor-code`   |
| Command       | `*refactor`                 |
| Agent         | refactor-specialist         |
| Version       | 1.0.0                       |

## Execution Phases

### Phase 1: Assess
- Identify code smells (route to martin-fowler for assessment)
- Write characterization tests if missing
- Prioritize refactoring targets

### Phase 2: Plan
- Choose refactoring techniques from Fowler's catalog
- Define step-by-step transformation plan
- Ensure each step is independently verifiable

### Phase 3: Execute
- Apply refactorings one at a time
- Run tests after each step
- Commit after each successful transformation

### Phase 4: Verify
- All original tests pass
- Clean code principles satisfied (uncle-bob review)
- No behavior changes introduced

---
task: writeTests()
responsavel: "@test-engineer"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: test_target
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: test_suite
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Test strategy defined"
  - "[ ] Test pyramid level chosen"
  - "[ ] Tests written and passing"
  - "[ ] Coverage meets threshold"
---

# Task: Write Tests

## Metadata

| Field         | Value                      |
|---------------|----------------------------|
| Task ID       | `dev-squad:write-tests`    |
| Command       | `*test`                    |
| Agent         | test-engineer              |
| Version       | 1.0.0                      |

## Execution Phases

### Phase 1: Strategy
- Determine appropriate test level (unit, integration, E2E)
- Identify critical paths and edge cases
- Choose test framework and utilities

### Phase 2: Write
- Write tests following Arrange-Act-Assert pattern
- Use appropriate test doubles
- Cover happy path, edge cases, and error scenarios

### Phase 3: Verify
- All tests pass
- Coverage meets project threshold
- Tests are fast and non-flaky

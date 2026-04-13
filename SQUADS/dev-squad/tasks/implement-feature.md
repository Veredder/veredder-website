---
task: implementFeature()
responsavel: "@dev-chief"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: feature_description
    tipo: string
    origem: User Input
    obrigatorio: true
  - campo: tech_stack
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: implementation
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Architecture decided"
  - "[ ] Tests written first (TDD)"
  - "[ ] Feature implemented"
  - "[ ] Code reviewed for clean code"
  - "[ ] Performance verified"
---

# Task: Implement Feature

## Metadata

| Field         | Value                        |
|---------------|------------------------------|
| Task ID       | `dev-squad:implement-feature` |
| Command       | `*implement`                 |
| Agent         | Routed by dev-chief          |
| Version       | 1.0.0                        |

## Purpose

Coordinate the full implementation of a new feature, from architecture to delivery.

## Execution Phases

### Phase 1: Architecture Decision
- Assess feature requirements and constraints
- Choose architecture approach (route to uncle-bob if complex)
- Define component boundaries and interfaces

### Phase 2: Test Design
- Design test strategy (route to kent-beck for TDD guidance)
- Write failing tests first
- Define acceptance criteria as executable tests

### Phase 3: Implementation
- Route to appropriate specialist based on domain
- Implement in small, tested increments
- Follow clean code principles throughout

### Phase 4: Review & Quality
- Code review against clean code standards
- Performance verification (route to perf-engineer if needed)
- Test coverage verification

## Completion Criteria

- [ ] Architecture documented
- [ ] Tests pass with adequate coverage
- [ ] Code follows clean code principles
- [ ] Performance within acceptable bounds
- [ ] No code smells introduced

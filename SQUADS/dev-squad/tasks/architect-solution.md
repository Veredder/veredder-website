---
task: architectSolution()
responsavel: "@uncle-bob"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: requirements
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: architecture
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Requirements analyzed"
  - "[ ] Architecture pattern chosen"
  - "[ ] Component boundaries defined"
  - "[ ] Dependencies mapped"
  - "[ ] Implementation plan created"
---

# Task: Architect Solution

## Metadata

| Field         | Value                            |
|---------------|----------------------------------|
| Task ID       | `dev-squad:architect-solution`   |
| Command       | `*architect`                     |
| Agent         | uncle-bob                        |
| Version       | 1.0.0                            |

## Execution Phases

### Phase 1: Analyze
- Understand requirements and constraints
- Identify core domain entities
- Map integration points

### Phase 2: Design
- Choose architecture pattern (Clean Architecture, Hexagonal, etc.)
- Define component boundaries and interfaces
- Establish dependency direction (inward)

### Phase 3: Plan
- Create implementation roadmap
- Define interfaces and contracts
- Route to api-architect for API design if needed
- Route to db-developer for data model if needed

### Phase 4: Review
- Validate with martin-fowler for evolutionary architecture
- Ensure testability with kent-beck

---
task: designApi()
responsavel: "@api-architect"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: api_requirements
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: api_design
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Resources and operations defined"
  - "[ ] Request/response schemas documented"
  - "[ ] Error handling standardized"
  - "[ ] Versioning strategy decided"
  - "[ ] Authentication pattern chosen"
---

# Task: Design API

## Metadata

| Field         | Value                    |
|---------------|--------------------------|
| Task ID       | `dev-squad:design-api`   |
| Command       | `*design-api`            |
| Agent         | api-architect            |
| Version       | 1.0.0                    |

## Execution Phases

### Phase 1: Requirements
- Identify consumers and their needs
- Define resources and operations
- Choose API style (REST, GraphQL, gRPC)

### Phase 2: Design
- Define endpoints, schemas, and contracts
- Design error responses and status codes
- Plan authentication and authorization

### Phase 3: Documentation
- Generate OpenAPI/GraphQL schema
- Provide example requests/responses
- Document versioning strategy

### Phase 4: Review
- Review with db-developer for data layer alignment
- Performance considerations with perf-engineer

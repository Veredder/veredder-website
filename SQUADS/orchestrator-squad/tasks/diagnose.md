---
task: diagnoseOrchestrator()
responsavel: "@orchestra-chief"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: user_message
    tipo: string
    origem: User Input
    obrigatorio: true
  - campo: routing_catalog
    tipo: string
    origem: data/routing-catalog.yaml
    obrigatorio: true

Saida:
  - campo: diagnosis
    tipo: string
    destino: Console
    persistido: false

Checklist:
  - "[ ] Request analyzed for multi-squad needs"
  - "[ ] Squads identified and sequenced"
  - "[ ] Pipeline plan drafted"
---

# Task: Diagnose & Route — Orchestrator Squad

## Metadata

| Field         | Value                                                |
|---------------|------------------------------------------------------|
| Task ID       | `orchestrator-squad:diagnose`                        |
| Command       | `@orchestrator-squad` or `@orchestrator-squad:orchestra-chief` |
| Orchestrator  | `orchestra-chief`                                    |
| Version       | 1.0.0                                                |

## Purpose

Analyze a user request to determine which squads are needed, in what order,
and plan the cross-squad pipeline.

## Execution Phases

### Phase 1: Parse Request
1. Extract core intent and domain keywords
2. Determine if single-squad or multi-squad
3. If single-squad, route directly to that squad's chief
4. If multi-squad, proceed to pipeline planning

### Phase 2: Identify Squads
1. Match domains to squads using routing catalog
2. Determine which squads are needed
3. Identify dependencies between squads

### Phase 3: Plan Pipeline
1. Sequence squads based on dependencies
2. Identify parallel opportunities
3. Define handoff points and quality gates
4. Estimate pipeline duration

### Phase 4: Cross-Cutting Answer
Provide an overview of the pipeline plan with squad sequence and expected deliverables.

## Veto Conditions

- **NEVER** route to a squad without understanding its capabilities
- **NEVER** skip the pipeline planning phase for multi-squad requests
- **NEVER** execute domain work directly — always route to the appropriate squad

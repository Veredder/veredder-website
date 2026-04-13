---
task: diagnoseDevOps()
responsavel: "@devops-chief"
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
  - "[ ] User intent parsed and urgency assessed"
  - "[ ] Cross-cutting answer delivered to user"
  - "[ ] Routing suggestion provided"
---

# Task: Diagnose & Route — DevOps Squad

## Metadata

| Field         | Value                                         |
|---------------|-----------------------------------------------|
| Task ID       | `devops-squad:diagnose`                       |
| Command       | `@devops-squad` or `@devops-squad:devops-chief` |
| Orchestrator  | `devops-chief`                                |
| Version       | 1.0.0                                         |
| Created       | 2026-04-11                                    |

## Purpose

Analyze the user's infrastructure/DevOps question, provide an immediate cross-cutting answer,
and determine whether specialist routing is needed.

## Execution Phases

### Phase 1: Parse Request
1. Extract core intent from user message
2. Identify keywords and infrastructure domains
3. Determine category: deployment, provisioning, monitoring, incident, scaling, security
4. Assess urgency: INCIDENT (immediate), STANDARD (planned), EXPLORATORY (learning)

### Phase 2: Match Routing Catalog
1. Load `data/routing-catalog.yaml`
2. Match keywords against domain lists
3. Identify primary and secondary agents

### Phase 3: Cross-Cutting Answer
**MANDATORY — Always provide an answer before routing.**

### Phase 4: Confidence Assessment

| Level  | Criteria                                      | Action                        |
|--------|-----------------------------------------------|-------------------------------|
| HIGH   | Clear match, single domain                     | Route to primary agent       |
| MEDIUM | Multiple domains, slight ambiguity             | Suggest primary + secondary   |
| LOW    | Vague, cross-domain                            | Stay with chief, clarify     |

## Veto Conditions

- **NEVER** route without providing a cross-cutting answer first
- **NEVER** route when confidence is LOW
- **NEVER** load a specialist agent file during diagnosis

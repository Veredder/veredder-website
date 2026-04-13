# Orchestrator Squad

8 agents for cross-squad coordination and multi-squad workflow management.

## Quick Start

```
@orchestra-chief         # Activate the orchestrator
*diagnose                # Triage your cross-squad challenge
*cross-squad-pipeline    # Coordinate multi-squad pipeline
*multi-squad-delivery    # End-to-end delivery coordination
```

## Agents (8)

- **orchestra-chief (Telinho)** — Meta-orchestrator (orchestrates orchestrators)
- **squad-router** — Intelligent squad and agent routing
- **handoff-manager** — Cross-squad handoff coordination
- **pipeline-coordinator** — Multi-squad pipeline sequencing
- **quality-governor** — Cross-squad quality gates and standards
- **context-keeper** — Context preservation across squad switches
- **escalation-handler** — Cross-squad escalation and conflict resolution
- **delivery-tracker** — End-to-end delivery tracking and status

## Components

- **8 agents**, **7 tasks**, **2 workflows**, **1 checklist**

## Requirements

- AIOS >= 4.0.0

## How It Works

The Orchestrator Squad sits **above** all other squads. When a task requires
multiple squads (e.g., brand-squad → copy-squad → design-squad → dev-squad → devops-squad),
the Orchestrator Squad coordinates the flow, manages handoffs, preserves context,
and ensures quality gates are met at each transition.

```
User Request
    ↓
orchestra-chief (assess which squads are needed)
    ↓
squad-router (route to first squad)
    ↓
Squad A executes → handoff-manager → Squad B executes → handoff-manager → Squad C
    ↓
quality-governor (verify cross-squad quality)
    ↓
delivery-tracker (report final status)
```

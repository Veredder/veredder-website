---
task: optimizePerformance()
responsavel: "@perf-engineer"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: performance_issue
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: optimization_plan
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Bottleneck profiled and identified"
  - "[ ] Baseline measured"
  - "[ ] Optimization implemented"
  - "[ ] Improvement measured and verified"
---

# Task: Optimize Performance

## Metadata

| Field         | Value                              |
|---------------|------------------------------------|
| Task ID       | `dev-squad:optimize-performance`   |
| Command       | `*optimize`                        |
| Agent         | perf-engineer                      |
| Version       | 1.0.0                              |

## Execution Phases

### Phase 1: Profile
- Identify the bottleneck through profiling
- Measure baseline performance metrics

### Phase 2: Analyze
- Root cause analysis of bottleneck
- Route to specialist if domain-specific (addy-osmani for frontend, db-developer for queries)

### Phase 3: Optimize
- Implement targeted optimization
- Measure improvement against baseline

### Phase 4: Verify
- Ensure no regressions
- Document optimization rationale

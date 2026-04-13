# Output Quality Checklist — Orchestrator Squad

**Checklist ID:** ORCH-CL-001
**Referenced by:** tasks/*.md
**Purpose:** Validate quality of cross-squad coordination outputs

[[LLM: INITIALIZATION INSTRUCTIONS
Apply this checklist at every squad transition and pipeline completion.
Mark each item as checked or unchecked. CRITICAL items block handoff.
]]

---

## 1. Routing Quality

- [ ] Correct squad identified for the domain (CRITICAL)
- [ ] Entry agent confirmed and available
- [ ] Multi-squad needs properly detected
- [ ] No domain gaps in routing

## 2. Handoff Quality

- [ ] Context artifact created and complete (CRITICAL)
- [ ] Deliverables verified before transfer (CRITICAL)
- [ ] Receiving squad acknowledged (CRITICAL)
- [ ] Key decisions documented
- [ ] Constraints carried forward

## 3. Pipeline Quality

- [ ] Dependencies correctly mapped (CRITICAL)
- [ ] Critical path identified
- [ ] Parallel opportunities utilized
- [ ] No circular dependencies

## 4. Quality Gates

- [ ] Quality gate applied at every transition (CRITICAL)
- [ ] Verdicts documented with rationale
- [ ] FAIL verdicts resolved before proceeding
- [ ] Cross-squad compatibility verified

## 5. Delivery Tracking

- [ ] All squads statused (CRITICAL)
- [ ] Risks identified and communicated
- [ ] Blockers escalated promptly
- [ ] Final report generated

## PASS/FAIL Criteria

**PASS:** All CRITICAL items [x]
**REVISE:** All CRITICAL but 3+ non-critical failures
**FAIL:** Any CRITICAL unchecked

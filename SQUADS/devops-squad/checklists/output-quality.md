# Output Quality Checklist — DevOps Squad

**Checklist ID:** DEVOPS-CL-001
**Referenced by:** tasks/*.md
**Purpose:** Validate quality of all infrastructure outputs from DevOps Squad agents

[[LLM: INITIALIZATION INSTRUCTIONS
Apply this checklist to every infrastructure output from any DevOps Squad agent.
Mark each item as checked or unchecked. CRITICAL items block delivery.
]]

---

## 1. Automation

- [ ] No manual steps in the final solution (CRITICAL)
- [ ] Pipeline as code, versioned (CRITICAL)
- [ ] Reproducible across environments
- [ ] Idempotent — safe to re-run

## 2. Security

- [ ] No secrets in code or images (CRITICAL)
- [ ] Least privilege IAM/RBAC (CRITICAL)
- [ ] Network policies configured
- [ ] Container security hardened
- [ ] Dependencies scanned for vulnerabilities

## 3. Reliability

- [ ] Rollback strategy defined (CRITICAL)
- [ ] Health checks configured (CRITICAL)
- [ ] SLOs defined for critical services
- [ ] Graceful degradation designed
- [ ] Disaster recovery considered

## 4. Observability

- [ ] Golden signals monitored (CRITICAL)
- [ ] Alerts are actionable, not noisy
- [ ] Structured logging configured
- [ ] Dashboards provide at-a-glance status

## 5. Infrastructure as Code

- [ ] All resources defined in code (CRITICAL)
- [ ] State managed remotely with locking
- [ ] Modules are reusable
- [ ] Changes reviewed via plan

## PASS/FAIL Criteria

**PASS:** All CRITICAL items [x]
**REVISE:** All CRITICAL but 3+ non-critical failures
**FAIL:** Any CRITICAL unchecked

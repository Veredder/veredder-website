# Output Quality Checklist — Dev Squad

**Checklist ID:** DEV-CL-001
**Referenced by:** tasks/*.md
**Purpose:** Validate quality of all code outputs from Dev Squad agents

[[LLM: INITIALIZATION INSTRUCTIONS
Apply this checklist to every code output from any Dev Squad agent.
Mark each item as checked or unchecked. CRITICAL items block delivery.
]]

---

## 1. Clean Code (uncle-bob lens)

- [ ] Functions are small and do one thing (CRITICAL)
- [ ] Names are meaningful and intention-revealing (CRITICAL)
- [ ] No code duplication (DRY)
- [ ] Single level of abstraction per function
- [ ] Comments only where logic isn't self-evident
- [ ] Error handling is clean and consistent

## 2. Architecture (uncle-bob + martin-fowler lens)

- [ ] SOLID principles respected (CRITICAL)
- [ ] Dependencies point inward
- [ ] No circular dependencies (CRITICAL)
- [ ] Appropriate design patterns applied
- [ ] Component boundaries are clear

## 3. Testing (kent-beck lens)

- [ ] Tests exist for new functionality (CRITICAL)
- [ ] Tests cover happy path and edge cases
- [ ] Tests are independent and fast
- [ ] Test names describe behavior
- [ ] No flaky tests

## 4. Performance (perf-engineer lens)

- [ ] No obvious N+1 queries
- [ ] No unnecessary re-renders (frontend)
- [ ] No memory leaks
- [ ] Appropriate caching where beneficial

## 5. API Quality (api-architect lens)

- [ ] Consistent endpoint naming
- [ ] Proper HTTP status codes
- [ ] Error responses are informative
- [ ] Input validation present [N/A if no API]

## PASS/FAIL Criteria

**PASS:** All CRITICAL items [x]
**REVISE:** All CRITICAL but 3+ non-critical failures
**FAIL:** Any CRITICAL unchecked

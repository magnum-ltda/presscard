---
document: DECISION_TEMPLATE
title: Decision Record Template
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Decisions
purpose: Definir o formato padrão para registros de decisão.
audience:
- AI
- Developer
- Product Owner
depends_on:
- 11_decisions/README.md
related_documents:
- 11_decisions/DECISION_PROCESS.md
- 11_decisions/ADR_INDEX.md
---

# Decision Record

## Metadata

```text
ID:
Title:
Date:
Status:
Owner:
Related Modules:
```

## Context

Descrever o problema, necessidade ou contexto que originou a decisão.

## Decision

Descrever claramente o que foi decidido.

## Alternatives Considered

### Alternative A

Descrição e motivos para não escolher.

### Alternative B

Descrição e motivos para não escolher.

## Consequences

### Positive

- ...

### Negative

- ...

### Risks

- ...

## Impact

- Frontend:
- Backend:
- Database:
- Integrations:
- Security:
- Operations:

## Related Documents

- ...

## Review

Registrar quando a decisão deve ser revisada.

## Status

Valores permitidos:

- Proposed
- Accepted
- Superseded
- Rejected

## Regra

Uma decisão `Superseded` não deve ser apagada. Deve apontar para a decisão que a substituiu.

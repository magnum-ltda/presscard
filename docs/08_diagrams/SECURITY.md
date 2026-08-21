---
document: DIAGRAM_SECURITY
title: Presscard Security Flow
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Diagrams
purpose: Representar autenticação, autorização, Tenant e auditoria.
audience:
- AI
- Developer
depends_on:
- 04_modules/security/README.md
- 06_backend/README.md
related_documents:
- 08_diagrams/README.md
---

# Security

```mermaid
flowchart LR
R[Request]
A[Authentication]
P[Permission]
T[Tenant Validation]
O[Operation]
AU[Audit]

R --> A
A --> P
P --> T
T --> O
O --> AU
```

## Regra

Frontend guards são mecanismos de experiência/navegação. A decisão final de segurança permanece no backend.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

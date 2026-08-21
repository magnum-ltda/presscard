---
document: DIAGRAM_DOMAIN
title: Presscard Domain Diagram
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Diagrams
purpose: Representar os principais conceitos de domínio e seus relacionamentos.
audience:
- AI
- Developer
depends_on:
- 03_business/BUSINESS_RULES.md
- 04_modules/README.md
related_documents:
- 08_diagrams/README.md
---

# Domain

```mermaid
erDiagram
COMPANY ||--o{ EMPLOYEE : has
COMPANY ||--o{ PARTNER : has
PARTNER ||--o{ BENEFIT : offers
BENEFIT ||--o{ CATALOG_ITEM : appears_in
EMPLOYEE ||--o{ BOOKING : creates
CATALOG_ITEM ||--o{ BOOKING : receives
BOOKING ||--o| PAYMENT : has
BOOKING ||--o{ COMMISSION : generates
EMPLOYEE ||--o{ NOTIFICATION : receives
```

## Observação

Este diagrama é conceitual. O modelo físico detalhado deve ser mantido em `07_database`.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

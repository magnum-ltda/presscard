---
document: REVIEW_DATABASE
title: Database Review
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Reviews
purpose: Padronizar revisão de alterações de banco e persistência.
audience:
- AI
- Developer
depends_on:
- 07_database/README.md
- 06_backend/README.md
related_documents:
- 10_reviews/README.md
---

# Database Review

## Verificar

- modelagem;
- PK/FK;
- constraints;
- Tenant isolation;
- índices;
- paginação;
- concorrência;
- migrations;
- impacto em dados existentes;
- consultas críticas;
- alterações destrutivas.

## Migration

```mermaid
flowchart LR
A[Schema Change] --> B[Migration]
B --> C[Review]
C --> D[Test Data]
D --> E[Performance]
E --> F[Deploy Approval]
```

## Regra

Alterações destrutivas devem possuir estratégia explícita antes da aprovação.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

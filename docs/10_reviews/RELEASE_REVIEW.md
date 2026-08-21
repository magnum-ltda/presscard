---
document: REVIEW_RELEASE
title: Release Review
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Reviews
purpose: Definir revisão final antes de uma publicação.
audience:
- AI
- Developer
- Product Owner
depends_on:
- 04_modules/quality/README.md
- 04_modules/security/README.md
- 08_diagrams/README.md
related_documents:
- 10_reviews/CHECKLIST.md
- 10_reviews/README.md
---

# Release Review

## Verificar

- build;
- testes;
- migrations;
- configuração de ambiente;
- secrets;
- segurança;
- logs;
- integrações;
- documentação;
- smoke test;
- rollback/recovery quando aplicável.

## Fluxo

```mermaid
flowchart LR
A[Build] --> B[Tests]
B --> C[Security]
C --> D[Database]
D --> E[Configuration]
E --> F[Documentation]
F --> G[Smoke Test]
G --> H{Approved?}
H -->|Yes| I[Release]
H -->|No| J[Fix]
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

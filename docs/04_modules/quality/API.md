---
document: QUALITY_TESTING_MODULE
title: Qualidade e Testes Module
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Quality
purpose: Definir o módulo de qualidade e testes da Presscard.
audience:
- AI
- Developer
- Product Owner
depends_on:
- 02_architecture/ARCHITECTURE.md
- 03_business/BUSINESS_RULES.md
- 04_modules/security/README.md
related_documents:
- 04_modules/quality/RULES.md
- 04_modules/quality/ENTITIES.md
- 04_modules/quality/FLOW.md
- 04_modules/quality/API.md
- 04_modules/quality/SERVICES.md
- 04_modules/quality/TODO.md
---

# API

O módulo não precisa expor endpoints de negócio.

Quando houver infraestrutura administrativa:

```http
GET /api/admin/quality/test-runs
GET /api/admin/quality/test-runs/{runId}
```

Os endpoints são opcionais e dependem da infraestrutura de CI/CD.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

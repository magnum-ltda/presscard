---
document: REVIEW_SECURITY
title: Security Review
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Reviews
purpose: Padronizar revisão de segurança.
audience:
- AI
- Developer
depends_on:
- 04_modules/security/README.md
- 06_backend/README.md
related_documents:
- 10_reviews/README.md
---

# Security Review

## Verificar

- Authentication;
- Authorization;
- Permissions;
- Tenant isolation;
- input validation;
- secrets;
- logs;
- webhooks;
- uploads/downloads;
- exposição de dados;
- privilege escalation;
- bypass de autorização.

## Fluxo

```mermaid
flowchart LR
A[Change] --> B[Threat Review]
B --> C[Authorization]
C --> D[Tenant]
D --> E[Data Exposure]
E --> F[Secrets]
F --> G[Security Decision]
```

## Severidade

- Critical;
- High;
- Medium;
- Low.

## Regra

Um guard no frontend nunca é considerado mecanismo suficiente de segurança.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

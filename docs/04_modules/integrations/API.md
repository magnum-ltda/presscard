---
document: INTEGRATIONS_MODULE
title: Integrações Module
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Integrations
purpose: Definir o módulo de integrações da Presscard.
audience:
  - AI
  - Developer
  - Product Owner
depends_on:
  - BOOKING
  - PAYMENTS
  - NOTIFICATIONS
  - SECURITY
related_documents:
  - RULES
  - ENTITIES
  - FLOW
  - API
  - SERVICES
  - TODO
---

# API

Integrações externas não são expostas diretamente ao frontend.

## Webhooks
```http
POST /api/webhooks/{provider}/booking
POST /api/webhooks/{provider}/payment
POST /api/webhooks/{provider}/notification
```

## Administração
```http
GET /api/admin/integrations
GET /api/admin/integrations/{provider}
POST /api/admin/integrations/{provider}/test
```

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

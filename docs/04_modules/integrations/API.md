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
- 04_modules/booking/README.md
- 03_business/PAYMENTS.md
- 04_modules/notifications/README.md
- 04_modules/security/README.md
related_documents:
- 04_modules/integrations/RULES.md
- 04_modules/integrations/ENTITIES.md
- 04_modules/integrations/FLOW.md
- 04_modules/integrations/API.md
- 04_modules/integrations/SERVICES.md
- 04_modules/integrations/TODO.md
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

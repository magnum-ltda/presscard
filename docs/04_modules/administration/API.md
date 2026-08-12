---
document: ADMINISTRATION_MODULE
title: Administração e Configurações Module
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Administration
purpose: Definir o módulo de administração e configurações da Presscard.
audience:
  - AI
  - Developer
  - Product Owner
depends_on:
  - EMPLOYEES
  - COMPANIES
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

Base routes: `/api/admin/settings`, `/api/admin/roles`, `/api/admin/permissions`, `/api/admin/feature-flags`, `/api/admin/audit`.

```http
GET /api/admin/settings
PUT /api/admin/settings/{key}
GET /api/admin/roles
POST /api/admin/roles
PUT /api/admin/roles/{roleId}
PUT /api/admin/roles/{roleId}/permissions
GET /api/admin/permissions
GET /api/admin/feature-flags
PUT /api/admin/feature-flags/{key}
GET /api/admin/audit
```

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

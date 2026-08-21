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
- 04_modules/employees/README.md
- 04_modules/companies/README.md
- 04_modules/security/README.md
related_documents:
- 04_modules/administration/RULES.md
- 04_modules/administration/ENTITIES.md
- 04_modules/administration/FLOW.md
- 04_modules/administration/API.md
- 04_modules/administration/SERVICES.md
- 04_modules/administration/TODO.md
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

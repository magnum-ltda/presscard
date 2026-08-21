---
document: SECURITY_AUDIT_MODULE
title: Segurança e Auditoria Module
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Security
purpose: Definir o módulo de segurança e auditoria da Presscard.
audience:
- AI
- Developer
- Product Owner
depends_on:
- 04_modules/administration/README.md
- 04_modules/employees/README.md
- 04_modules/companies/README.md
related_documents:
- 04_modules/security/RULES.md
- 04_modules/security/ENTITIES.md
- 04_modules/security/FLOW.md
- 04_modules/security/API.md
- 04_modules/security/SERVICES.md
- 04_modules/security/TODO.md
---

# API

## Audit
```http
GET /api/admin/audit
GET /api/admin/audit/{auditId}
```

## Security Events
```http
GET /api/admin/security-events
GET /api/admin/security-events/{eventId}
POST /api/admin/security-events/{eventId}/resolve
```

Endpoints administrativos validam autenticação, Permission e Tenant.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

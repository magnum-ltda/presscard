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
  - ADMINISTRATION
  - EMPLOYEES
  - COMPANIES
related_documents:
  - RULES
  - ENTITIES
  - FLOW
  - API
  - SERVICES
  - TODO
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

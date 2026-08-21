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

# Entities

## SecurityPrincipal
- UserId, TenantId, Roles, Permissions

## AuditEntry
- Id, ActorId, TenantId, Action, Resource, ResourceId, Before, After, CreatedAt, CorrelationId

## SecurityEvent
- Id, Type, ActorId, TenantId, Status, CreatedAt

Exemplos: LoginFailed, UnauthorizedAccess, PermissionChanged, SuspiciousActivity.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

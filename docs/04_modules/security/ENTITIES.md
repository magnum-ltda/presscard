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

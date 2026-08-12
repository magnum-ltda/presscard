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

# Services

## AuthenticationService
`authenticate()`, `validateToken()`, `getPrincipal()`

## AuthorizationService
`hasPermission()`, `authorize()`, `getRoles()`

## TenantContextService
`getCurrentTenant()`, `validateAccess()`

## AuditService
`record()`, `get()`, `search()`

## SecurityEventService
`record()`, `search()`, `resolve()`

## CorrelationService
Relaciona logs e eventos da mesma operação.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

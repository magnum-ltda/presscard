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

# Services

## AdministrationService
`getSettings()`, `updateSetting()`, `getRoles()`, `createRole()`

## AuthorizationService
`hasPermission()`, `authorize()`, `getUserRoles()`

## ConfigurationService
`get()`, `set()`, `validate()`, `getByScope()`

## FeatureFlagService
`isEnabled()`, `enable()`, `disable()`

## AuditService
`record()`, `search()`

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

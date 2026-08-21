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

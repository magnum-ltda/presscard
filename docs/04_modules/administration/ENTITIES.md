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

# Entities

## AdministrativeUser
- Id, UserId, CompanyId, Status

## Role
- Id, Name, Description, Scope, Status

## Permission
- Id, Code, Name, Description, Scope

## Configuration
- Id, Key, Value, Type, Scope, CompanyId

## FeatureFlag
- Id, Key, Enabled, Scope, CompanyId

## AuditEntry
- Id, ActorId, Action, Resource, ResourceId, Before, After, CreatedAt

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

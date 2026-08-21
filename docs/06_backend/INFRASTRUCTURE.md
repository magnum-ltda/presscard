---
document: BACKEND_INFRASTRUCTURE
title: Backend Infrastructure
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Backend
purpose: Definir responsabilidades da infraestrutura do backend.
audience:
- AI
- Developer
depends_on:
- 06_backend/DOMAIN.md
- 06_backend/APPLICATION.md
- 07_database/README.md
- 04_modules/integrations/README.md
related_documents:
- 07_database/README.md
- 04_modules/integrations/README.md
---

# Infrastructure

## Responsabilidades

- acesso ao Firestore / Firebase Services;
- repositories;
- migrations;
- integrações externas;
- cache quando aplicável;
- serviços técnicos;
- configuração de infraestrutura.

## Repository

O repository deve abstrair persistência quando essa abstração for útil ao domínio/application.

## Firestore / Firebase Services

O acesso ao banco deve permanecer na infraestrutura.

## Integrações

Chamadas externas devem utilizar adapters definidos em `04_modules/integrations`.

## Configuração

Secrets não devem ser versionados.

Configurações por ambiente devem ser separadas.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

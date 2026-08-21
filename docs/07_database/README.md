---
document: DATABASE_DOCUMENTATION
title: Presscard Database
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Database
purpose: Definir arquitetura, modelagem, persistência e regras do banco Firestore
  da Presscard.
audience:
- AI
- Developer
- Product Owner
depends_on:
- 02_architecture/ARCHITECTURE.md
- 03_business/BUSINESS_RULES.md
- 04_modules/README.md
- 06_backend/README.md
related_documents:
- 07_database/ARCHITECTURE.md
- 07_database/MODELING.md
- 07_database/TENANCY.md
- 07_database/MIGRATIONS.md
- 07_database/INDEXES.md
- 07_database/INTEGRITY.md
- 07_database/TODO.md
---

# Presscard Database

## Objetivo

Documentar a estrutura e os padrões do Firestore da Presscard.

## Princípios

- O banco deve preservar integridade dos dados.
- Regras de negócio permanecem no domínio/application quando não forem restrições de integridade.
- Dados multi-tenant devem possuir isolamento consistente.
- Alterações estruturais devem ser versionadas por migrations.
- Índices devem existir conforme padrões reais de consulta.
- Exclusões devem respeitar o ciclo de vida definido para cada entidade.
- Não armazenar secrets de aplicação como dados comuns.

## Stack atual

- Cloud Firestore
- Firebase Authentication

## Fluxo

```text
Domain/Application
       ↓
Repository
       ↓
Firestore
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

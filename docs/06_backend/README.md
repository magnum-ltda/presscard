---
document: BACKEND_DOCUMENTATION
title: Presscard Backend
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Backend
purpose: Definir a arquitetura e os serviços de backend efetivamente utilizados pela Presscard.
audience:
- AI
- Developer
- Product Owner
depends_on:
- 01_project/PROJECT.md
- 02_architecture/ARCHITECTURE.md
- 03_business/BUSINESS_RULES.md
- 04_modules/README.md
related_documents:
- 06_backend/ARCHITECTURE.md
- 06_backend/API.md
- 06_backend/AUTHORIZATION.md
- 06_backend/DOMAIN.md
- 06_backend/APPLICATION.md
- 06_backend/INFRASTRUCTURE.md
- 06_backend/ERROR_HANDLING.md
- 06_backend/TODO.md
---

# Presscard Backend

## Objetivo

Documentar a estrutura e os padrões do backend da Presscard.

## Stack atual

Conforme `01_project/CURRENT_STATE.md`, a plataforma utiliza:

- Angular
- Firebase Authentication
- Firestore
- Angular Material
- Lazy Loading
- Standalone Components

Não existe decisão aprovada neste conjunto documental para adotar .NET Core ou SQL Server. Essas tecnologias não devem ser tratadas como stack oficial.

## Princípios

- Backend é a autoridade final das regras de negócio.
- API não deve depender de detalhes do frontend.
- Domínio não deve depender de infraestrutura.
- Persistência deve ser isolada por abstrações adequadas.
- Autorização deve ser aplicada no backend.
- Operações multi-tenant devem validar o Tenant.
- Erros devem possuir contrato consistente.
- Integrações externas devem ser isoladas por adapters.

## Estrutura conceitual

```text
Angular
  ↓
Firebase Authentication / Firestore
  ↓
Firebase Services / External Providers
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

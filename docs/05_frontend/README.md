---
document: FRONTEND_DOCUMENTATION
title: Presscard Frontend
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Frontend
purpose: Definir a arquitetura, padrões e regras do frontend Angular da Presscard.
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
- 05_frontend/ARCHITECTURE.md
- 05_frontend/ROUTING.md
- 05_frontend/STATE_MANAGEMENT.md
- 05_frontend/UI_COMPONENTS.md
- 05_frontend/AUTHENTICATION.md
- 05_frontend/API_CLIENT.md
- 05_frontend/ERROR_HANDLING.md
- 05_frontend/TODO.md
---

# Presscard Frontend

## Objetivo

Documentar a estrutura e os padrões do frontend Angular da Presscard.

## Stack conhecida

- Angular
- Angular Material
- TypeScript
- Firebase, quando utilizado pelos fluxos de autenticação/infraestrutura já definidos

## Princípios

- Componentes devem ser responsáveis pela apresentação e interação.
- Regras de negócio devem permanecer em serviços/domínio apropriados.
- Comunicação com backend deve ser centralizada em serviços/clients.
- Rotas protegidas devem utilizar autorização.
- Estado compartilhado deve possuir estratégia explícita.
- Não duplicar regras dos módulos de negócio no frontend.
- O frontend nunca deve ser considerado a camada final de segurança.

## Estrutura conceitual

```text
App
├── Core
├── Shared
├── Features
├── Layout
└── Infrastructure
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

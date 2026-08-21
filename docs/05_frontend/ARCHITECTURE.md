---
document: FRONTEND_ARCHITECTURE
title: Frontend Architecture
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Frontend
purpose: Definir a organização arquitetural do frontend Angular.
audience:
- AI
- Developer
depends_on:
- 05_frontend/README.md
related_documents:
- 05_frontend/ROUTING.md
- 05_frontend/STATE_MANAGEMENT.md
- 05_frontend/UI_COMPONENTS.md
---

# Frontend Architecture

## Camadas

```text
Presentation
    ↓
Feature Services / Facades
    ↓
API Clients
    ↓
Backend APIs
```

## Core

Responsável por recursos globais:

- autenticação;
- autorização;
- interceptors;
- configuração;
- tratamento global de erros;
- serviços compartilhados de infraestrutura.

## Shared

Contém componentes, pipes, directives e utilitários reutilizáveis.

Não deve conter regras específicas de um módulo de negócio.

## Features

Cada módulo de negócio deve possuir sua própria área funcional.

Exemplo:

```text
features/
├── employees/
├── partners/
├── benefits/
├── catalog/
├── bookings/
├── payments/
├── commissions/
├── notifications/
├── reports/
└── administration/
```

## Regra

Uma feature não deve acessar diretamente detalhes internos de outra feature. Quando houver dependência, utilizar contratos/serviços apropriados.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

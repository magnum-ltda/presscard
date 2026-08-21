---
document: BACKEND_DOMAIN
title: Backend Domain Layer
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Backend
purpose: Definir responsabilidades da camada de domínio.
audience:
- AI
- Developer
depends_on:
- 03_business/BUSINESS_RULES.md
- 04_modules/README.md
related_documents:
- 06_backend/APPLICATION.md
---

# Domain

## Responsabilidades

- representar entidades de negócio;
- manter invariantes;
- executar regras de negócio;
- definir contratos necessários ao domínio.

## Entidades

As entidades devem refletir os módulos documentados em `04_modules`.

Exemplos:

- Employee;
- Company;
- Partner;
- Benefit;
- Booking;
- Payment;
- Commission;
- Notification.

## Regras

- Não colocar lógica de negócio em Controller.
- Não colocar regra de negócio exclusivamente em SQL.
- Não depender diretamente de Entity Framework ou SDK externo quando isso quebrar a separação arquitetural.
- Entidades devem permanecer consistentes.

## Fluxo

```mermaid
flowchart LR
A[Use Case] --> B[Domain Entity]
B --> C[Business Rule]
C --> D[Valid State]
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

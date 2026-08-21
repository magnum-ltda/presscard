---
document: PRODUCT_DECISIONS
title: Product Decision Guidance
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Decisions
purpose: Definir quando decisões de produto devem ser registradas.
audience:
- AI
- Developer
- Product Owner
depends_on:
- 03_business/BUSINESS_RULES.md
- 04_modules/README.md
related_documents:
- 11_decisions/README.md
- 11_decisions/DECISION_TEMPLATE.md
---

# Product Decision Guidance

## Registrar

- mudança relevante de regra de negócio;
- alteração de fluxo principal;
- definição de comportamento que afete usuários;
- mudança de escopo;
- mudança de política comercial;
- decisão com impacto em vários módulos.

## Regras

- Decisão de produto não deve contradizer regras de negócio sem atualização oficial.
- Mudanças de produto devem indicar módulos afetados.
- Quando houver impacto técnico relevante, considerar também um ADR arquitetural.

## Impacto

Avaliar:

- Employee;
- Company;
- Partner;
- Benefit;
- Catalog;
- Booking;
- Payment;
- Commission;
- Notification.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

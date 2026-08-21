---
document: BENEFITS
title: Presscard Benefits Specification
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
purpose: Definir o funcionamento do módulo de Benefícios da plataforma Presscard.
audience:
- AI
- Developer
- Product Owner
updated_by_antigravity: false
depends_on:
- 03_business/BUSINESS_RULES.md
- 02_architecture/DOMAIN_MODEL.md
related_documents:
- 03_business/BOOKINGS.md
- 03_business/COMMISSIONS.md
- 03_business/PAYMENTS.md
---

# Benefits

## Objetivo

O módulo de Benefícios é responsável por definir quais vantagens uma Empresa Associada disponibiliza aos seus Funcionários através de Parceiros Comerciais.

Este módulo não realiza reservas.

Este módulo não realiza pagamentos.

Este módulo apenas define regras comerciais.

---

# Definição

Um Benefit representa uma vantagem oferecida por uma Empresa Associada.

Exemplos:

- Desconto percentual
- Desconto em valor fixo
- Cashback
- Upgrade
- Brinde
- Condição especial
- Benefício exclusivo

---

# Responsabilidades

O módulo deve permitir:

- cadastrar benefícios;
- editar benefícios;
- ativar benefícios;
- desativar benefícios;
- definir validade;
- definir regras de utilização;
- controlar elegibilidade.

---

# Relacionamentos

```text
Associated Company

↓

Benefit

↓

Commercial Partner

↓

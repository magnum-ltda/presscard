---
document: COMMISSIONS_MODULE
title: Commissions Module
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard
module: Commissions

purpose:
  Definir o módulo responsável pelo cálculo, registro e acompanhamento das comissões da Presscard.

audience:
  - AI
  - Developer
  - Product Owner

depends_on:
  - PAYMENTS
  - BOOKING
  - BENEFITS
  - PARTNERS

related_documents:
  - RULES
  - ENTITIES
  - FLOW
  - API
  - SERVICES
  - TODO
---

# Commissions

## Objetivo

O módulo Commissions controla as comissões geradas pelas operações comerciais da Presscard.

A comissão representa a remuneração da Presscard ou de uma parte comercial definida pelas regras da operação.

## Responsabilidades

- definir regras de comissão;
- calcular comissão;
- registrar comissão;
- acompanhar status;
- relacionar comissão ao Payment;
- preservar histórico;
- permitir relatórios financeiros.

## Separação

```text
Booking
   ↓
define a operação

Payment
   ↓
define o valor efetivamente pago

Commission
   ↓
calcula a remuneração conforme a regra aplicável
```

O módulo não deve alterar o valor do Payment aprovado.

## Princípio histórico

Depois que uma comissão for gerada para uma operação financeira, a regra aplicada deve ser preservada.

Alterações futuras da regra não devem modificar comissões históricas.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

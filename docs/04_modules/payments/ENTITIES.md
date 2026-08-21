---
document: PAYMENTS_ENTITIES
title: Payments Entities
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
path: docs/04_modules/payments/ENTITIES.md
module: Payments
---

# Payments Entities

## Payment

Representa uma cobrança financeira.

Atributos conceituais:

- Id
- EmployeeId
- BookingId, quando aplicável
- Amount
- Currency
- Status
- PaymentMethod
- Gateway
- ExternalId
- CreatedAt
- UpdatedAt
- ApprovedAt
- CancelledAt
- RefundedAt

## PaymentItem

Representa os componentes do valor.

Exemplos:

- preço base;
- desconto de Benefit;
- taxa;
- comissão;
- outros componentes.

## PaymentStatus

Estados:

- Pending
- Processing
- Approved
- Failed
- Cancelled
- Refunded
- PartiallyRefunded

## PaymentMethod

Exemplos:

- PIX
- CreditCard
- DebitCard
- Other

A lista deve evoluir conforme os gateways suportados.

## GatewayTransaction

Representa a transação no provedor externo.

Atributos:

- Gateway
- ExternalId
- Status
- RawReference, quando permitido
- CreatedAt
- UpdatedAt

## Refund

Representa um estorno.

Atributos:

- Id
- PaymentId
- Amount
- Reason
- Status
- ExternalId
- CreatedAt
- CompletedAt

## Histórico

Alterações de status e operações financeiras devem ser preservadas para auditoria.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

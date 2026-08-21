---
document: COMMISSIONS_ENTITIES
title: Commissions Entities
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
path: docs/04_modules/commissions/ENTITIES.md
module: Commissions
---

# Commissions Entities

## Commission

Representa a comissão gerada por uma operação.

Atributos conceituais:

- Id
- BookingId, quando aplicável
- PaymentId
- PartnerId, quando aplicável
- Amount
- Currency
- Rate
- RuleType
- Status
- CreatedAt
- UpdatedAt
- PaidAt

## CommissionRule

Representa a regra utilizada para cálculo.

Atributos:

- Id
- Type
- Rate
- FixedAmount
- PartnerId, quando aplicável
- CategoryId, quando aplicável
- EffectiveFrom
- EffectiveTo
- Status

## CommissionCalculation

Representa o resultado do cálculo.

Atributos:

- BaseAmount
- Rate
- CommissionAmount
- RuleId
- CalculatedAt

## CommissionAdjustment

Representa ajuste ou reversão.

Atributos:

- Id
- CommissionId
- Amount
- Reason
- Type
- CreatedAt

## CommissionStatus

Estados:

- Pending
- Calculated
- Payable
- Paid
- Cancelled
- Reversed

## Histórico

O sistema deve preservar:

- regra utilizada;
- base de cálculo;
- percentual;
- valor calculado;
- ajustes;
- reversões.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

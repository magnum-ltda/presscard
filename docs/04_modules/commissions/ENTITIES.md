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

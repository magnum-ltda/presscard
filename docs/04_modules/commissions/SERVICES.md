---
document: COMMISSIONS_SERVICES
title: Commissions Services
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
path: docs/04_modules/commissions/SERVICES.md
module: Commissions
---

# Commissions Services

## Arquitetura

```text
Component
  ↓
Facade
  ↓
Commission Service
  ↓
Payment / Booking
  ↓
Persistence
```

## CommissionService

```text
calculate()
get()
list()
recalculate()
```

## CommissionRuleService

```text
getApplicableRule()
validateRule()
createRule()
updateRule()
```

## CommissionCalculationService

```text
calculate()
calculateFromRate()
calculateFixedAmount()
```

## CommissionAdjustmentService

```text
createAdjustment()
reverse()
validateAdjustment()
```

## CommissionPaymentService

Responsável pelo ciclo de pagamento da comissão.

```text
markPayable()
markPaid()
```

## CommissionFacade

Coordena operações utilizadas pelo frontend administrativo.

```text
loadCommission()
loadCommissions()
calculateCommission()
adjustCommission()
```

## Integrações

O serviço deve consultar os contratos de Payment e Booking, sem duplicar suas regras.

## Idempotência

O cálculo deve possuir proteção contra geração duplicada para a mesma operação.

## Auditoria

Cálculos, ajustes, reversões e pagamentos devem gerar histórico/auditoria.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

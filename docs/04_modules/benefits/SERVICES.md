---
document: BENEFITS_SERVICES
title: Benefits Module Services
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard
module: Benefits

purpose:
  Definir os serviços do módulo Benefits.

depends_on:
  - README
  - API
  - RULES
  - ENTITIES
---

# Benefits Services

## Arquitetura

```text
Component
  ↓
Facade
  ↓
Service
  ↓
Repository
  ↓
Persistence
```

## BenefitService

Responsável pelas operações principais.

```text
create()
update()
activate()
suspend()
deactivate()
findById()
search()
```

## BenefitRuleService

Gerencia condições comerciais.

```text
createRule()
updateRule()
validateRule()
calculateBenefit()
```

## BenefitEligibilityService

Valida elegibilidade.

```text
isEligible()
getEligibility()
setEligibility()
validateEmployee()
```

## BenefitValidityService

Gerencia validade.

```text
validatePeriod()
isValid()
isExpired()
```

## BenefitUsageService

Controla utilização.

```text
validateUsage()
registerUsage()
getUsage()
checkLimit()
```

## BenefitCatalogService

Fornece benefícios para o catálogo.

```text
getAvailableBenefits()
search()
filter()
```

## BenefitFacade

Coordena operações do frontend.

```text
loadBenefit()
saveBenefit()
changeStatus()
validateUsage()
loadCatalog()
```

## Pricing/Discount Responsibility

Quando houver Booking ou Payment, o BenefitService deve fornecer a condição comercial aplicável.

O cálculo final de valores financeiros deve respeitar os contratos dos módulos de Booking e Payment.

## Regras

- Componentes não implementam regras de negócio.
- Elegibilidade deve ser validada centralmente.
- Condições históricas devem ser preservadas.
- Operações administrativas relevantes geram AuditLog.
- O Tenant deve ser validado antes do acesso a Benefits privados.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

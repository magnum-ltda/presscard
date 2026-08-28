---
document: BENEFITS_COMPONENTS
title: Benefits Module Components
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Benefits
purpose: Definir os componentes de interface do módulo Benefits.
depends_on:
- 04_modules/benefits/README.md
- 04_modules/benefits/FLOW.md
- 04_modules/benefits/API.md
---

# Benefits Components

## Estrutura

```text
benefits/

pages/
components/
dialogs/
services/
models/
guards/
routes/
```

## BenefitListComponent

Lista benefícios.

Funcionalidades:

- pesquisa;
- filtros;
- categoria;
- parceiro;
- status;
- validade.

## BenefitFormComponent

Cadastro e edição.

Campos:

- título / nome (`title`);
- descrição (`description`);
- empresa associada (`companyId`);
- parceiro comercial (`partnerId`);
- categoria (`category`);
- tipo de execução (`executionType`: CUPOM, LINK, PRESENCIAL, etc.);
- condições financeiras (utilizando `CurrencyPercentageInputComponent` no modo percentual/fixo):
  - desconto total (`discountPercentage`);
  - desconto do usuário (`employeeDiscount`);
  - comissão da plataforma (`platformCommission`);
- validade da oferta (`validity`): entrada com máscara brasileira `DD/MM/AAAA` (`00/00/0000`) e conversão transparente para `YYYY-MM-DD` (ISO) na camada de dados/backend;
- limite de usos por funcionário (`usageLimit`);
- regras e instruções (`rules`, `instructions`);
- status ativo (`active`).

## BenefitDetailsComponent

Exibe:

- descrição;
- parceiro;
- condição;
- validade;
- elegibilidade;
- regras;
- status.

## BenefitCardComponent

Representação resumida para o catálogo do Employee.

## BenefitEligibilityComponent

Exibe e administra critérios de elegibilidade.

## BenefitRuleComponent

Configura a condição comercial.

## BenefitValidityComponent

Configura período de validade.

## BenefitUsageComponent

Exibe informações relacionadas à utilização.

## BenefitCatalogComponent

Exibe benefícios disponíveis para o Employee.

## BenefitFilterComponent

Filtros:

- categoria;
- localização;
- parceiro;
- tipo de benefício;
- disponibilidade.

## Shared Components

Reutilizar:

- PageHeaderComponent
- DataTableComponent / SkeletonTableComponent
- ConfirmDialogComponent / ConfirmModalComponent
- StatusBadgeComponent
- EmptyStateComponent
- LoadingComponent / SpinnerComponent
- CurrencyPercentageInputComponent (para descontos e comissões)

## UX

O Employee deve conseguir entender claramente:

- qual é o benefício;
- qual é o desconto ou condição;
- onde utilizar;
- até quando é válido;
- quem pode utilizar;
- quais regras existem.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

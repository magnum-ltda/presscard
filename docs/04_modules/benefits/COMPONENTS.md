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

- nome;
- descrição;
- parceiro;
- categoria;
- condição comercial;
- validade;
- elegibilidade;
- limite.

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
- DataTableComponent
- ConfirmDialogComponent
- StatusBadgeComponent
- EmptyStateComponent
- LoadingComponent

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

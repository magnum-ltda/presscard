---
document: BENEFITS_ENTITIES
title: Benefits Module Entities
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard
module: Benefits

purpose:
  Definir as entidades conceituais do módulo Benefits.

depends_on:
  - DOMAIN_MODEL
  - COMPANIES
  - PARTNERS
  - EMPLOYEES
---

# Benefits Entities

## Objetivo

Este documento descreve as entidades conceituais do módulo Benefits.

Não representa diretamente o modelo físico do banco de dados.

## Diagrama

```mermaid
classDiagram

class Benefit
class BenefitRule
class BenefitEligibility
class BenefitValidity
class AssociatedCompany
class CommercialPartner
class Category

Benefit "1" --> "1" AssociatedCompany
Benefit "0..1" --> "1" CommercialPartner
Benefit "1" --> "0..*" BenefitRule
Benefit "1" --> "0..*" BenefitEligibility
Benefit "1" --> "1" BenefitValidity
Benefit "*" --> "*" Category
```

## Benefit

Representa o benefício disponibilizado pela Associated Company.

Atributos conceituais:

- Id
- CompanyId
- PartnerId
- Name
- Description
- Status
- CreatedAt
- UpdatedAt
- PublishedAt

## BenefitRule

Representa a condição comercial.

Exemplos:

- percentual;
- valor fixo;
- preço especial;
- limite de utilização.

Atributos conceituais:

- Type
- Value
- MinimumValue
- MaximumValue
- UsageLimit

## BenefitEligibility

Representa quem pode utilizar o benefício.

Exemplos:

- todos os Employees;
- departamento;
- cargo;
- unidade;
- grupo.

## BenefitValidity

Representa o período de validade.

Atributos:

- StartDate
- EndDate

## Relacionamentos

Um Benefit:

- pertence a uma Associated Company;
- pode estar associado a um Commercial Partner;
- possui regras;
- possui critérios de elegibilidade;
- possui validade;
- pode possuir categorias.

## Histórico

O valor e as regras utilizadas em uma operação devem ser preservados no contexto da operação para garantir rastreabilidade.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

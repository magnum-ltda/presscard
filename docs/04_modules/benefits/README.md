---
document: BENEFITS_MODULE
title: Benefits Module
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Benefits
purpose: Definir o módulo responsável pelo gerenciamento dos Benefits disponibilizados
  pelas Associated Companies.
audience:
- AI
- Developer
- Product Owner
depends_on:
- 03_business/BUSINESS_RULES.md
- 04_modules/companies/README.md
- 04_modules/employees/README.md
- 04_modules/partners/README.md
related_documents:
- 04_modules/benefits/RULES.md
- 04_modules/benefits/ENTITIES.md
- 04_modules/benefits/FLOW.md
- 04_modules/benefits/API.md
- 04_modules/benefits/COMPONENTS.md
- 04_modules/benefits/SERVICES.md
---

# Benefits

## Objetivo

O módulo Benefits é responsável pelo gerenciamento dos benefícios disponibilizados aos Employees por suas Associated Companies.

Um Benefit representa uma condição comercial ou vantagem disponibilizada por uma empresa aos seus funcionários através de um Commercial Partner ou serviço da plataforma.

## Responsabilidades

- criar benefícios;
- editar benefícios;
- ativar e desativar benefícios;
- associar benefício a Commercial Partner;
- configurar regras de benefício;
- definir elegibilidade;
- disponibilizar benefícios no catálogo;
- controlar validade;
- consultar utilização.

## Escopo

Incluído:

- identificação;
- descrição;
- parceiro;
- categoria;
- desconto ou condição comercial;
- elegibilidade;
- período de validade;
- status;
- regras de utilização.

Não incluído:

- processamento de pagamento;
- criação de Booking;
- cálculo de Commission.

## Relação principal

```text
Associated Company
        ↓
      Benefit
        ↓
Commercial Partner
        ↓
Reservable Resource (quando aplicável)
```

## Multi-Tenant

Um Benefit pertence a exatamente uma Associated Company.

O mesmo Commercial Partner pode possuir Benefits diferentes para empresas diferentes.

## Ciclo de vida

```text
Draft
  ↓
Active
  ↓
Suspended
  ↓
Expired / Deactivated
```

## Implementação

Status

☐ Não iniciado
☑ Parcial
☐ Completo

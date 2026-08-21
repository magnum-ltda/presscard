---
document: CATALOG_MODULE
title: Marketplace and Catalog Module
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Catalog
purpose: Definir o módulo responsável pela descoberta e apresentação de Benefits,
  Commercial Partners e recursos disponíveis para os Employees.
audience:
- AI
- Developer
- Product Owner
depends_on:
- 03_business/BENEFITS.md
- 04_modules/partners/README.md
- 04_modules/employees/README.md
related_documents:
- 04_modules/catalog/SEARCH.md
- 04_modules/catalog/FILTERS.md
- 04_modules/catalog/MAPS.md
- 04_modules/catalog/FLOW.md
- 04_modules/catalog/API.md
- 04_modules/catalog/TODO.md
---

# Catalog

## Objetivo

O módulo Catalog é a camada de descoberta da Presscard.

Ele permite que o Employee encontre benefícios, parceiros e serviços disponíveis para sua Associated Company.

O catálogo deve ser preparado para diferentes tipos de serviços, não apenas hotéis.

Exemplos:

- hotéis;
- restaurantes;
- aluguel de carros;
- academias;
- serviços;
- experiências.

## Responsabilidades

- apresentar benefícios disponíveis;
- pesquisar;
- filtrar;
- ordenar;
- localizar parceiros;
- apresentar detalhes;
- direcionar para Booking quando aplicável;
- respeitar elegibilidade e Tenant.

## Princípio

O catálogo não deve possuir regras duplicadas do módulo Benefits.

Ele consulta os serviços responsáveis para determinar disponibilidade e elegibilidade.

## Fluxo principal

```text
Employee
   ↓
Catalog
   ↓
Search / Filters / Location
   ↓
Benefit / Partner
   ↓
Details
   ↓
Booking (quando aplicável)
```

## Implementação

Status

☐ Não iniciado
☑ Parcial
☐ Completo

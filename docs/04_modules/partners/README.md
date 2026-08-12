---
document: PARTNERS_MODULE
title: Commercial Partners Module
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard
module: Partners

purpose:
  Definir o módulo responsável pelo gerenciamento dos Commercial Partners.

audience:
  - AI
  - Developer
  - Product Owner

depends_on:
  - DOMAIN_MODEL
  - BUSINESS_RULES
  - MULTI_TENANT
  - COMPANIES

related_documents:
  - RULES
  - ENTITIES
  - FLOW
  - API
  - COMPONENTS
  - SERVICES
---

# Commercial Partners

## Objetivo

O módulo Partners é responsável pelo cadastro e gerenciamento dos Parceiros Comerciais (Commercial Partners) que disponibilizam produtos, serviços e recursos para os Employees da Presscard.

Um Commercial Partner pertence à plataforma e pode atender diversas Associated Companies.

## Responsabilidades

- cadastrar parceiros;
- editar dados;
- ativar e desativar parceiros;
- gerenciar categorias;
- gerenciar localização;
- gerenciar contatos;
- cadastrar recursos oferecidos;
- disponibilizar informações para o catálogo.

## Escopo

Incluído:

- dados comerciais;
- endereço;
- localização geográfica;
- categorias;
- contatos;
- status;
- recursos;
- imagens;
- informações públicas.

Não incluído:

- definição de Benefits por empresa;
- Bookings;
- Payments;
- Commissions.

## Localização

O parceiro deve armazenar dados suficientes para permitir:

- exibição em mapa;
- busca por proximidade;
- cálculo de distância;
- integração futura com Google Maps.

## Compartilhamento

Um Commercial Partner pode atender múltiplas Associated Companies.

O mesmo parceiro pode possuir Benefits diferentes para cada empresa.

## Ciclo de vida

```text
Cadastro
   ↓
Em análise
   ↓
Ativo
   ↓
Suspenso
   ↓
Desativado
```

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

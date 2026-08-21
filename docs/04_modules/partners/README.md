---
document: PARTNERS_MODULE
title: Commercial Partners Module
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Partners
purpose: Definir o módulo responsável pelo gerenciamento dos Commercial Partners.
audience:
- AI
- Developer
- Product Owner
depends_on:
- 02_architecture/DOMAIN_MODEL.md
- 03_business/BUSINESS_RULES.md
- 02_architecture/MULTI_TENANT.md
- 04_modules/companies/README.md
related_documents:
- 04_modules/partners/RULES.md
- 04_modules/partners/ENTITIES.md
- 04_modules/partners/FLOW.md
- 04_modules/partners/API.md
- 04_modules/partners/COMPONENTS.md
- 04_modules/partners/SERVICES.md
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

---
document: PARTNERS_COMPONENTS
title: Commercial Partners Module Components
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard
module: Partners

purpose:
  Definir os componentes de interface do módulo Partners.

depends_on:
  - README
  - FLOW
  - API
---

# Partners Components

## Estrutura

```text
partners/

pages/
components/
dialogs/
services/
models/
maps/
routes/
```

## PartnerListComponent

Lista parceiros.

Funcionalidades:

- pesquisa;
- filtros;
- categoria;
- status;
- localização;
- paginação.

## PartnerFormComponent

Cadastro e edição.

Campos:

- razão social;
- nome fantasia;
- documento;
- descrição;
- email;
- telefone;
- website.

## PartnerDetailsComponent

Exibe:

- dados;
- categorias;
- localização;
- contatos;
- recursos;
- histórico permitido.

## PartnerAddressComponent

Gerencia endereço.

## PartnerLocationComponent

Gerencia latitude e longitude.

## PartnerMapComponent

Exibe o parceiro em mapa.

Deve ser preparado para integração com Google Maps.

## PartnerCategoryComponent

Seleciona categorias.

## PartnerContactListComponent

Lista contatos.

## PartnerResourceListComponent

Lista Reservable Resources.

## PartnerResourceFormComponent

Cadastro de recursos.

## Shared Components

Reutilizar:

- PageHeaderComponent
- DataTableComponent
- ConfirmDialogComponent
- StatusBadgeComponent
- EmptyStateComponent
- LoadingComponent
- AddressComponent
- LocationPickerComponent
- ImageUploadComponent

## UX

A localização deve ser visualizada de forma simples.

Quando possível, permitir seleção da posição diretamente no mapa.

Erros de geocodificação devem permitir correção manual.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

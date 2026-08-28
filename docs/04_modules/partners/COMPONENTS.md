---
document: PARTNERS_COMPONENTS
title: Commercial Partners Module Components
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Partners
purpose: Definir os componentes de interface do módulo Partners.
depends_on:
- 04_modules/partners/README.md
- 04_modules/partners/FLOW.md
- 04_modules/partners/API.md
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
- formatação visual de telefone/contato;
- paginação.

## PartnerFormComponent

Cadastro e edição.

Campos e validações:

- razão social (`tradeName`);
- categoria (`category`);
- descrição (`description`);
- contato/telefone (`contact`): máscara `(00) 00000-0000`, validação de 10 a 11 dígitos;
- whatsapp (`whatsapp`): máscara `(00) 00000-0000`, validação de 10 a 11 dígitos;
- link externo (`externalLink`): validação de URL (`http://` ou `https://`);
- tipo de comissão (`commissionType`): PERCENTAGE ou FIXED;
- valor da comissão (`commissionValue`): manipulado via `CurrencyPercentageInputComponent` dinamicamente conforme o tipo selecionado;
- endereço e CEP (`zipCode`): máscara `00000-000`, validação de 8 dígitos, integração e busca automática com ViaCEP, tratamento e exibição de erro caso não encontrado;
- link do Google Maps (`googleMapsLink`): validação de formato e regex para links do Google Maps.

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
- DataTableComponent / SkeletonTableComponent
- ConfirmDialogComponent / ConfirmModalComponent
- StatusBadgeComponent
- EmptyStateComponent
- LoadingComponent / SpinnerComponent
- AddressComponent
- LocationPickerComponent
- ImageUploadComponent
- CurrencyPercentageInputComponent (para comissão)

## UX

A localização deve ser visualizada de forma simples.

Quando possível, permitir seleção da posição diretamente no mapa.

Erros de geocodificação devem permitir correção manual.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

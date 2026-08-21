---
document: PARTNERS_ENTITIES
title: Commercial Partners Module Entities
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Partners
purpose: Definir as entidades conceituais do módulo Partners.
depends_on:
- 02_architecture/DOMAIN_MODEL.md
- 02_architecture/MULTI_TENANT.md
---

# Partners Entities

## Objetivo

Este documento descreve as entidades conceituais utilizadas pelo módulo Partners.

Não representa diretamente o modelo físico do banco de dados.

## Diagrama

```mermaid
classDiagram

class CommercialPartner
class PartnerAddress
class PartnerLocation
class PartnerContact
class Category
class ReservableResource
class PartnerStatus

CommercialPartner "1" --> "0..*" PartnerAddress
CommercialPartner "1" --> "0..1" PartnerLocation
CommercialPartner "1" --> "0..*" PartnerContact
CommercialPartner "*" --> "*" Category
CommercialPartner "1" --> "0..*" ReservableResource
CommercialPartner --> PartnerStatus
```

## CommercialPartner

Representa uma empresa parceira da plataforma.

Atributos conceituais:

- Id
- LegalName
- TradeName
- Document
- Description
- Email
- Phone
- Website
- Status
- CreatedAt
- UpdatedAt

## PartnerAddress

Representa endereço físico ou comercial.

Atributos:

- Id
- Street
- Number
- Complement
- District
- City
- State
- PostalCode
- Country

## PartnerLocation

Representa a localização geográfica.

Atributos:

- Latitude
- Longitude
- Accuracy
- Source
- UpdatedAt

A localização deve ser adequada para integração com mapas.

## PartnerContact

Representa canais de contato.

Exemplos:

- telefone;
- WhatsApp;
- email;
- website;
- redes sociais.

## Category

Classifica o parceiro.

Exemplos:

- Hotel
- Restaurante
- Locadora
- Academia
- Farmácia
- Cinema

## ReservableResource

Representa um recurso que pode ser reservado.

Exemplos:

- quarto;
- veículo;
- mesa;
- serviço.

## PartnerStatus

Estados:

- Draft
- UnderReview
- Active
- Suspended
- Deactivated

## Relacionamentos

CommercialPartner pode:

- atender várias Associated Companies;
- possuir vários Benefits indiretamente por meio das empresas;
- possuir vários Reservable Resources;
- possuir várias categorias.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

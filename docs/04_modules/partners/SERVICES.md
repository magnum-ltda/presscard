---
document: PARTNERS_SERVICES
title: Commercial Partners Module Services
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Partners
purpose: Definir os serviços do módulo Partners.
depends_on:
- 04_modules/partners/README.md
- 04_modules/partners/API.md
- 04_modules/partners/RULES.md
- 04_modules/partners/ENTITIES.md
---

# Partners Services

## Arquitetura

```text
Component
  ↓
Facade
  ↓
Service
  ↓
Repository
  ↓
Persistence
```

## PartnerService

Responsável pelas operações principais.

```text
create()
update()
activate()
suspend()
deactivate()
findById()
search()
```

## PartnerAddressService

Gerencia endereços.

```text
getAddress()
saveAddress()
validateAddress()
```

## PartnerLocationService

Gerencia localização.

```text
geocode()
reverseGeocode()
saveLocation()
validateCoordinates()
findNearby()
```

## PartnerCategoryService

Gerencia categorias.

```text
list()
assign()
remove()
validate()
```

## PartnerContactService

Gerencia contatos.

```text
list()
add()
update()
remove()
```

## PartnerResourceService

Gerencia Reservable Resources associados ao parceiro.

```text
list()
create()
update()
activate()
deactivate()
```

## PartnerFacade

Coordena operações utilizadas pelo frontend.

```text
loadPartner()
savePartner()
changeStatus()
loadLocation()
loadResources()
```

## MapIntegrationService

Abstrai o provedor de mapas.

Responsabilidades:

- geocodificação;
- reverse geocoding;
- mapas;
- busca de coordenadas;
- cálculo de distância quando necessário.

A implementação não deve acoplar o domínio diretamente a um fornecedor específico.

## Regras

- Componentes não implementam regras de negócio.
- Serviços não dependem da interface.
- Localização deve ser validada.
- Operações administrativas relevantes geram AuditLog.
- Integrações externas devem ser isoladas atrás de interfaces.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

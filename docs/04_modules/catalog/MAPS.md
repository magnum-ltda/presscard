---
document: CATALOG_MAPS
title: Catalog Maps
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Catalog
purpose: Definir a utilização de localização e mapas no catálogo.
depends_on:
- 04_modules/catalog/README.md
- 04_modules/partners/README.md
---

# Maps

## Objetivo

Permitir que o Employee visualize Commercial Partners em mapa e encontre opções próximas.

## Dados

O catálogo poderá utilizar:

- latitude;
- longitude;
- endereço;
- cidade;
- estado.

## Visualização

```text
Lista ↔ Mapa
```

O usuário poderá alternar entre:

- resultados em lista;
- resultados no mapa.

## Marcadores

Cada parceiro poderá ser representado por um marcador.

Ao selecionar um marcador, apresentar:

- nome;
- categoria;
- distância;
- benefício disponível;
- ação para detalhes.

## Busca por proximidade

O sistema poderá receber:

```text
latitude
longitude
radius
```

e retornar parceiros dentro do raio.

## Google Maps

A integração deverá ser feita por uma camada de abstração.

O domínio não deve depender diretamente de APIs específicas do Google.

## Privacidade

A localização do usuário somente deverá ser utilizada quando autorizada.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

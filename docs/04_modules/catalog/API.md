---
document: CATALOG_API
title: Catalog API
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Catalog
purpose: Definir os contratos de consulta do catálogo.
depends_on:
- 04_modules/catalog/README.md
- 04_modules/catalog/SEARCH.md
- 04_modules/catalog/FILTERS.md
- 04_modules/catalog/MAPS.md
---

# Catalog API

## Base Route

```text
/api/catalog
```

## Buscar

```http
GET /api/catalog/search
```

Parâmetros possíveis:

- q
- categoryId
- partnerId
- city
- state
- latitude
- longitude
- radius
- availableFrom
- availableTo

## Detalhes

```http
GET /api/catalog/items/{itemId}
```

## Parceiros próximos

```http
GET /api/catalog/nearby
```

Parâmetros:

```text
latitude
longitude
radius
```

## Categorias

```http
GET /api/catalog/categories
```

## Benefícios

```http
GET /api/catalog/benefits
```

## Resposta

```json
{
  "success": true,
  "data": {
    "items": [],
    "total": 0
  }
}
```

## Paginação

Consultas devem suportar paginação.

Exemplo:

```text
page
pageSize
```

## Segurança

A API deve:

- identificar o Employee;
- validar Tenant;
- aplicar elegibilidade;
- retornar somente dados permitidos.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

---
document: PARTNERS_API
title: Commercial Partners Module API
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard
module: Partners

purpose:
  Definir os contratos de API do módulo Partners.

depends_on:
  - README
  - RULES
  - ENTITIES
---

# Partners API

## Base Route

```text
/api/partners
```

## Listar

```http
GET /api/partners
```

Suporta filtros:

- category
- status
- city
- state
- latitude
- longitude
- radius
- search

## Buscar

```http
GET /api/partners/{partnerId}
```

## Criar

```http
POST /api/partners
```

Exemplo:

```json
{
  "legalName": "",
  "tradeName": "",
  "document": "",
  "description": "",
  "email": "",
  "phone": "",
  "categoryIds": []
}
```

## Atualizar

```http
PUT /api/partners/{partnerId}
```

## Ativar

```http
PATCH /api/partners/{partnerId}/activate
```

## Suspender

```http
PATCH /api/partners/{partnerId}/suspend
```

## Desativar

```http
PATCH /api/partners/{partnerId}/deactivate
```

## Endereço

```http
PUT /api/partners/{partnerId}/address
```

## Localização

```http
PUT /api/partners/{partnerId}/location
```

Exemplo:

```json
{
  "latitude": 0,
  "longitude": 0
}
```

## Categorias

```http
PUT /api/partners/{partnerId}/categories
```

## Contatos

```http
GET /api/partners/{partnerId}/contacts
```

```http
POST /api/partners/{partnerId}/contacts
```

## Recursos

```http
GET /api/partners/{partnerId}/resources
```

```http
POST /api/partners/{partnerId}/resources
```

## Busca geográfica

```http
GET /api/partners/nearby?latitude={lat}&longitude={lng}&radius={radius}
```

## Respostas

Sucesso:

```json
{
  "success": true,
  "data": {}
}
```

Erro:

```json
{
  "success": false,
  "message": "",
  "errors": []
}
```

## Segurança

Operações administrativas devem validar:

- autenticação;
- autorização;
- permissões.

Consultas públicas ou de catálogo devem retornar somente dados permitidos.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

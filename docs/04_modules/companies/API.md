---
document: COMPANIES_API
title: Associated Companies Module API
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Companies
purpose: Definir os contratos de API do módulo Companies.
depends_on:
- 04_modules/companies/README.md
- 04_modules/companies/RULES.md
- 04_modules/companies/ENTITIES.md
---

# Companies API

## Base Route

```text
/api/companies
```

Rotas administrativas globais podem utilizar:

```text
/api/admin/companies
```

## Listar

```http
GET /api/companies
```

Requer contexto autorizado de Tenant quando a consulta for da empresa.

## Buscar

```http
GET /api/companies/{companyId}
```

## Criar

```http
POST /api/companies
```

Exemplo:

```json
{
  "legalName": "",
  "tradeName": "",
  "document": "",
  "email": "",
  "phone": ""
}
```

## Atualizar

```http
PUT /api/companies/{companyId}
```

## Ativar

```http
PATCH /api/companies/{companyId}/activate
```

## Suspender

```http
PATCH /api/companies/{companyId}/suspend
```

## Desativar

```http
PATCH /api/companies/{companyId}/deactivate
```

## Configurações

```http
GET /api/companies/{companyId}/settings
```

```http
PUT /api/companies/{companyId}/settings
```

## Administradores

```http
GET /api/companies/{companyId}/administrators
```

```http
POST /api/companies/{companyId}/administrators
```

```http
DELETE /api/companies/{companyId}/administrators/{userId}
```

A remoção deve respeitar a regra de não deixar a empresa sem administrador ativo.

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

Todas as operações devem validar:

- autenticação;
- autorização;
- Tenant;
- status da empresa.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

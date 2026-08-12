---
document: BENEFITS_API
title: Benefits Module API
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard
module: Benefits

purpose:
  Definir os contratos de API do módulo Benefits.

depends_on:
  - README
  - RULES
  - ENTITIES
---

# Benefits API

## Base Route

```text
/api/benefits
```

## Listar benefícios

```http
GET /api/benefits
```

Filtros:

- companyId
- partnerId
- categoryId
- status
- search
- eligibleOnly

## Buscar

```http
GET /api/benefits/{benefitId}
```

## Criar

```http
POST /api/benefits
```

Exemplo:

```json
{
  "companyId": "",
  "partnerId": "",
  "name": "",
  "description": "",
  "rule": {
    "type": "Percentage",
    "value": 10
  },
  "validity": {
    "startDate": "",
    "endDate": ""
  }
}
```

## Atualizar

```http
PUT /api/benefits/{benefitId}
```

## Ativar

```http
PATCH /api/benefits/{benefitId}/activate
```

## Suspender

```http
PATCH /api/benefits/{benefitId}/suspend
```

## Desativar

```http
PATCH /api/benefits/{benefitId}/deactivate
```

## Validar elegibilidade

```http
GET /api/benefits/{benefitId}/eligibility
```

## Validar utilização

```http
POST /api/benefits/{benefitId}/validate-usage
```

Exemplo:

```json
{
  "employeeId": "",
  "resourceId": "",
  "date": ""
}
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

A API deve validar:

- autenticação;
- autorização;
- Tenant;
- status do Employee;
- status do Benefit;
- elegibilidade.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

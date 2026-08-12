---
document: EMPLOYEES_API
title: Employees Module API
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard
module: Employees

purpose:
  Definir os contratos de API do módulo Employees.

depends_on:
  - README
  - RULES
  - ENTITIES
---

# Employees API

## Base Route

```text
/api/employees
```

Rotas administrativas podem utilizar:

```text
/api/companies/{companyId}/employees
```

## Listar

```http
GET /api/companies/{companyId}/employees
```

Permissão:

```text
employee.read
```

## Buscar

```http
GET /api/employees/{employeeId}
```

A API deve validar o Tenant.

## Criar

```http
POST /api/companies/{companyId}/employees
```

Exemplo:

```json
{
  "name": "",
  "email": "",
  "phone": "",
  "department": "",
  "position": ""
}
```

## Atualizar

```http
PUT /api/employees/{employeeId}
```

## Atualizar perfil próprio

```http
PUT /api/employees/me/profile
```

## Ativar

```http
PATCH /api/employees/{employeeId}/activate
```

## Suspender

```http
PATCH /api/employees/{employeeId}/suspend
```

## Desativar

```http
PATCH /api/employees/{employeeId}/deactivate
```

## Reenviar convite

```http
POST /api/employees/{employeeId}/invite
```

## Consultar perfil próprio

```http
GET /api/employees/me
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

Todas as operações devem validar:

- autenticação;
- autorização;
- Tenant;
- status do Employee.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

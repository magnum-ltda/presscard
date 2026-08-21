---
document: BACKEND_API
title: Backend API Standards
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Backend
purpose: Padronizar APIs HTTP da Presscard.
audience:
- AI
- Developer
depends_on:
- 06_backend/ARCHITECTURE.md
- 04_modules/security/README.md
related_documents:
- 06_backend/ERROR_HANDLING.md
---

# Backend API

## Princípios

- APIs devem possuir contratos claros.
- Endpoints devem utilizar verbos HTTP adequados.
- Validação deve ocorrer no backend.
- Respostas devem possuir estrutura consistente.
- Paginação deve ser padronizada.
- Endpoints protegidos exigem autenticação e autorização.

## Estrutura conceitual

```http
GET    /api/{resource}
GET    /api/{resource}/{id}
POST   /api/{resource}
PUT    /api/{resource}/{id}
PATCH  /api/{resource}/{id}
DELETE /api/{resource}/{id}
```

## Resposta de sucesso

```json
{
  "success": true,
  "data": {}
}
```

## Paginação

Quando aplicável:

```json
{
  "items": [],
  "page": 1,
  "pageSize": 20,
  "total": 100
}
```

## Segurança

A API deve validar:

- identidade;
- permission;
- Tenant;
- regras de negócio.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

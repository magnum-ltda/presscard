---
document: BACKEND_ERROR_HANDLING
title: Backend Error Handling
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Backend
purpose: Padronizar erros e exceções da API.
audience:
- AI
- Developer
depends_on:
- 06_backend/API.md
- 04_modules/security/README.md
related_documents:
- 06_backend/LOGGING.md
---

# Error Handling

## Categorias

- Validation;
- Authentication;
- Authorization;
- Not Found;
- Conflict;
- Business Rule;
- External Integration;
- Unexpected.

## Fluxo

```mermaid
flowchart LR
A[Exception/Error] --> B[Middleware]
B --> C[Map Error]
C --> D[HTTP Response]
D --> E[Safe Message]
```

## Regras

- Não expor stack trace em produção.
- Não expor secrets.
- Erros de negócio devem possuir código identificável.
- Erros externos devem ser mapeados.
- Erros inesperados devem ser registrados.
- Respostas devem ser consistentes.

## Exemplo

```json
{
  "success": false,
  "error": {
    "code": "BUSINESS_RULE",
    "message": "Operation cannot be completed."
  }
}
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

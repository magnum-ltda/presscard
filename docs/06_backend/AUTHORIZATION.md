---
document: BACKEND_AUTHORIZATION
title: Backend Authorization
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Backend
purpose: Definir autenticação, autorização e isolamento de Tenant no backend.
audience:
- AI
- Developer
depends_on:
- 04_modules/security/README.md
- 04_modules/administration/README.md
related_documents:
- 06_backend/API.md
---

# Backend Authorization

## Princípios

- Backend é a autoridade final.
- Toda operação protegida valida autenticação.
- Permissions devem ser verificadas no backend.
- Tenant deve ser obtido do contexto autenticado quando possível.
- Nunca confiar em TenantId enviado pelo cliente.
- Menor privilégio deve ser aplicado.

## Fluxo

```mermaid
flowchart LR
A[Request] --> B[Authentication]
B --> C[Principal]
C --> D[Authorization]
D --> E[Tenant Context]
E --> F[Use Case]
```

## Falhas

- Não autenticado → 401.
- Autenticado sem permissão → 403.
- Recurso fora do escopo → não permitir acesso.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

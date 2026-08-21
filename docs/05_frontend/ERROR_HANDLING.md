---
document: FRONTEND_ERROR_HANDLING
title: Frontend Error Handling
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Frontend
purpose: Padronizar tratamento de erros no Angular.
audience:
- AI
- Developer
depends_on:
- 05_frontend/API_CLIENT.md
- 04_modules/security/README.md
related_documents:
- 05_frontend/AUTHENTICATION.md
---

# Error Handling

## Categorias

- validação;
- autenticação;
- autorização;
- recurso não encontrado;
- conflito;
- erro de negócio;
- erro inesperado;
- indisponibilidade de serviço.

## Fluxo

```mermaid
flowchart LR
A[HTTP Error] --> B[Interceptor/Client]
B --> C[Map Error]
C --> D{Type}
D -->|Validation| E[Form Feedback]
D -->|Unauthorized| F[Login]
D -->|Forbidden| G[Access Denied]
D -->|Business| H[User Message]
D -->|Unexpected| I[Generic Error]
```

## Regras

- Não mostrar stack trace ao usuário.
- Não expor detalhes internos.
- Mensagens técnicas devem ser registradas de forma segura.
- Erros de negócio devem ser apresentados de maneira compreensível.
- A aplicação deve evitar perder o contexto da operação após um erro.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

---
document: FRONTEND_STATE
title: Frontend State Management
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Frontend
purpose: Definir regras para gerenciamento de estado no frontend Angular.
audience:
- AI
- Developer
depends_on:
- 05_frontend/ARCHITECTURE.md
related_documents:
- 05_frontend/API_CLIENT.md
---

# State Management

## Princípio

Não transformar todo dado em estado global.

## Tipos

### Local state

Usado quando o estado pertence a um componente ou fluxo curto.

### Feature state

Usado quando vários componentes da mesma feature compartilham estado.

### Global state

Usado somente para informações realmente transversais, como:

- autenticação;
- usuário atual;
- configurações globais;
- contexto da aplicação.

## Regras

- Preferir estado simples quando suficiente.
- Evitar duplicação da mesma fonte de verdade.
- Estados assíncronos devem representar loading, success e error.
- Limpar estado quando o contexto da feature deixar de ser válido.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

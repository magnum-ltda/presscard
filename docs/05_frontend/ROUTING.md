---
document: FRONTEND_ROUTING
title: Frontend Routing
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Frontend
purpose: Definir regras de navegação e proteção de rotas.
audience:
- AI
- Developer
depends_on:
- 05_frontend/AUTHENTICATION.md
- 05_frontend/ARCHITECTURE.md
related_documents:
- 04_modules/security/README.md
---

# Routing

## Princípios

- Rotas públicas devem ser explicitamente identificadas.
- Rotas autenticadas devem exigir usuário autenticado.
- Rotas administrativas devem exigir permission adequada.
- Lazy loading deve ser utilizado quando fizer sentido.
- Guards melhoram a experiência, mas não substituem autorização no backend.

## Estrutura conceitual

```text
/
├── login
├── home
├── catalog
├── benefits
├── bookings
├── profile
└── admin
    ├── employees
    ├── partners
    ├── reports
    └── settings
```

## Fluxo

```mermaid
flowchart LR
A[Route] --> B{Public?}
B -->|Sim| C[Load]
B -->|Não| D[Authentication Guard]
D --> E{Authorized?}
E -->|Sim| F[Permission Guard]
F --> G[Load Feature]
E -->|Não| H[Access Denied]
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

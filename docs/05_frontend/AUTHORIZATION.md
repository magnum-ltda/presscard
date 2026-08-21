---
document: FRONTEND_AUTHORIZATION
title: Frontend Authorization
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Frontend
module: Frontend
purpose: Definir autorização e visibilidade de funcionalidades no frontend.
audience:
- AI
- Developer
depends_on:
- 05_frontend/AUTHENTICATION.md
- 04_modules/security/README.md
- 04_modules/administration/README.md
related_documents:
- 05_frontend/ROUTING.md
---

# Authorization

## Princípios

- Permission deve ser representada por código estável.
- Componentes podem ocultar ações sem permissão.
- Guards podem impedir navegação.
- O backend deve sempre repetir a autorização.
- Nunca considerar uma ação escondida como protegida.

## Exemplos

```text
employees.read
employees.write
benefits.read
benefits.write
reports.read
settings.write
audit.read
```

## Fluxo

```mermaid
flowchart LR
A[User] --> B[Load Permissions] --> C[Route/UI]
C --> D{Has Permission?}
D -->|Sim| E[Show/Allow]
D -->|Não| F[Hide/Block]
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

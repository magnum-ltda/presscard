---
document: REPORTS_MODULE
title: Relatórios e Dashboard Module
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Reports
purpose: Definir o módulo de relatórios e dashboard da Presscard.
audience:
  - AI
  - Developer
  - Product Owner
depends_on:
  - EMPLOYEES
  - COMPANIES
  - BOOKING
  - PAYMENTS
  - COMMISSIONS
related_documents:
  - RULES
  - ENTITIES
  - FLOW
  - API
  - SERVICES
  - TODO
---

# Flows

```mermaid
flowchart LR
A[User] --> B[Dashboard/Report] --> C[Authorize] --> D[Apply Tenant] --> E[Query] --> F[Result]
```

```mermaid
flowchart LR
A[Report] --> B[Export] --> C[Generate File] --> D[Store] --> E[Download]
```

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

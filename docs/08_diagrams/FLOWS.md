---
document: DIAGRAM_FLOWS
title: Presscard Business Flows
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Diagrams
purpose: Centralizar os principais fluxos de negócio.
audience:
- AI
- Developer
depends_on:
- 03_business/BUSINESS_RULES.md
- 04_modules/README.md
related_documents:
- 08_diagrams/README.md
---

# Business Flows

## Benefício → Reserva → Pagamento

```mermaid
flowchart LR
A[Employee] --> B[Catalog]
B --> C[Benefit]
C --> D[Booking]
D --> E{Payment Required?}
E -->|Yes| F[Payment]
F --> G[Confirmation]
E -->|No| G
```

## Reserva

```mermaid
stateDiagram-v2
[*] --> Created
Created --> Confirmed
Created --> Cancelled
Confirmed --> Completed
Confirmed --> Cancelled
Cancelled --> [*]
Completed --> [*]
```

## Notificação

```mermaid
flowchart LR
A[Business Event] --> B[Notification Service]
B --> C[Channel]
C --> D[Employee]
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

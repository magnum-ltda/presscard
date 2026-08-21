---
document: DIAGRAM_INTEGRATIONS
title: Presscard Integration Diagram
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Diagrams
purpose: Representar a arquitetura de integração com fornecedores externos.
audience:
- AI
- Developer
depends_on:
- 04_modules/integrations/README.md
related_documents:
- 08_diagrams/README.md
---

# Integrations

```mermaid
flowchart LR
APP[Presscard]
REG[Provider Registry]
AD[Adapter Layer]

APP --> REG
REG --> AD

AD --> BOOK[Booking Provider]
AD --> PAY[Payment Provider]
AD --> MAP[Maps Provider]
AD --> NOT[Notification Provider]
```

## Webhook

```mermaid
flowchart LR
P[External Provider] --> W[Webhook Endpoint]
W --> V[Validate]
V --> I[Idempotency]
I --> H[Handler]
H --> D[Domain]
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

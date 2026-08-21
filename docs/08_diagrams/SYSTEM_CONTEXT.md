---
document: DIAGRAM_SYSTEM_CONTEXT
title: System Context Diagram
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Diagrams
purpose: Representar a Presscard no contexto de usuários, empresas e serviços externos.
audience:
- AI
- Developer
depends_on:
- 02_architecture/ARCHITECTURE.md
related_documents:
- 08_diagrams/README.md
---

# System Context

```mermaid
flowchart TB
U[Employee / User]
A[Company Administrator]
P[Platform Administrator]
PC[Presscard Platform]

U --> PC
A --> PC
P --> PC

PC --> ID[Identity Provider]
PC --> EXT[External Providers]
PC --> MSG[Notification Providers]
PC --> PAY[Payment Providers]
PC --> MAP[Maps Providers]
```

## Regra

O diagrama representa somente relações de alto nível. Detalhes de implementação devem permanecer nos diagramas específicos.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

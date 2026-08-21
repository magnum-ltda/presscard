---
document: DIAGRAM_ARCHITECTURE
title: Presscard Architecture Diagram
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Diagrams
purpose: Representar as principais camadas da plataforma.
audience:
- AI
- Developer
depends_on:
- 02_architecture/ARCHITECTURE.md
- 05_frontend/README.md
- 06_backend/README.md
- 07_database/README.md
related_documents:
- 08_diagrams/README.md
---

# Architecture

```mermaid
flowchart TB
FE[Angular Frontend]
API[Firebase Services API]
APP[Application Layer]
DOM[Domain Layer]
INF[Infrastructure]
DB[(Cloud Firestore)]
EXT[External Providers]

FE --> API
API --> APP
APP --> DOM
APP --> INF
INF --> DB
INF --> EXT
```

## Dependência

As dependências devem apontar para camadas internas sem permitir que o domínio dependa da infraestrutura.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

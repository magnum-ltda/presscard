---
document: DIAGRAM_DEPLOYMENT
title: Presscard Deployment Diagram
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Diagrams
purpose: Representar os principais componentes de execução e publicação da plataforma.
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

# Deployment

```mermaid
flowchart TB
USER[Browser]
HOST[Frontend Hosting]
API[Backend Hosting]
DB[(Cloud Firestore)]
ID[Identity Provider]
EXT[External Services]

USER --> HOST
HOST --> API
API --> DB
USER --> ID
API --> ID
API --> EXT
```

## Regra

Os detalhes de infraestrutura devem ser atualizados quando houver mudança real de ambiente, hosting ou banco.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

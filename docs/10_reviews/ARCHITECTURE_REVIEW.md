---
document: REVIEW_ARCHITECTURE
title: Architecture Review
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Reviews
purpose: Padronizar revisão do impacto arquitetural.
audience:
- AI
- Developer
depends_on:
- 02_architecture/ARCHITECTURE.md
- 08_diagrams/README.md
related_documents:
- 10_reviews/README.md
---

# Architecture Review

## Verificar

- A alteração respeita as camadas?
- Novas dependências apontam na direção correta?
- Existe acoplamento desnecessário?
- Algum módulo passou a conhecer detalhes internos de outro?
- Há mudança de contrato?
- Há impacto em frontend, backend, database ou integrações?
- Os diagramas continuam corretos?
- A mudança exige uma decisão arquitetural registrada?

## Fluxo

```mermaid
flowchart LR
A[Change] --> B[Identify Layers]
B --> C[Identify Dependencies]
C --> D[Check Coupling]
D --> E[Check Diagrams]
E --> F{Architectural Decision?}
F -->|Yes| G[Record Decision]
F -->|No| H[Approve]
```

## Resultado

Classificar como:

- Approved;
- Approved with observations;
- Changes requested.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

---
document: ARCHITECTURE_DECISIONS
title: Architecture Decision Guidance
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Decisions
purpose: Definir quais decisões arquiteturais devem ser registradas.
audience:
- AI
- Developer
depends_on:
- 02_architecture/ARCHITECTURE.md
- 08_diagrams/README.md
related_documents:
- 11_decisions/README.md
- 11_decisions/DECISION_TEMPLATE.md
---

# Architecture Decision Guidance

## Registrar

- mudança de arquitetura em camadas;
- adoção ou remoção de tecnologia estrutural;
- estratégia de multi-tenant;
- estratégia de autenticação;
- estratégia de persistência;
- integração com fornecedor estratégico;
- mudança importante de deployment;
- decisão que altere contratos entre módulos.

## Não registrar automaticamente

- renomeação local;
- refatoração sem mudança arquitetural;
- correção simples de bug;
- alteração visual sem impacto estrutural.

## Impacto

Uma decisão arquitetural deve considerar:

```text
Frontend
Backend
Database
Integrations
Security
Performance
Operations
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

---
document: PROMPT_ARCHITECTURE
title: Architecture Analysis Prompt
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Prompts
purpose: Padronizar análise de impacto arquitetural.
audience:
- AI
- Developer
depends_on:
- 02_architecture/ARCHITECTURE.md
- 08_diagrams/README.md
related_documents:
- 09_prompts/README.md
---

# Architecture Prompt

```text
Analise o impacto arquitetural da alteração proposta na Presscard.

Verifique:

1. Camadas afetadas.
2. Módulos afetados.
3. Dependências novas.
4. Dependências removidas.
5. Possível acoplamento.
6. Impacto no frontend.
7. Impacto no backend.
8. Impacto no banco.
9. Integrações.
10. Segurança.
11. Observabilidade.
12. Testes.

Compare a proposta com docs/02_architecture e os diagramas oficiais.

Não proponha uma nova arquitetura sem justificar o problema que ela resolve.
Se a mudança representar uma decisão arquitetural, sinalize a necessidade de registro em 11_decisions.
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

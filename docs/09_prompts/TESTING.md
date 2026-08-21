---
document: PROMPT_TESTING
title: Testing Prompt
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Prompts
purpose: Padronizar criação e execução de testes.
audience:
- AI
- Developer
depends_on:
- 04_modules/quality/README.md
related_documents:
- 09_prompts/README.md
---

# Testing Prompt

```text
Analise a funcionalidade da Presscard e defina os testes necessários.

Considere:

1. Happy path.
2. Validações.
3. Regras de negócio.
4. Erros.
5. Autorização.
6. Isolamento de Tenant.
7. Concorrência.
8. Idempotência.
9. Integrações externas.
10. Regressão.

Escolha o nível adequado:

- unit;
- integration;
- API;
- E2E;
- security.

Não crie testes artificiais apenas para aumentar cobertura.

Cada teste deve proteger um comportamento relevante.
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

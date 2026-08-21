---
document: PROMPT_DEBUGGING
title: Debugging Prompt
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Prompts
purpose: Padronizar investigação e correção de defeitos.
audience:
- AI
- Developer
depends_on:
- 02_architecture/ARCHITECTURE.md
- 04_modules/quality/README.md
related_documents:
- 09_prompts/README.md
---

# Debugging Prompt

```text
Investigue o problema antes de propor a correção.

1. Reproduza ou descreva precisamente o comportamento.
2. Identifique o primeiro ponto onde o comportamento diverge do esperado.
3. Verifique frontend, API, application, domain, infrastructure e database conforme aplicável.
4. Procure a causa raiz.
5. Não corrija apenas o sintoma.
6. Verifique efeitos colaterais.
7. Crie ou atualize teste de regressão quando aplicável.
8. Execute os testes relevantes.
9. Informe a causa encontrada.
10. Informe a correção e os arquivos alterados.

Não invente evidências.
Se não for possível confirmar a causa, deixe isso explícito.
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

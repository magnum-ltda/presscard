---
document: PROMPT_DOCUMENTATION
title: Documentation Prompt
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Prompts
purpose: Padronizar atualização da documentação do projeto.
audience:
- AI
- Developer
depends_on:
- 00_ai-os/AI_OPERATING_SYSTEM.md
- 01_project/PROJECT.md
related_documents:
- 09_prompts/README.md
---

# Documentation Prompt

```text
Atualize a documentação da Presscard com base somente no comportamento e nas decisões confirmadas.

1. Identifique o documento correto.
2. Preserve a estrutura e terminologia existentes.
3. Não apague informações válidas sem motivo.
4. Não invente regras.
5. Atualize version/status quando a convenção do documento exigir.
6. Atualize dependências e documentos relacionados quando necessário.
7. Atualize TODO quando uma tarefa for concluída.
8. Se houver mudança arquitetural, considere registrar também em 11_decisions.
9. Verifique consistência com documentos relacionados.

Ao finalizar, liste os documentos alterados.
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

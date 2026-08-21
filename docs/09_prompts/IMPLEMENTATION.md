---
document: PROMPT_IMPLEMENTATION
title: Implementation Prompt
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Prompts
purpose: Padronizar execução de novas funcionalidades.
audience:
- AI
- Developer
depends_on:
- 00_ai-os/AI_OPERATING_SYSTEM.md
- 02_architecture/ARCHITECTURE.md
- 03_business/BUSINESS_RULES.md
- 04_modules/README.md
related_documents:
- 09_prompts/README.md
---

# Implementation Prompt

## Prompt oficial

```text
Você está implementando uma funcionalidade no projeto Presscard.

Antes de alterar código:

1. Identifique o módulo afetado.
2. Consulte a documentação correspondente em docs/.
3. Consulte arquitetura, regras de negócio e segurança relevantes.
4. Identifique dependências.
5. Não invente regras que não estejam documentadas.
6. Se existir ambiguidade que altere comportamento, sinalize antes de implementar.

Durante a implementação:

1. Respeite a arquitetura existente.
2. Mantenha separação entre frontend, backend, domínio e infraestrutura.
3. Não duplique regras.
4. Preserve compatibilidade quando necessário.
5. Adicione ou atualize testes.
6. Atualize documentação quando a implementação alterar comportamento ou arquitetura.

Ao finalizar:

1. Liste os arquivos alterados.
2. Explique o que foi implementado.
3. Informe os testes executados.
4. Informe falhas ou pontos pendentes.
5. Não marque como concluído algo que não foi validado.
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

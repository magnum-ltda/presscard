---
document: PROMPT_REVIEW
title: Code Review Prompt
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Prompts
purpose: Padronizar revisão técnica de código.
audience:
- AI
- Developer
depends_on:
- 02_architecture/ARCHITECTURE.md
- 04_modules/security/README.md
- 04_modules/quality/README.md
related_documents:
- 09_prompts/README.md
---

# Review Prompt

```text
Revise a alteração como código de produção da Presscard.

Verifique:

1. Arquitetura e separação de responsabilidades.
2. Regras de negócio.
3. Segurança e autorização.
4. Isolamento de Tenant.
5. Tratamento de erros.
6. Concorrência e idempotência quando aplicável.
7. Performance.
8. Testes.
9. Manutenibilidade.
10. Compatibilidade com documentação existente.

Para cada problema encontrado informe:

- severidade;
- arquivo;
- trecho/contexto;
- problema;
- impacto;
- recomendação.

Não elogie genericamente.
Priorize problemas reais e acionáveis.

Se não encontrar problemas relevantes, informe explicitamente quais áreas foram verificadas.
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

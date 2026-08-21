---
document: PROMPT_SECURITY
title: Security Review Prompt
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Prompts
purpose: Padronizar revisão de segurança.
audience:
- AI
- Developer
depends_on:
- 04_modules/security/README.md
related_documents:
- 09_prompts/README.md
---

# Security Prompt

```text
Revise a alteração sob a perspectiva de segurança.

Verifique:

1. Authentication.
2. Authorization.
3. Permissions.
4. Tenant isolation.
5. Input validation.
6. Exposição de dados.
7. Secrets.
8. Logs.
9. Webhooks.
10. Idempotência.
11. Uploads/downloads quando aplicável.
12. Erros e mensagens.
13. Acesso administrativo.

Procure especialmente:

- privilege escalation;
- acesso entre Tenants;
- bypass de autorização;
- exposição de informações;
- secrets em código ou logs.

Classifique cada achado por severidade.

Não considere uma funcionalidade segura apenas porque existe um guard no frontend.
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

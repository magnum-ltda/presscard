---
document: INTEGRATIONS_MODULE
title: Integrações Module
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Integrations
purpose: Definir o módulo de integrações da Presscard.
audience:
- AI
- Developer
- Product Owner
depends_on:
- 04_modules/booking/README.md
- 03_business/PAYMENTS.md
- 04_modules/notifications/README.md
- 04_modules/security/README.md
related_documents:
- 04_modules/integrations/RULES.md
- 04_modules/integrations/ENTITIES.md
- 04_modules/integrations/FLOW.md
- 04_modules/integrations/API.md
- 04_modules/integrations/SERVICES.md
- 04_modules/integrations/TODO.md
---

# Rules

- Domínio não depende diretamente de SDK externo.
- Fornecedor relevante possui adapter.
- Contratos internos permanecem estáveis.
- Credenciais ficam fora do código.
- Erros externos são mapeados.
- Retry somente para falhas temporárias.
- Operações críticas usam idempotência quando necessária.
- Webhooks validam autenticidade, payload e duplicidade.
- Integrações possuem timeout.
- Logs não contêm secrets.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

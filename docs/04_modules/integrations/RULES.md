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
  - BOOKING
  - PAYMENTS
  - NOTIFICATIONS
  - SECURITY
related_documents:
  - RULES
  - ENTITIES
  - FLOW
  - API
  - SERVICES
  - TODO
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

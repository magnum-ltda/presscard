---
document: BACKEND_LOGGING
title: Backend Logging and Observability
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Backend
purpose: Definir logging, correlation e observabilidade do backend.
audience:
- AI
- Developer
depends_on:
- 06_backend/ERROR_HANDLING.md
- 04_modules/security/README.md
related_documents:
- 04_modules/integrations/README.md
---

# Logging and Observability

## Princípios

- Logs devem ser estruturados.
- Cada operação relevante deve possuir CorrelationId.
- Não registrar tokens, senhas ou secrets.
- Dados pessoais devem ser minimizados.
- Logs devem permitir diagnosticar falhas sem expor informações desnecessárias.

## Níveis

- Trace/Debug;
- Information;
- Warning;
- Error;
- Critical.

## Correlation

```text
Request
 ↓
CorrelationId
 ↓
Application
 ↓
Database / Integration
 ↓
Logs
```

## Métricas

Quando aplicável:

- duração de requests;
- erros;
- latência;
- falhas de integração;
- operações críticas.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

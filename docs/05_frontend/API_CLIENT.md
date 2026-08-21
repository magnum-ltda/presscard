---
document: FRONTEND_API_CLIENT
title: Frontend API Client
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Frontend
purpose: Padronizar comunicação do Angular com as APIs do backend.
audience:
- AI
- Developer
depends_on:
- 02_architecture/ARCHITECTURE.md
- 06_backend/README.md
related_documents:
- 05_frontend/ERROR_HANDLING.md
- 05_frontend/AUTHENTICATION.md
---

# API Client

## Princípios

- Centralizar configuração HTTP.
- Utilizar services/clients por contexto funcional.
- Não espalhar URLs diretamente em componentes.
- Padronizar tratamento de respostas e erros.
- Utilizar interceptors para preocupações transversais.

## Estrutura

```text
HttpClient
   ↓
Interceptor
   ↓
Feature API Client
   ↓
Backend API
```

## Interceptors

Possíveis responsabilidades:

- autenticação;
- correlation ID;
- tratamento de erros;
- loading global, quando necessário.

## Exemplo conceitual

```text
EmployeesApi
BenefitsApi
BookingsApi
PaymentsApi
ReportsApi
AdministrationApi
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

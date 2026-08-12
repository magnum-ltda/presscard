---
document: REPORTS_MODULE
title: Relatórios e Dashboard Module
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Reports
purpose: Definir o módulo de relatórios e dashboard da Presscard.
audience:
  - AI
  - Developer
  - Product Owner
depends_on:
  - EMPLOYEES
  - COMPANIES
  - BOOKING
  - PAYMENTS
  - COMMISSIONS
related_documents:
  - RULES
  - ENTITIES
  - FLOW
  - API
  - SERVICES
  - TODO
---

# API

Base routes: `/api/reports` e `/api/dashboards`.

```http
GET /api/reports
GET /api/reports/{reportId}
POST /api/reports/{reportId}/execute
POST /api/reports/{reportId}/export
GET /api/reports/exports/{exportId}
GET /api/dashboards
GET /api/dashboards/{dashboardId}
```

Todas validam autenticação, permission e Tenant.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

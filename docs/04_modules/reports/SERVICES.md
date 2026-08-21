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
- 04_modules/employees/README.md
- 04_modules/companies/README.md
- 04_modules/booking/README.md
- 03_business/PAYMENTS.md
- 03_business/COMMISSIONS.md
related_documents:
- 04_modules/reports/RULES.md
- 04_modules/reports/ENTITIES.md
- 04_modules/reports/FLOW.md
- 04_modules/reports/API.md
- 04_modules/reports/SERVICES.md
- 04_modules/reports/TODO.md
---

# Services

## ReportService
`get()`, `list()`, `execute()`

## DashboardService
`get()`, `list()`, `loadWidgets()`

## ReportQueryService
Executa consultas analíticas.

## ExportService
`create()`, `process()`, `get()`

## MetricsService
Centraliza indicadores reutilizáveis.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

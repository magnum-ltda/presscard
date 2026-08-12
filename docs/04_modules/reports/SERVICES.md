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

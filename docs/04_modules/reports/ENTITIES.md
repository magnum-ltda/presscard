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

# Entities

## ReportDefinition
- Id, Name, Description, Type, Scope, Status

## ReportExecution
- Id, ReportId, RequestedBy, Status, StartedAt, CompletedAt

## Dashboard
- Id, Name, Scope, Status

## DashboardWidget
- Id, DashboardId, Type, QueryKey, Position, Configuration

## ReportExport
- Id, ReportExecutionId, Format, Status, FileReference

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

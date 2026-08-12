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

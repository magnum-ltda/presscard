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

# Rules

- Todo relatório respeita Tenant e Permissions.
- Indicadores financeiros usam fontes oficiais de Payment e Commission.
- Indicadores de Booking usam o estado oficial de Booking.
- Consultas analíticas não alteram dados transacionais.
- Exportações respeitam as mesmas permissões da consulta.
- Dados pessoais devem ser minimizados.
- Relatórios pesados podem ser processados assincronamente.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

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

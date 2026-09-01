---
document: FRONTEND_TODO
title: Frontend Implementation Backlog
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Frontend
purpose: Registrar atividades necessárias para implementação e padronização do frontend.
audience:
- AI
- Developer
depends_on:
- 05_frontend/README.md
---

# Frontend Backlog

## FE-EPIC-01 — Arquitetura
- ☐ FE-TASK-001 Estruturar Core.
- ☐ FE-TASK-002 Estruturar Shared.
- ☐ FE-TASK-003 Estruturar Features.
- ☐ FE-TASK-004 Revisar dependências entre features.

## FE-EPIC-02 — Autenticação
- ☐ FE-TASK-005 AuthService.
- ☐ FE-TASK-006 Estado de autenticação.
- ☐ FE-TASK-007 Guards.
- ☐ FE-TASK-008 Logout/expiração.

## FE-EPIC-03 — Autorização
- ☐ FE-TASK-009 Permission service.
- ☐ FE-TASK-010 Permission guard.
- ☐ FE-TASK-011 Diretiva de permission.
- ☐ FE-TASK-012 Revisar proteção das áreas administrativas.

## FE-EPIC-04 — API
- ☐ FE-TASK-013 Configurar API client.
- ☐ FE-TASK-014 Interceptor de autenticação.
- ☐ FE-TASK-015 Tratamento global de erros.
- ☐ FE-TASK-016 Correlation ID quando aplicável.

## FE-EPIC-05 — Estado
- ☐ FE-TASK-017 Definir estratégia de estado.
- ☐ FE-TASK-018 Estado global.
- ☐ FE-TASK-019 Estado por feature.

## FE-EPIC-06 — UI
- ☐ FE-TASK-020 Padronizar Angular Material.
- ☐ FE-TASK-021 Componentes compartilhados.
- ☐ FE-TASK-022 Forms.
- ☐ FE-TASK-023 Loading/empty/error states.
- ☐ FE-TASK-024 Acessibilidade.

## FE-EPIC-07 — Qualidade
- ☐ FE-TASK-025 Unit tests.
- ☐ FE-TASK-026 Component tests.
- ☐ FE-TASK-027 Routing tests.
- ☐ FE-TASK-028 API/client tests.

## FE-EPIC-08 — Separação de arquivos de componentes

Objetivo: eliminar templates e estilos inline, adotando o padrão obrigatório `.ts` + `.html` + `.scss` para todos os componentes.

### Inventário auditado em 31/08/2026

- 29 componentes identificados em `src/app`.
- 12 já atendem ao padrão de arquivos separados.
- 17 não atendem ao padrão: 16 possuem template e estilo inline; `currency-percentage-input` possui apenas o template inline.

### FE-TASK-029 — Preparar a migração por componente

Para cada componente abaixo, extrair o conteúdo de `template` para o arquivo `.html`, o conteúdo de `styles` para o arquivo `.scss`, substituir as propriedades inline por `templateUrl` e `styleUrl` (ou `styleUrls`) e preservar a lógica TypeScript.

- ☑ `src/app/app.component.ts`
- ☑ `src/app/admin/admin-layout.component.ts`
- ☑ `src/app/admin/benefits/benefits-mgmt.component.ts`
- ☑ `src/app/admin/companies/companies.component.ts`
- ☑ `src/app/admin/dashboard/dashboard.component.ts`
- ☑ `src/app/admin/employees/employees.component.ts`
- ☑ `src/app/admin/partners/partners.component.ts`
- ☑ `src/app/core/auth/login.component.ts`
- ☑ `src/app/features/company/company-layout/company-layout.component.ts`
- ☑ `src/app/features/company/employees/employees-mgmt.component.ts`
- ☑ `src/app/features/partner/history/history.component.ts`
- ☑ `src/app/features/partner/partner-layout/partner-layout.component.ts`
- ☑ `src/app/features/partner/validator/validator.component.ts`
- ☑ `src/app/shared/components/confirm-modal/confirm-modal.component.ts`
- ☑ `src/app/shared/components/currency-percentage-input/currency-percentage-input.component.ts` — criado o template externo; o SCSS já existia.
- ☑ `src/app/shared/components/skeleton-table/skeleton-table.component.ts`
- ☑ `src/app/shared/components/spinner/spinner.component.ts`

### FE-TASK-030 — Padronizar extensões de estilo legadas

- ☑ Converter `src/app/features/employee/my-coupons/my-coupons.component.css` para `.scss` e ajustar a referência.
- ☑ Converter `src/app/features/offers/offer-detail/offer-detail.component.css` para `.scss` e ajustar a referência.

### FE-TASK-031 — Verificação e prevenção de regressão

- ☑ Executar build de produção após a migração, confirmando que templates e estilos foram preservados. Executado em 01/09/2026.
- ☑ Verificar que nenhum `*.component.ts` contém `template:` ou `styles:` inline.
- ☐ Revisar visualmente as telas afetadas, com atenção a layouts responsivos, modais e componentes compartilhados.
- ☐ Avaliar a inclusão de uma checagem automatizada no CI para impedir novos templates ou estilos inline.

## Critério de conclusão

Código implementado, testes realizados, documentação atualizada, regras validadas e integração com backend validada.

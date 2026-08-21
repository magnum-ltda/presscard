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

## Critério de conclusão

Código implementado, testes realizados, documentação atualizada, regras validadas e integração com backend validada.

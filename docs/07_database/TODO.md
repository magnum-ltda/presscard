---
document: DATABASE_TODO
title: Database Implementation Backlog
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Database
purpose: Registrar atividades de banco de dados.
audience:
- AI
- Developer
depends_on:
- 07_database/README.md
---

# Database Backlog

## DB-EPIC-01 — Modelagem
- ☐ DB-TASK-001 Definir entidades persistidas.
- ☐ DB-TASK-002 Definir PKs.
- ☐ DB-TASK-003 Definir FKs.
- ☐ DB-TASK-004 Padronizar nomes.
- ☐ DB-TASK-005 Revisar tipos.

## DB-EPIC-02 — Multi-Tenant
- ☐ DB-TASK-006 Mapear entidades tenant-scoped.
- ☐ DB-TASK-007 Validar Company/Tenant relationships.
- ☐ DB-TASK-008 Criar testes de isolamento.
- ☐ DB-TASK-009 Revisar índices tenant-scoped.

## DB-EPIC-03 — Integridade
- ☐ DB-TASK-010 PKs.
- ☐ DB-TASK-011 FKs.
- ☐ DB-TASK-012 Unique constraints.
- ☐ DB-TASK-013 Check constraints quando aplicável.
- ☐ DB-TASK-014 NOT NULL.

## DB-EPIC-04 — Migrations
- ☐ DB-TASK-015 Configurar migrations.
- ☐ DB-TASK-016 Revisar migrations.
- ☐ DB-TASK-017 Estratégia para alterações destrutivas.
- ☐ DB-TASK-018 Procedimentos de recuperação.

## DB-EPIC-05 — Performance
- ☐ DB-TASK-019 Mapear consultas críticas.
- ☐ DB-TASK-020 Criar índices.
- ☐ DB-TASK-021 Avaliar planos de execução.
- ☐ DB-TASK-022 Monitorar consultas lentas.
- ☐ DB-TASK-023 Revisar paginação.

## DB-EPIC-06 — Segurança
- ☐ DB-TASK-024 Revisar acesso ao banco.
- ☐ DB-TASK-025 Revisar secrets.
- ☐ DB-TASK-026 Minimizar exposição de dados.
- ☐ DB-TASK-027 Revisar permissões.

## DB-EPIC-07 — Testes
- ☐ DB-TASK-028 Testes de integridade.
- ☐ DB-TASK-029 Testes multi-tenant.
- ☐ DB-TASK-030 Testes de migrations.
- ☐ DB-TASK-031 Testes de concorrência quando aplicável.

## Critério de conclusão

Schema definido, migrations versionadas, integridade validada, isolamento de Tenant testado, consultas críticas avaliadas e documentação atualizada.

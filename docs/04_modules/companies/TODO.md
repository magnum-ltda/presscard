---
document: COMPANIES_TODO
title: Associated Companies Module Backlog
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Companies
purpose: Manter o backlog do módulo Companies.
depends_on:
- 04_modules/companies/README.md
- 04_modules/companies/RULES.md
- 04_modules/companies/ENTITIES.md
- 04_modules/companies/FLOW.md
- 04_modules/companies/API.md
---

# Companies Backlog

## Legenda

- ☐ Não iniciado
- 🔄 Em desenvolvimento
- ☑ Concluído
- 🚫 Cancelado

## COM-EPIC-01 — Cadastro

- ☐ COM-TASK-001 Criar listagem de empresas.
- ☐ COM-TASK-002 Criar formulário de cadastro.
- ☐ COM-TASK-003 Implementar edição.
- ☐ COM-TASK-004 Implementar validação de documento.
- ☐ COM-TASK-005 Implementar ativação.
- ☐ COM-TASK-006 Implementar suspensão.
- ☐ COM-TASK-007 Implementar desativação.

## COM-EPIC-02 — Tenant

- ☐ COM-TASK-008 Criar contexto de Tenant.
- ☐ COM-TASK-009 Implementar isolamento de dados.
- ☐ COM-TASK-010 Validar autorização por Tenant.
- ☐ COM-TASK-011 Testar acesso cruzado entre Tenants.

## COM-EPIC-03 — Administradores

- ☐ COM-TASK-012 Listar Company Administrators.
- ☐ COM-TASK-013 Adicionar administrador.
- ☐ COM-TASK-014 Remover administrador.
- ☐ COM-TASK-015 Impedir remoção do último administrador.

## COM-EPIC-04 — Configurações

- ☐ COM-TASK-016 Criar configurações da empresa.
- ☐ COM-TASK-017 Criar tela de configurações.
- ☐ COM-TASK-018 Implementar persistência.

## COM-EPIC-05 — Auditoria

- ☐ COM-TASK-019 Auditar criação.
- ☐ COM-TASK-020 Auditar alterações.
- ☐ COM-TASK-021 Auditar mudanças de status.
- ☐ COM-TASK-022 Auditar alterações administrativas.

## COM-EPIC-06 — Testes

- ☐ COM-TASK-023 Testes unitários.
- ☐ COM-TASK-024 Testes de integração.
- ☐ COM-TASK-025 Testes de autorização.
- ☐ COM-TASK-026 Testes de isolamento Multi-Tenant.

## Critério de conclusão

Uma tarefa somente poderá ser concluída quando:

- código implementado;
- testes realizados;
- documentação atualizada;
- regras validadas;
- segurança validada.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

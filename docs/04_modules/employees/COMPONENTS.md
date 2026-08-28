---
document: EMPLOYEES_COMPONENTS
title: Employees Module Components
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Employees
purpose: Definir os componentes de interface do módulo Employees.
depends_on:
- 04_modules/employees/README.md
- 04_modules/employees/FLOW.md
- 04_modules/employees/API.md
---

# Employees Components

## Estrutura

```text
employees/

pages/
components/
dialogs/
services/
models/
guards/
routes/
```

## EmployeeListComponent

Responsável pela listagem de Employees.

Funcionalidades:

- pesquisa;
- filtros;
- paginação;
- ordenação;
- status;
- ações.

## EmployeeFormComponent

Cadastro e edição.

Campos principais:

- nome completo (`name`): obrigatório;
- email (`email`): validação de e-mail;
- perfil / papel (`role`): EMPLOYEE, ADMIN, COMPANY_ADMIN, PARTNER;
- status (`status`): ACTIVE, INACTIVE;
- empresa associada (`companyId`): vínculo obrigatório para roles de Employee e Company Admin;
- whatsapp / telefone (`whatsapp`): máscara `(00) 00000-0000` e validação de dígitos.

## EmployeeDetailsComponent

Exibe:

- perfil;
- status;
- empresa;
- elegibilidade;
- histórico permitido.

## EmployeeProfileComponent

Área de perfil do próprio Employee.

Permite alterar somente os campos autorizados.

## EmployeeStatusComponent

Exibe:

- convidado;
- pendente;
- ativo;
- suspenso;
- desativado.

## EmployeeInviteDialogComponent

Permite enviar ou reenviar convite.

## EmployeeEligibilityComponent

Administra critérios de elegibilidade quando utilizados.

## Shared Components

Reutilizar:

- PageHeaderComponent
- DataTableComponent / SkeletonTableComponent
- ConfirmDialogComponent / ConfirmModalComponent
- StatusBadgeComponent
- EmptyStateComponent
- LoadingComponent / SpinnerComponent

## UX

Operações críticas devem exigir confirmação.

Erros devem indicar claramente o motivo.

Informações pessoais devem ser exibidas somente quando autorizadas.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

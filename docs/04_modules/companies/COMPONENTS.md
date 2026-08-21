---
document: COMPANIES_COMPONENTS
title: Associated Companies Module Components
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Companies
purpose: Definir os componentes de interface do módulo Companies.
depends_on:
- 04_modules/companies/README.md
- 04_modules/companies/FLOW.md
- 04_modules/companies/API.md
---

# Companies Components

## Estrutura

```text
companies/

pages/
components/
dialogs/
services/
models/
guards/
routes/
```

## CompanyListComponent

Responsável pela listagem.

Funcionalidades:

- pesquisa;
- filtros;
- ordenação;
- paginação;
- status;
- ações.

## CompanyFormComponent

Cadastro e edição.

Campos principais:

- razão social;
- nome fantasia;
- documento;
- e-mail;
- telefone;
- endereço.

## CompanyDetailsComponent

Exibe:

- dados institucionais;
- status;
- administradores;
- funcionários;
- benefícios;
- histórico.

## CompanyStatusComponent

Exibe o estado atual da empresa.

## CompanyAdministratorListComponent

Lista administradores vinculados.

## CompanyAdministratorDialogComponent

Adiciona ou remove vínculo administrativo.

## CompanySettingsComponent

Gerencia configurações específicas da empresa.

## CompanyAddressComponent

Gerencia endereço institucional.

## Shared Components

Reutilizar:

- PageHeaderComponent
- DataTableComponent
- ConfirmDialogComponent
- StatusBadgeComponent
- EmptyStateComponent
- LoadingComponent
- AddressComponent

## UX

Formulários devem apresentar validação antes do envio.

Operações críticas devem exigir confirmação.

Erros devem ser apresentados de forma clara.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

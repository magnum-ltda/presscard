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
- exibição formatada do documento com máscara (`CNPJ`);
- ações.

## CompanyFormComponent

Cadastro e edição.

Campos principais:

- nome da empresa (`name`): obrigatório;
- CNPJ (`cnpj`): máscara `00.000.000/0000-00`, sanitização de dígitos ao carregar e validação de formato e comprimento (14 dígitos);
- plano (`plan`): seleção do plano associado (ex: Silver, Gold, Platinum);
- status ativo (`active`): alternância de estado operacional;
- razão social e contatos adicionais quando aplicável.

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
- DataTableComponent / SkeletonTableComponent
- ConfirmDialogComponent / ConfirmModalComponent
- StatusBadgeComponent
- EmptyStateComponent
- LoadingComponent / SpinnerComponent
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

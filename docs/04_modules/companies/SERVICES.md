---
document: COMPANIES_SERVICES
title: Associated Companies Module Services
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard
module: Companies

purpose:
  Definir os serviços do módulo Companies.

depends_on:
  - README
  - API
  - RULES
  - ENTITIES
---

# Companies Services

## Arquitetura

```text
Component
  ↓
Facade
  ↓
Service
  ↓
Repository
  ↓
Persistence
```

## CompanyService

Responsável pelas operações de Associated Company.

Métodos conceituais:

```text
create()
update()
activate()
suspend()
deactivate()
findById()
search()
validate()
```

## CompanySettingsService

Responsável por configurações do Tenant.

```text
get()
update()
reset()
```

## CompanyAdministratorService

Gerencia vínculos administrativos.

```text
list()
add()
remove()
validateLastAdministrator()
```

## CompanyStatusService

Centraliza transições de status.

```text
activate()
suspend()
deactivate()
validateTransition()
```

## CompanyValidationService

Valida dados de negócio.

```text
validateDocument()
validateRequiredFields()
validateActivation()
```

## CompanyFacade

Coordena operações utilizadas pelo frontend.

```text
loadCompany()
saveCompany()
changeStatus()
loadSettings()
loadAdministrators()
```

## Regras

- Serviços não devem conter lógica de apresentação.
- Componentes não devem implementar regras de negócio.
- Operações críticas devem gerar auditoria.
- A validação de Tenant deve ocorrer antes do acesso a dados privados.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

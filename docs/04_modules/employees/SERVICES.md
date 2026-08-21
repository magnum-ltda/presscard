---
document: EMPLOYEES_SERVICES
title: Employees Module Services
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Employees
purpose: Definir os serviços do módulo Employees.
depends_on:
- 04_modules/employees/README.md
- 04_modules/employees/API.md
- 04_modules/employees/RULES.md
- 04_modules/employees/ENTITIES.md
---

# Employees Services

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

## EmployeeService

Responsável pelas operações principais.

```text
create()
update()
activate()
suspend()
deactivate()
findById()
search()
```

## EmployeeProfileService

Gerencia perfil.

```text
getProfile()
updateProfile()
validateProfile()
```

## EmployeeInvitationService

Gerencia convites.

```text
createInvitation()
sendInvitation()
resendInvitation()
validateInvitation()
acceptInvitation()
```

## EmployeeEligibilityService

Valida elegibilidade.

```text
isEligible()
getEligibility()
setEligibility()
removeEligibility()
```

## EmployeeStatusService

Centraliza transições de status.

```text
activate()
suspend()
deactivate()
validateTransition()
```

## EmployeeFacade

Coordena operações utilizadas pelo frontend.

```text
loadEmployee()
saveEmployee()
changeStatus()
inviteEmployee()
loadProfile()
```

## AuthorizationService

Deve validar:

- Employee próprio;
- Company Administrator do mesmo Tenant;
- Platform Administrator autorizado.

## Regras

- Componentes não implementam regras de negócio.
- Serviços não dependem da interface.
- Toda alteração administrativa relevante gera AuditLog.
- O Tenant deve ser validado antes de acessar dados privados.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

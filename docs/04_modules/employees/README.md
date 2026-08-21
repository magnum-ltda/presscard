---
document: EMPLOYEES_MODULE
title: Employees Module
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Employees
purpose: Definir o módulo responsável pelo gerenciamento dos Employees da Presscard.
audience:
- AI
- Developer
- Product Owner
depends_on:
- 02_architecture/DOMAIN_MODEL.md
- 02_architecture/MULTI_TENANT.md
- 03_business/BUSINESS_RULES.md
- 04_modules/companies/README.md
related_documents:
- 04_modules/employees/RULES.md
- 04_modules/employees/ENTITIES.md
- 04_modules/employees/FLOW.md
- 04_modules/employees/API.md
- 04_modules/employees/COMPONENTS.md
- 04_modules/employees/SERVICES.md
---

# Employees

## Objetivo

O módulo Employees é responsável pelo gerenciamento dos funcionários vinculados às Associated Companies.

Um Employee é um usuário de negócio pertencente a exatamente uma Associated Company.

## Responsabilidades

- cadastrar Employees;
- ativar e desativar acesso;
- atualizar perfil;
- vincular Employee à empresa;
- controlar elegibilidade;
- consultar histórico;
- administrar dados básicos do usuário.

## Escopo

Incluído:

- perfil;
- vínculo com Associated Company;
- status;
- elegibilidade;
- acesso;
- histórico.

Não incluído:

- administração global;
- cadastro de Associated Companies;
- cadastro de Commercial Partners;
- criação de Benefits;
- processamento de Payments;
- gestão de Bookings.

## Multi-Tenant

Cada Employee pertence a exatamente uma Associated Company.

Todo acesso a dados privados deve respeitar o Tenant do Employee.

## Atores

### Company Administrator

Gerencia Employees da própria empresa.

### Platform Administrator

Pode administrar Employees globalmente quando autorizado.

### Employee

Pode consultar e atualizar seus próprios dados permitidos.

## Ciclo de vida

```text
Convidado
   ↓
Pendente
   ↓
Ativo
   ↓
Suspenso
   ↓
Desativado
```

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

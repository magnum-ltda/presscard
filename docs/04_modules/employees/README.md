---
document: EMPLOYEES_MODULE
title: Employees Module
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard
module: Employees

purpose:
  Definir o módulo responsável pelo gerenciamento dos Employees da Presscard.

audience:
  - AI
  - Developer
  - Product Owner

depends_on:
  - DOMAIN_MODEL
  - MULTI_TENANT
  - BUSINESS_RULES
  - COMPANIES

related_documents:
  - RULES
  - ENTITIES
  - FLOW
  - API
  - COMPONENTS
  - SERVICES
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

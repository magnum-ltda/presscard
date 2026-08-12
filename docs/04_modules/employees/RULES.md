---
document: EMPLOYEES_RULES
title: Employees Module Rules
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard
module: Employees

purpose:
  Definir as regras de negócio do módulo Employees.

depends_on:
  - BUSINESS_RULES
  - MULTI_TENANT
  - COMPANIES
  - README
---

# Employees Rules

## Vínculo

### EMP-RULE-001
Todo Employee pertence exatamente a uma Associated Company.

### EMP-RULE-002
Um Employee não pode pertencer simultaneamente a duas Associated Companies.

### EMP-RULE-003
A alteração de empresa de um Employee deve ser tratada como uma operação de transferência controlada.

## Cadastro

### EMP-RULE-004
O cadastro de Employee deve conter informações mínimas para identificação e acesso.

### EMP-RULE-005
Um convite deve estar associado à Associated Company correta.

### EMP-RULE-006
Um Employee não pode ser ativado sem uma Associated Company válida e ativa.

## Acesso

### EMP-RULE-007
Employees desativados não podem acessar funcionalidades de usuário.

### EMP-RULE-008
Employees suspensos não podem realizar novas operações de negócio.

### EMP-RULE-009
Um Employee somente pode consultar dados próprios, salvo permissões administrativas.

## Multi-Tenant

### EMP-RULE-010
Um Employee nunca pode consultar dados privados de outro Tenant.

### EMP-RULE-011
Toda consulta administrativa de Employee deve respeitar o Tenant quando realizada por Company Administrator.

### EMP-RULE-012
O contexto de Tenant deve ser validado antes de retornar dados do Employee.

## Benefícios

### EMP-RULE-013
Um Employee somente pode visualizar Benefits disponibilizados pela sua Associated Company.

### EMP-RULE-014
A elegibilidade do Employee deve ser validada antes da utilização de um Benefit restrito.

## Reservas

### EMP-RULE-015
Somente Employees ativos podem criar novas Bookings.

### EMP-RULE-016
Um Employee pode possuir múltiplas Bookings.

### EMP-RULE-017
Um Employee somente pode consultar suas próprias Bookings, salvo permissões administrativas.

## Perfil

### EMP-RULE-018
O Employee pode atualizar somente campos permitidos pelo sistema.

### EMP-RULE-019
Alterações administrativas relevantes devem gerar AuditLog.

## Status

### EMP-RULE-020
A desativação de Employee não deve apagar seu histórico.

### EMP-RULE-021
Um Employee desativado pode manter registros históricos de Benefits, Bookings e Payments.

## Privacidade

### EMP-RULE-022
Dados pessoais do Employee devem ser protegidos por autorização adequada.

### EMP-RULE-023
Informações pessoais não devem ser disponibilizadas para Commercial Partners além do necessário para execução de uma operação.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

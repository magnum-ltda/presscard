---
document: COMPANIES_RULES
title: Associated Companies Module Rules
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard
module: Companies

purpose:
  Definir as regras de negócio do módulo Companies.

depends_on:
  - BUSINESS_RULES
  - MULTI_TENANT
  - README
---

# Companies Rules

## Identificação

### COM-RULE-001
Toda Associated Company deve possuir identificador único.

### COM-RULE-002
O documento empresarial deve ser único dentro da plataforma quando aplicável.

### COM-RULE-003
Uma Associated Company deve possuir nome empresarial ou nome identificável válido.

## Administradores

### COM-RULE-004
Toda Associated Company deve possuir pelo menos um Company Administrator antes de ser ativada.

### COM-RULE-005
Um Company Administrator somente pode administrar sua própria Associated Company.

### COM-RULE-006
A remoção do último Company Administrator ativo deve ser impedida.

## Status

### COM-RULE-007
Uma Associated Company pode estar em Configuração, Ativa, Suspensa ou Desativada.

### COM-RULE-008
Empresas desativadas não podem criar novas operações de negócio.

### COM-RULE-009
Desativação não remove dados históricos.

### COM-RULE-010
Reativação deve respeitar as permissões de um Platform Administrator.

## Multi-Tenant

### COM-RULE-011
Todo dado exclusivo da empresa deve estar associado ao Tenant correto.

### COM-RULE-012
Company Administrators nunca podem consultar dados de outro Tenant.

### COM-RULE-013
Consultas administrativas devem aplicar o contexto de Tenant quando a operação não for global.

## Dados

### COM-RULE-014
Alterações relevantes nos dados da empresa devem gerar AuditLog.

### COM-RULE-015
Exclusão física de Associated Company não é permitida.

### COM-RULE-016
Dados obrigatórios devem ser validados antes da ativação.

## Benefícios e Parceiros

### COM-RULE-017
Uma Associated Company pode possuir diversos Benefits.

### COM-RULE-018
Uma Associated Company pode utilizar diversos Commercial Partners.

### COM-RULE-019
A empresa define seus próprios Benefits; um Commercial Partner compartilhado não recebe automaticamente o mesmo benefício para todas as empresas.

## Auditoria

### COM-RULE-020
Criação, alteração, ativação, suspensão e desativação devem ser auditadas.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

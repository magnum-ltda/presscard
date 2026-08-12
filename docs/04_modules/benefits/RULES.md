---
document: BENEFITS_RULES
title: Benefits Module Rules
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard
module: Benefits

purpose:
  Definir as regras de negócio do módulo Benefits.

depends_on:
  - BUSINESS_RULES
  - COMPANIES
  - EMPLOYEES
  - PARTNERS
  - README
---

# Benefits Rules

## Associação

### BEN-RULE-001
Todo Benefit pertence exatamente a uma Associated Company.

### BEN-RULE-002
Todo Benefit deve possuir um Commercial Partner quando o benefício for oferecido por parceiro externo.

### BEN-RULE-003
Um Commercial Partner pode possuir vários Benefits.

### BEN-RULE-004
Uma Associated Company pode possuir vários Benefits.

## Multi-Tenant

### BEN-RULE-005
Um Employee somente pode visualizar Benefits disponibilizados pela sua Associated Company.

### BEN-RULE-006
Um Company Administrator somente pode administrar Benefits do próprio Tenant.

### BEN-RULE-007
Benefits de uma Associated Company nunca devem aparecer para outra empresa sem uma regra explícita de compartilhamento futuro.

## Status

### BEN-RULE-008
Um Benefit pode estar em Draft, Active, Suspended, Expired ou Deactivated.

### BEN-RULE-009
Somente Benefits Active podem ser utilizados.

### BEN-RULE-010
Benefits fora do período de validade não podem ser utilizados.

### BEN-RULE-011
Desativar um Benefit não remove seu histórico.

## Elegibilidade

### BEN-RULE-012
A elegibilidade deve ser validada antes da utilização de um Benefit restrito.

### BEN-RULE-013
Um Benefit pode ser disponibilizado para todos os Employees da empresa ou para grupos específicos.

### BEN-RULE-014
A regra de elegibilidade deve ser determinística e auditável.

## Condição Comercial

### BEN-RULE-015
Um Benefit deve possuir uma condição comercial claramente definida.

Exemplos:

- percentual de desconto;
- valor fixo de desconto;
- preço especial;
- condição diferenciada.

### BEN-RULE-016
A condição aplicada deve ser registrada no momento da operação.

Alterações futuras não devem modificar operações históricas.

## Validade

### BEN-RULE-017
Benefits podem possuir data inicial e data final.

### BEN-RULE-018
A data final não pode ser anterior à data inicial.

## Utilização

### BEN-RULE-019
Um Benefit pode possuir limite de utilização.

### BEN-RULE-020
Limites devem ser validados antes da confirmação da operação.

### BEN-RULE-021
Quando houver Booking, a utilização deve ser relacionada ao Booking correspondente.

## Auditoria

### BEN-RULE-022
Criação, alteração, ativação, suspensão e desativação devem gerar AuditLog.

### BEN-RULE-023
Alterações de regras comerciais devem ser auditadas.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

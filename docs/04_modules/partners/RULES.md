---
document: PARTNERS_RULES
title: Commercial Partners Module Rules
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard
module: Partners

purpose:
  Definir as regras de negócio do módulo Partners.

depends_on:
  - BUSINESS_RULES
  - DOMAIN_MODEL
  - README
---

# Partners Rules

## Cadastro

### PAR-RULE-001
Todo Commercial Partner deve possuir identificador único.

### PAR-RULE-002
Um Commercial Partner deve possuir nome válido.

### PAR-RULE-003
Um Commercial Partner deve possuir pelo menos uma categoria válida.

### PAR-RULE-004
O cadastro deve possuir dados mínimos de contato quando aplicável.

## Compartilhamento

### PAR-RULE-005
Um Commercial Partner pode atender várias Associated Companies.

### PAR-RULE-006
O cadastro do Commercial Partner pertence à plataforma e não a uma única Associated Company.

### PAR-RULE-007
A existência de um Commercial Partner não cria automaticamente um Benefit para nenhuma Associated Company.

## Benefícios

### PAR-RULE-008
Benefits são definidos pela Associated Company.

### PAR-RULE-009
Um mesmo Commercial Partner pode possuir Benefits diferentes para diferentes Associated Companies.

## Localização

### PAR-RULE-010
Parceiros que possuem endereço físico devem armazenar localização quando disponível.

### PAR-RULE-011
A localização deve permitir armazenar latitude e longitude.

### PAR-RULE-012
Latitude e longitude devem ser validadas antes de serem utilizadas em buscas geográficas.

### PAR-RULE-013
Alterações de endereço devem permitir atualização da localização geográfica.

## Status

### PAR-RULE-014
Um Commercial Partner pode estar em Cadastro, Em Análise, Ativo, Suspenso ou Desativado.

### PAR-RULE-015
Parceiros desativados não devem aparecer como disponíveis no catálogo.

### PAR-RULE-016
Desativação não remove histórico de Benefits, Bookings ou outras referências.

## Recursos

### PAR-RULE-017
Um Commercial Partner pode possuir vários Reservable Resources.

### PAR-RULE-018
Um recurso deve pertencer a exatamente um Commercial Partner.

### PAR-RULE-019
A existência do parceiro não implica que todos os seus recursos sejam reserváveis.

## Categorias

### PAR-RULE-020
Um parceiro pode possuir uma ou mais categorias.

### PAR-RULE-021
Categorias são entidades globais da plataforma.

## Segurança e Auditoria

### PAR-RULE-022
Alterações administrativas relevantes devem gerar AuditLog.

### PAR-RULE-023
Nenhuma exclusão física deve ser realizada para parceiros com histórico.

### PAR-RULE-024
Acesso administrativo deve validar autenticação e autorização.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

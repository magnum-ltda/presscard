---
document: BUSINESS_RULES
title: Presscard Business Rules
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard

purpose:
  Definir as regras de negócio oficiais da plataforma Presscard.

audience:
  - AI
  - Developer
  - Product Owner

updated_by_antigravity: false

depends_on:
  - PROJECT
  - DOMAIN_MODEL

related_documents:
  - BENEFITS
  - BOOKINGS
  - PAYMENTS
---

# Business Rules

## Objetivo

Este documento define as regras de negócio oficiais da plataforma Presscard.

Todas as funcionalidades da plataforma devem respeitar estas regras.

---

# Empresas Associadas

## BR-001

A Presscard é contratada por Empresas Associadas.

Funcionários e Parceiros Comerciais utilizam a plataforma, mas não são clientes diretos.

---

## BR-002

Toda Empresa Associada deve possuir pelo menos um Administrador.

---

## BR-003

Uma Empresa Associada pode possuir vários Funcionários.

---

## BR-004

Uma Empresa Associada pode possuir vários Benefícios.

---

## BR-005

Uma Empresa Associada pode utilizar diversos Parceiros Comerciais.

---

# Funcionários

## BR-006

Todo Funcionário pertence exatamente a uma Empresa Associada.

---

## BR-007

Funcionários somente podem visualizar benefícios da própria empresa.

---

## BR-008

Funcionários somente podem utilizar benefícios ativos.

---

## BR-009

Funcionários não podem administrar benefícios.

---

## BR-010

Funcionários podem possuir diversas reservas.

---

# Parceiros Comerciais

## BR-011

Um Parceiro Comercial pode atender diversas Empresas Associadas.

---

## BR-012

Um Parceiro Comercial pode oferecer diversos recursos.

---

## BR-013

O Parceiro Comercial não define o desconto.

O desconto é definido pela Empresa Associada.

---

# Benefícios

## BR-014

Todo Benefício pertence a exatamente uma Empresa Associada.

---

## BR-015

Todo Benefício referencia exatamente um Parceiro Comercial.

---

## BR-016

Benefícios podem possuir data inicial e data final.

---

## BR-017

Benefícios expirados não podem ser utilizados.

---

## BR-018

Benefícios inativos não aparecem no catálogo.

---

## BR-019

Um Benefício poderá ser exclusivo para grupos específicos de funcionários.

---

# Catálogo

## BR-020

O catálogo apresenta apenas benefícios disponíveis para o Funcionário autenticado.

---

## BR-021

O catálogo poderá ser filtrado por:

- categoria
- localização
- parceiro
- texto

---

# Reservas

## BR-022

Reservas somente podem ser realizadas por Funcionários ativos.

---

## BR-023

Toda Reserva pertence a um Funcionário.

---

## BR-024

Toda Reserva referencia exatamente um Recurso Reservável.

---

## BR-025

Reservas possuem ciclo de vida próprio.

Estados:

- Criada
- Confirmada
- Cancelada
- Concluída

---

# Pagamentos

## BR-026

Pagamentos pertencem a uma Reserva.

---

## BR-027

Um Pagamento pode possuir diferentes métodos.

---

## BR-028

Pagamentos aprovados geram Comissão quando aplicável.

---

# Comissão

## BR-029

Toda Comissão é calculada pelo Commission Engine.

---

## BR-030

Nenhum outro módulo pode calcular comissão.

---

# Multiempresa

## BR-031

Dados de uma Empresa Associada nunca podem ser exibidos para outra.

---

## BR-032

Permissões sempre devem considerar o Tenant ativo.

---

# Administração

## BR-033

Administradores Globais possuem acesso à plataforma completa.

---

## BR-034

Administradores da Empresa possuem acesso apenas aos dados da própria empresa.

---

# Regras Gerais

## BR-035

Toda funcionalidade deve respeitar a arquitetura modular.

---

## BR-036

Nunca duplicar regras de negócio.

---

## BR-037

Sempre reutilizar conceitos do Domain Model.

---

## BR-038

Toda alteração de regra deverá atualizar esta documentação.

---

# Implementação

Status:

☐ Não iniciado

☐ Parcial

☐ Completo
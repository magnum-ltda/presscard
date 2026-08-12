---
document: PROJECT
title: Presscard Project
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard

purpose:
  Definir oficialmente o que é a plataforma Presscard, seu propósito, escopo, público-alvo e visão de evolução.

audience:
  - AI
  - Developer
  - Product Owner

updated_by_antigravity: false

depends_on: []

related_documents:
  - PROJECT_VISION
  - AI_MEMORY
  - BUSINESS_RULES
---

# Presscard

## Objetivo

A Presscard é uma plataforma SaaS de benefícios corporativos desenvolvida para conectar empresas, funcionários e parceiros comerciais em um único ecossistema.

A plataforma nasceu como um sistema de gestão de benefícios corporativos e evoluirá gradualmente para um marketplace completo de serviços corporativos, incluindo reservas, pagamentos e integrações externas.

O crescimento da plataforma será realizado por fases, preservando a arquitetura e evitando grandes reescritas.

---

# Missão

Permitir que empresas ofereçam benefícios reais aos seus colaboradores através de uma plataforma moderna, escalável e preparada para diversos segmentos de mercado.

---

# Visão

Ser uma plataforma única onde o funcionário consiga descobrir, reservar, contratar e utilizar benefícios corporativos de forma simples, enquanto empresas e parceiros gerenciam toda a operação através de um painel administrativo.

---

# Público-alvo

A plataforma atende três públicos principais.

## Empresas Associadas

Empresas que contratam a Presscard para disponibilizar benefícios aos seus colaboradores.

Exemplos:

- indústrias;
- comércio;
- empresas de tecnologia;
- órgãos públicos;
- prestadores de serviço.

---

## Funcionários

Usuários vinculados às Empresas Associadas.

Podem:

- acessar benefícios;
- pesquisar parceiros;
- realizar reservas;
- efetuar pagamentos;
- acompanhar seu histórico.

---

## Parceiros Comerciais

Empresas que oferecem produtos ou serviços através da plataforma.

Exemplos:

- hotéis;
- restaurantes;
- locadoras;
- academias;
- farmácias;
- cinemas;
- escolas;
- cursos;
- lojas;
- prestadores de serviço.

---

# Modelo de Negócio

A Presscard conecta Empresas Associadas aos Parceiros Comerciais.

As Empresas Associadas disponibilizam benefícios para seus funcionários.

Os funcionários utilizam esses benefícios junto aos Parceiros Comerciais.

A plataforma gerencia toda essa relação.

Em fases futuras, a plataforma também realizará:

- reservas;
- pagamentos;
- cálculo de comissões;
- repasses financeiros.

---

# Evolução da Plataforma

A Presscard será construída de forma incremental.

## Fase 1

Gestão de benefícios.

## Fase 2

Marketplace corporativo.

## Fase 3

Sistema de reservas.

## Fase 4

Pagamentos.

## Fase 5

Integrações externas.

Cada fase deverá ser validada antes da próxima.

---

# Conceitos Fundamentais

A plataforma é baseada em conceitos genéricos e reutilizáveis.

Principais conceitos:

- Associated Company
- Employee
- Commercial Partner
- Benefit
- Reservable Resource
- Booking
- Payment
- Commission

Esses conceitos deverão ser reutilizados em toda a plataforma.

---

# Arquitetura do Produto

A plataforma será organizada em módulos independentes.

Cada módulo deverá possuir responsabilidade única.

Exemplos:

- Administração
- Empresas
- Funcionários
- Parceiros
- Benefícios
- Catálogo
- Reservas
- Pagamentos
- Financeiro
- Relatórios

---

# Escalabilidade

A plataforma deverá permitir a inclusão de novos segmentos sem necessidade de alterar a arquitetura principal.

Exemplos:

Hoje:

- Hotel

Amanhã:

- Restaurante
- Locadora
- Academia
- Clínica
- Eventos

A arquitetura deverá suportar essa evolução naturalmente.

---

# Multiempresa

A Presscard é uma plataforma SaaS.

Todo o domínio deverá ser preparado para suportar múltiplas Empresas Associadas.

Nenhuma regra de negócio deverá assumir a existência de apenas uma empresa.

---

# Princípios do Produto

A Presscard seguirá os seguintes princípios:

- simplicidade para o usuário;
- arquitetura sustentável;
- domínio orientado ao negócio;
- evolução incremental;
- reutilização de componentes;
- documentação como parte do software.

---

# Fora do Escopo Atual

Nesta fase do projeto, não fazem parte do escopo:

- ERP completo;
- CRM;
- gestão financeira empresarial;
- folha de pagamento;
- contabilidade;
- e-commerce genérico.

Essas funcionalidades somente poderão ser consideradas caso façam sentido para a evolução da plataforma.

---

# Fonte Oficial

Este documento representa a definição oficial da plataforma Presscard.

Caso exista conflito entre este documento e qualquer implementação, a divergência deverá ser analisada antes de qualquer alteração.

Mudanças neste documento representam mudanças estratégicas do produto e deverão ser aprovadas pelo responsável pelo projeto.

---

# Histórico

## Versão 1.0.0

- Criação do documento.
- Definição oficial da plataforma.
- Consolidação da visão do produto.
---
document: DOMAIN_MODEL
title: Presscard Domain Model
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard

purpose:
  Definir o modelo de domínio oficial da plataforma Presscard.

audience:
  - AI
  - Developer
  - Architect

updated_by_antigravity: false

depends_on:
  - PROJECT
  - ARCHITECTURE

related_documents:
  - MODULE_MAP
  - BUSINESS_RULES
---

# Domain Model

## Objetivo

Este documento define os principais conceitos de negócio da plataforma Presscard.

O foco deste documento não é banco de dados.

O foco é representar o domínio do negócio.

Toda implementação deverá utilizar estes conceitos.

---

# Filosofia

O domínio deve representar o negócio.

Nunca modelar entidades pensando apenas em uma implementação específica.

Sempre utilizar conceitos genéricos e reutilizáveis.

---

# Visão Geral

```
Associated Company

│

├── Employees

│

└── Benefits

↓

Commercial Partner

↓

Reservable Resource

↓

Booking

↓

Payment

↓

Commission
```

---

# Entidades

## AssociatedCompany

Representa uma empresa cliente da Presscard.

Responsabilidades:

- contratar a plataforma;
- disponibilizar benefícios;
- gerenciar colaboradores;
- administrar parceiros vinculados.

Relacionamentos:

- possui Employees;
- possui Benefits;
- utiliza Commercial Partners.

---

## Employee

Representa um colaborador de uma Empresa Associada.

Responsabilidades:

- consultar benefícios;
- pesquisar parceiros;
- realizar reservas;
- efetuar pagamentos.

Relacionamentos:

- pertence a uma Associated Company;
- utiliza Benefits;
- realiza Bookings.

---

## CommercialPartner

Representa uma empresa parceira.

Exemplos:

- Hotel
- Restaurante
- Academia
- Farmácia
- Cinema
- Locadora
- Clínica

Responsabilidades:

- oferecer produtos;
- oferecer serviços;
- disponibilizar recursos reserváveis.

Relacionamentos:

- possui Reservable Resources;
- recebe Benefits.

---

## Benefit

Representa uma vantagem concedida ao funcionário.

Exemplos:

- desconto percentual;
- desconto fixo;
- cashback;
- benefício exclusivo.

Importante:

Benefit NÃO representa pagamento.

Benefit NÃO representa reserva.

Benefit NÃO representa parceiro.

Relacionamentos:

- pertence a uma Associated Company;
- referencia um Commercial Partner.

---

## ReservableResource

Representa qualquer recurso que possa ser reservado.

Exemplos:

- quarto;
- veículo;
- mesa;
- sala;
- equipamento;
- serviço.

Responsabilidades:

- disponibilizar agenda;
- informar disponibilidade.

Relacionamentos:

- pertence a um Commercial Partner;
- gera Bookings.

---

## Booking

Representa uma reserva.

Responsabilidades:

- registrar utilização;
- controlar status;
- controlar datas.

Não calcula:

- descontos;
- pagamentos;
- comissão.

Relacionamentos:

- pertence a um Employee;
- referencia um Reservable Resource;
- pode gerar Payment.

---

## Payment

Representa uma transação financeira.

Responsabilidades:

- registrar pagamento;
- controlar status;
- registrar método.

Não calcula comissão.

Relacionamentos:

- pertence a um Booking.

---

## Commission

Representa o resultado financeiro entre parceiros.

Responsabilidades:

- registrar comissão;
- controlar repasses;
- registrar valores.

Relacionamentos:

- pertence a um Payment.

---

# Relacionamentos

```
AssociatedCompany

│

├── Employee

├── Benefit

│

Benefit

↓

CommercialPartner

↓

ReservableResource

↓

Booking

↓

Payment

↓

Commission
```

---

# Regras Gerais

Uma empresa pode possuir muitos funcionários.

Um funcionário pertence a apenas uma empresa.

Um parceiro pode atender várias empresas.

Um parceiro pode possuir vários benefícios.

Um parceiro pode possuir vários recursos reserváveis.

Um funcionário pode possuir várias reservas.

Uma reserva pode possuir um pagamento.

Um pagamento pode gerar uma comissão.

---

# Conceitos Abstratos

A plataforma utiliza conceitos genéricos.

Nunca criar:

HotelBooking

RestaurantBooking

CarBooking

Esses cenários deverão utilizar:

Booking

---

Nunca criar:

Hotel

Restaurant

CarRental

Como entidades principais.

Sempre utilizar:

CommercialPartner

---

Nunca criar:

HotelRoom

Car

Mesa

Como entidades específicas de domínio.

Sempre utilizar:

ReservableResource

---

# Engines Relacionadas

Benefit

↓

Benefit Engine

---

Booking

↓

Booking Engine

Availability Engine

---

Payment

↓

Payment Engine

---

Commission

↓

Commission Engine

---

Notification

↓

Notification Engine

---

# Evolução

Novas funcionalidades deverão reutilizar estas entidades.

Caso um novo segmento seja adicionado, ele deverá especializar os conceitos existentes sem alterar o modelo principal.

---

# Fora do Escopo

Este documento não define:

- banco de dados;
- APIs;
- telas;
- componentes;
- tecnologias.

Ele define apenas o domínio.

---

# Histórico

## Versão 1.0.0

- Criação do modelo de domínio oficial da Presscard.
---
document: USER_JOURNEYS
title: Presscard User Journeys
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard

purpose:
  Definir as principais jornadas dos usuários da plataforma Presscard.

audience:
  - AI
  - Developer
  - Product Owner
  - UX Designer

updated_by_antigravity: false

depends_on:
  - BUSINESS_RULES
  - BENEFITS
  - BOOKINGS
  - PAYMENTS

related_documents:
  - DOMAIN_MODEL
---

# User Journeys

## Objetivo

Este documento descreve as principais jornadas dos usuários da plataforma Presscard.

Seu objetivo é orientar o desenvolvimento das telas, APIs, fluxos de navegação e regras de negócio.

Cada jornada representa um fluxo completo de utilização.

---

# Atores

A plataforma possui quatro atores principais.

- Platform Administrator
- Company Administrator
- Employee
- Commercial Partner

Cada ator possui responsabilidades distintas.

---

# Jornada 1 - Primeiro acesso do Funcionário

## Objetivo

Permitir que um funcionário realize seu primeiro acesso à plataforma.

## Fluxo

```mermaid
flowchart LR

ReceberConvite

↓

Login

↓

AceitarTermos

↓

CompletarPerfil

↓

TelaInicial
```

## Resultado esperado

O funcionário possui acesso completo aos benefícios da sua Empresa Associada.

---

# Jornada 2 - Encontrar um benefício

## Objetivo

Permitir que o funcionário encontre rapidamente um benefício.

## Fluxo

```mermaid
flowchart LR

Home

↓

Pesquisar

↓

Filtrar

↓

SelecionarParceiro

↓

VisualizarBenefício
```

## Funcionalidades

- pesquisa por texto
- categorias
- localização
- filtros
- favoritos

---

# Jornada 3 - Reservar um serviço

## Objetivo

Permitir que um funcionário realize uma reserva.

## Fluxo

```mermaid
flowchart LR

SelecionarParceiro

↓

SelecionarRecurso

↓

SelecionarDatas

↓

ValidarDisponibilidade

↓

CriarBooking

↓

Checkout

↓

Pagamento

↓

Confirmação
```

## Resultado esperado

Reserva criada com sucesso.

---

# Jornada 4 - Consultar reservas

## Fluxo

```mermaid
flowchart LR

Menu

↓

MinhasReservas

↓

SelecionarReserva

↓

VisualizarDetalhes
```

O funcionário poderá:

- acompanhar status
- visualizar comprovante
- cancelar quando permitido

---

# Jornada 5 - Cancelar reserva

## Fluxo

```mermaid
flowchart LR

Reserva

↓

SolicitarCancelamento

↓

ValidarPolítica

↓

Cancelar

↓

AtualizarStatus

↓

NotificarUsuário
```

---

# Jornada 6 - Company Administrator

## Objetivo

Administrar benefícios da empresa.

## Fluxo

```mermaid
flowchart LR

Login

↓

Dashboard

↓

Benefícios

↓

NovoBenefit

↓

SelecionarParceiro

↓

ConfigurarDesconto

↓

Publicar
```

## Responsabilidades

- criar benefícios
- editar benefícios
- acompanhar utilização
- gerenciar funcionários

---

# Jornada 7 - Commercial Partner

## Objetivo

Administrar serviços disponibilizados.

## Fluxo

```mermaid
flowchart LR

Login

↓

Dashboard

↓

CadastrarRecursos

↓

ConfigurarDisponibilidade

↓

ReceberBookings

↓

ConfirmarReservas
```

## Responsabilidades

- administrar recursos
- controlar disponibilidade
- acompanhar reservas
- visualizar pagamentos

---

# Jornada 8 - Platform Administrator

## Objetivo

Administrar toda a plataforma.

## Fluxo

```mermaid
flowchart LR

Login

↓

DashboardGlobal

↓

Empresas

↓

Parceiros

↓

Categorias

↓

Relatórios

↓

Configurações
```

## Responsabilidades

- cadastrar Empresas Associadas
- cadastrar Parceiros Comerciais
- administrar categorias
- administrar parâmetros globais
- acompanhar indicadores

---

# Jornada 9 - Checkout

## Fluxo

```mermaid
flowchart LR

Booking

↓

Resumo

↓

AplicarBenefit

↓

SelecionarPagamento

↓

Gateway

↓

Confirmação
```

---

# Jornada 10 - Avaliação (Futuro)

## Fluxo

```mermaid
flowchart LR

BookingCompleted

↓

SolicitarAvaliação

↓

AvaliarParceiro

↓

SalvarAvaliação
```

---

# Permissões

## Employee

Pode:

- visualizar benefícios
- realizar reservas
- realizar pagamentos
- consultar histórico

Não pode:

- criar benefícios
- cadastrar parceiros
- administrar empresas

---

## Company Administrator

Pode:

- administrar funcionários
- administrar benefícios
- visualizar indicadores da empresa

Não pode:

- administrar outras empresas
- alterar configurações globais

---

## Commercial Partner

Pode:

- administrar seus recursos
- visualizar reservas
- controlar disponibilidade

Não pode:

- administrar benefícios
- visualizar dados de outras empresas

---

## Platform Administrator

Possui acesso completo à plataforma.

---

# Princípios de UX

Toda jornada deve priorizar:

- poucos cliques
- navegação intuitiva
- feedback imediato
- mensagens claras
- tratamento de erros amigável

---

# Jornada Ideal

```text
Login

↓

Encontrar Benefício

↓

Selecionar Parceiro

↓

Reservar

↓

Pagar

↓

Receber Confirmação

↓

Utilizar Serviço

↓

Avaliar Experiência
```

---

# Implementação

Status

☐ Não iniciado

☐ Parcial

☐ Completo

---

# Histórico

## Versão 1.0.0

- Criação das jornadas oficiais dos usuários da plataforma Presscard.
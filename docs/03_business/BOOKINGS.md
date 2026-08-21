---
document: BOOKINGS
title: Presscard Booking Specification
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
purpose: Definir o funcionamento do módulo de Reservas (Booking) da plataforma Presscard.
audience:
- AI
- Developer
- Product Owner
updated_by_antigravity: false
depends_on:
- 03_business/BUSINESS_RULES.md
- 02_architecture/DOMAIN_MODEL.md
- 03_business/BENEFITS.md
related_documents:
- 03_business/PAYMENTS.md
- 03_business/COMMISSIONS.md
---

# Bookings

## Objetivo

O módulo Booking é responsável pelo gerenciamento completo do ciclo de vida das reservas realizadas pelos funcionários da plataforma Presscard.

O módulo controla apenas o processo de reserva.

Ele não calcula benefícios.

Ele não processa pagamentos.

Ele não calcula comissões.

---

# Definição

Um Booking representa a reserva de um recurso disponibilizado por um Parceiro Comercial.

Exemplos:

- Quarto de hotel
- Veículo
- Mesa de restaurante
- Sala de reunião
- Equipamento
- Serviço

---

# Responsabilidades

O módulo deve permitir:

- criar reservas;
- consultar reservas;
- alterar reservas;
- cancelar reservas;
- confirmar reservas;
- finalizar reservas;
- consultar histórico.

---

# Relacionamentos

```text
Employee

↓

Booking

↓

ReservableResource

↓

CommercialPartner
```

---

# Regras

## BOOK-001

Todo Booking pertence exatamente a um Employee.

---

## BOOK-002

Todo Booking referencia exatamente um ReservableResource.

---

## BOOK-003

Todo ReservableResource pertence exatamente a um CommercialPartner.

---

## BOOK-004

Uma reserva somente poderá ser criada para recursos disponíveis.

---

## BOOK-005

Um recurso poderá possuir diversas reservas ao longo do tempo.

As reservas não podem possuir conflito de datas.

---

## BOOK-006

Um Booking poderá originar um Payment.

---

## BOOK-007

Uma reserva cancelada nunca poderá voltar para Confirmada.

---

## BOOK-008

Reservas concluídas não poderão ser alteradas.

---

## BOOK-009

Reservas deverão possuir data e hora de criação.

---

## BOOK-010

Toda alteração relevante deverá ser registrada no histórico.

---

## BOOK-011

O funcionário somente poderá visualizar suas próprias reservas.

Administradores poderão visualizar reservas da empresa.

Administradores Globais poderão visualizar todas.

---

## BOOK-012

O parceiro poderá visualizar apenas reservas referentes aos seus recursos.

---

## BOOK-013

Toda reserva deverá possuir um status válido.

---

# Ciclo de Vida

```text
Criada

↓

Pendente

↓

Confirmada

↓

Em Andamento

↓

Concluída
```

Fluxos alternativos:

```text
Pendente

↓

Cancelada
```

ou

```text
Confirmada

↓

Cancelada
```

---

# Estados

## Draft

Reserva iniciada.

Ainda não confirmada.

---

## Pending

Aguardando confirmação.

---

## Confirmed

Reserva confirmada.

---

## InProgress

Reserva em utilização.

---

## Completed

Reserva finalizada.

---

## Cancelled

Reserva cancelada.

---

# Fluxo Principal

```mermaid
flowchart LR

Employee

↓

Pesquisar Parceiro

↓

Selecionar Recurso

↓

Selecionar Datas

↓

Validar Disponibilidade

↓

Criar Booking

↓

Pagamento

↓

Confirmação
```

---

# Fluxo de Cancelamento

```mermaid
flowchart LR

Booking Confirmed

↓

Solicitar Cancelamento

↓

Validar Política

↓

Cancelar

↓

Liberar Disponibilidade

↓

Notificar Usuário
```

---

# Validações

Antes de criar uma reserva verificar:

☑ Funcionário ativo

☑ Benefício disponível

☑ Parceiro ativo

☑ Recurso ativo

☑ Disponibilidade

☑ Datas válidas

☑ Limites de utilização

---

# Campos Obrigatórios

- Employee
- ReservableResource
- Data Inicial
- Data Final
- Status
- Data da Reserva

---

# Campos Opcionais

- Observações
- Código Externo
- Número da Reserva
- Origem
- Canal
- Comentários

---

# Histórico

O sistema deverá registrar:

- criação;
- confirmação;
- alteração;
- cancelamento;
- conclusão.

---

# Eventos

BookingCreated

BookingUpdated

BookingConfirmed

BookingCancelled

BookingCompleted

---

# Casos de Uso

## Caso 1

Funcionário realiza uma reserva de hotel.

↓

Sistema valida disponibilidade.

↓

Booking criado.

↓

Pagamento iniciado.

---

## Caso 2

Funcionário cancela uma reserva.

↓

Sistema valida política.

↓

Booking cancelado.

↓

Disponibilidade liberada.

---

## Caso 3

Parceiro confirma a utilização.

↓

Booking passa para Concluído.

↓

Histórico atualizado.

---

# Integrações Futuras

O módulo poderá integrar com:

- Omnibees
- Sistemas de Hotel
- Sistemas de Locadoras
- Google Calendar
- Google Maps
- Payment Gateway

---

# Fora do Escopo

Este módulo não:

- calcula descontos;
- calcula comissão;
- processa pagamentos;
- gera repasses financeiros.

Essas responsabilidades pertencem aos respectivos módulos.

---

# Implementação

Status

☐ Não iniciado

☐ Parcial

☐ Completo

---

# Histórico

## Versão 1.0.0

- Especificação inicial do módulo de Booking.
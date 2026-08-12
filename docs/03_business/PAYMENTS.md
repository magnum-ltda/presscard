---
document: PAYMENTS
title: Presscard Payment Specification
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard

purpose:
  Definir o funcionamento do módulo de Pagamentos da plataforma Presscard.

audience:
  - AI
  - Developer
  - Product Owner

updated_by_antigravity: false

depends_on:
  - BUSINESS_RULES
  - BOOKINGS
  - COMMISSIONS

related_documents:
  - BENEFITS
---

# Payments

## Objetivo

O módulo Payment é responsável por todo o processamento financeiro da plataforma Presscard.

Seu objetivo é receber pagamentos, acompanhar transações, controlar estados financeiros e disponibilizar informações para os módulos de Comissão e Financeiro.

O módulo não realiza reservas.

O módulo não concede benefícios.

---

# Definição

Um Payment representa uma transação financeira originada por uma Booking.

Exemplo:

Booking

↓

Checkout

↓

Pagamento

↓

Confirmação

↓

Commission

---

# Responsabilidades

O módulo deve permitir:

- iniciar pagamentos;
- consultar pagamentos;
- atualizar status;
- cancelar pagamentos;
- estornar pagamentos;
- registrar comprovantes;
- integrar gateways de pagamento.

---

# Relacionamentos

```text
Booking

↓

Payment

↓

Commission
```

---

# Regras

## PAY-001

Todo Payment pertence exatamente a um Booking.

---

## PAY-002

Um Booking poderá possuir apenas um Payment ativo.

---

## PAY-003

Payment somente poderá ser iniciado para Bookings válidos.

---

## PAY-004

Somente Payments aprovados poderão gerar Commission.

---

## PAY-005

Pagamentos cancelados não poderão gerar comissão.

---

## PAY-006

Pagamentos estornados deverão cancelar automaticamente a comissão correspondente.

---

## PAY-007

Todo Payment deverá possuir rastreabilidade completa.

---

## PAY-008

Toda alteração manual deverá ser registrada em auditoria.

---

## PAY-009

O valor final deverá respeitar os Benefits aplicados no momento da reserva.

---

## PAY-010

O valor pago nunca poderá ser negativo.

---

# Métodos de Pagamento

A plataforma deverá suportar:

- PIX
- Cartão de Crédito
- Cartão de Débito
- Carteira Digital
- Outros provedores futuros

---

# Estados

```text
Criado

↓

Pendente

↓

Processando

↓

Aprovado

↓

Concluído
```

Fluxos alternativos

```text
Pendente

↓

Cancelado
```

ou

```text
Processando

↓

Falhou
```

ou

```text
Aprovado

↓

Estornado
```

---

# Fluxo Principal

```mermaid
flowchart LR

Booking Confirmed

↓

Criar Payment

↓

Selecionar Método

↓

Gateway

↓

Aprovado

↓

Commission

↓

Concluído
```

---

# Fluxo de Estorno

```mermaid
flowchart LR

Payment Approved

↓

Solicitar Estorno

↓

Gateway

↓

Estornado

↓

Cancelar Commission

↓

Finalizado
```

---

# Validações

Antes de criar um Payment verificar:

☑ Booking válida

☑ Funcionário ativo

☑ Parceiro ativo

☑ Valor válido

☑ Método disponível

☑ Benefit aplicado

---

# Campos Obrigatórios

- Booking
- Employee
- Commercial Partner
- Valor Original
- Valor Final
- Método
- Status
- Data

---

# Campos Opcionais

- TransactionId
- Gateway
- Comprovante
- Código de Autorização
- Observações
- Dados adicionais do Gateway

---

# Eventos

PaymentCreated

PaymentProcessing

PaymentApproved

PaymentRejected

PaymentCancelled

PaymentRefunded

PaymentCompleted

---

# Casos de Uso

## Caso 1

Funcionário realiza reserva.

↓

Sistema cria Payment.

↓

Pagamento aprovado.

↓

Reserva confirmada.

↓

Commission calculada.

---

## Caso 2

Pagamento recusado.

↓

Booking permanece pendente.

↓

Funcionário pode tentar novamente.

---

## Caso 3

Pagamento estornado.

↓

Commission cancelada.

↓

Histórico preservado.

---

# Auditoria

Toda transação deverá registrar:

- data e hora;
- usuário;
- Booking;
- método;
- gateway;
- TransactionId;
- alterações de status.

---

# Integrações Futuras

O módulo poderá integrar com:

- Stripe
- Mercado Pago
- Asaas
- Pagar.me
- PagSeguro
- PayPal

---

# Fora do Escopo

Este módulo não:

- cria reservas;
- aplica benefícios;
- calcula comissão;
- realiza repasses financeiros.

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

- Especificação inicial do módulo de Payment.
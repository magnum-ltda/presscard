---
document: EVENTS
title: Presscard Domain Events
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
purpose: Definir os principais eventos de domínio da plataforma Presscard e orientar
  a comunicação entre módulos.
audience:
- AI
- Developer
- Architect
updated_by_antigravity: false
depends_on:
- 02_architecture/DOMAIN_MODEL.md
- 02_architecture/MODULE_MAP.md
related_documents:
- 03_business/BUSINESS_RULES.md
- 02_architecture/ARCHITECTURE.md
---

# Domain Events

## Objetivo

Este documento define os principais eventos de domínio da plataforma Presscard.

Eventos representam acontecimentos importantes dentro do negócio.

Eles permitem que módulos reajam às mudanças sem criar dependências diretas entre si.

---

# Filosofia

Sempre que possível:

Evento

↓

Outros módulos reagem.

Evitar:

Módulo chamando diretamente outro módulo.

---

# Fluxo Geral

```mermaid
flowchart LR

Employee

↓

Benefit

↓

Booking

↓

Payment

↓

Commission
```

Cada etapa gera eventos que podem ser consumidos pelos demais módulos.

---

# Empresas

## AssociatedCompanyCreated

Disparado quando uma empresa é cadastrada.

Consumidores possíveis:

- Administração
- Funcionários
- Benefícios

---

## AssociatedCompanyUpdated

Disparado quando dados da empresa são alterados.

---

# Funcionários

## EmployeeCreated

Novo funcionário cadastrado.

Consumidores:

- Benefícios
- Notificações

---

## EmployeeActivated

Funcionário habilitado para utilizar a plataforma.

---

## EmployeeDeactivated

Funcionário perdeu acesso.

---

# Parceiros

## CommercialPartnerCreated

Novo parceiro comercial.

Consumidores:

- Catálogo
- Benefícios

---

## CommercialPartnerUpdated

Dados do parceiro alterados.

---

## CommercialPartnerActivated

Parceiro disponível para utilização.

---

# Benefícios

## BenefitCreated

Novo benefício criado.

Consumidores:

- Catálogo
- Notificações

---

## BenefitUpdated

Benefício alterado.

---

## BenefitActivated

Benefício disponível.

---

## BenefitExpired

Benefício expirado.

---

# Recursos

## ReservableResourceCreated

Novo recurso criado.

Exemplos:

- quarto;
- veículo;
- mesa;
- equipamento.

Consumidores:

- Catálogo
- Reservas

---

## AvailabilityChanged

Disponibilidade alterada.

Consumidores:

- Reservas

---

# Reservas

## BookingCreated

Nova reserva realizada.

Consumidores:

- Pagamentos
- Notificações

---

## BookingConfirmed

Reserva confirmada.

Consumidores:

- Financeiro

---

## BookingCancelled

Reserva cancelada.

Consumidores:

- Financeiro
- Pagamentos

---

## BookingCompleted

Reserva concluída.

Consumidores:

- Avaliações
- Histórico

---

# Pagamentos

## PaymentCreated

Pagamento iniciado.

---

## PaymentApproved

Pagamento aprovado.

Consumidores:

- Financeiro
- Comissão

---

## PaymentRejected

Pagamento recusado.

---

## PaymentRefunded

Pagamento estornado.

---

# Comissão

## CommissionCalculated

Comissão calculada.

---

## CommissionPaid

Comissão repassada.

---

# Integrações

## IntegrationSynchronized

Dados sincronizados.

---

## IntegrationFailed

Falha na sincronização.

---

# Notificações

## NotificationSent

Notificação enviada.

---

## NotificationFailed

Erro no envio.

---

# Regras

Eventos representam fatos.

Nunca comandos.

Exemplos corretos:

EmployeeCreated

BookingConfirmed

PaymentApproved

---

Exemplos incorretos:

CreateEmployee

ConfirmBooking

ApprovePayment

---

# Boas Práticas

Eventos devem:

- possuir nomes claros;
- representar fatos consumados;
- ser imutáveis;
- possuir data e hora;
- possuir identificador único.

---

# Evolução

Novos eventos poderão ser adicionados conforme novos módulos forem criados.

Sempre reutilizar eventos existentes antes de criar novos.

---

# Histórico

## Versão 1.0.0

- Definição inicial dos eventos de domínio da Presscard.
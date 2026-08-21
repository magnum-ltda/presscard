---
document: PAYMENTS_MODULE
title: Payments Module
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Payments
purpose: Definir o módulo responsável pelo ciclo de vida financeiro dos Payments da
  Presscard.
audience:
- AI
- Developer
- Product Owner
depends_on:
- 04_modules/booking/README.md
- 03_business/BENEFITS.md
- 04_modules/employees/README.md
related_documents:
- 04_modules/payments/RULES.md
- 04_modules/payments/ENTITIES.md
- 04_modules/payments/FLOW.md
- 04_modules/payments/API.md
- 04_modules/payments/SERVICES.md
- 04_modules/payments/TODO.md
---

# Payments

## Objetivo

O módulo Payments é responsável por controlar pagamentos relacionados às operações da Presscard.

O módulo deve ser independente do fluxo de Booking, permitindo pagamentos para diferentes tipos de operação quando necessário.

## Responsabilidades

- criar Payment;
- iniciar cobrança;
- acompanhar status;
- confirmar pagamento;
- tratar falhas;
- processar cancelamento/estorno quando aplicável;
- armazenar referências externas;
- manter histórico financeiro.

## Separação de responsabilidades

```text
Booking
   ↓
define o que está sendo reservado

Payment
   ↓
define como e quando será pago

Commission
   ↓
define a comissão da Presscard
```

Payment não deve conter regras de disponibilidade de Booking.

## Integrações

O módulo deve utilizar uma abstração de gateway.

Exemplos futuros:

- cartão;
- PIX;
- outros meios suportados.

O domínio não deve depender diretamente de SDK específico.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

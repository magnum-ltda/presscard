---
document: PAYMENTS_FLOW
title: Payments Flows
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
path: docs/04_modules/payments/FLOW.md
module: Payments
---

# Payments Flows

## Pagamento de Booking

```mermaid
flowchart LR
A[Booking] --> B[Payment]
B --> C[Create Payment]
C --> D[Gateway]
D --> E{Resultado}
E -->|Aprovado| F[Payment Approved]
E -->|Falha| G[Payment Failed]
F --> H[Confirm Booking]
```

## PIX

```mermaid
flowchart LR
A[Checkout] --> B[Criar Payment]
B --> C[Gateway]
C --> D[PIX]
D --> E[Pending]
E --> F[Webhook/Consulta]
F --> G{Pago?}
G -->|Sim| H[Approved]
G -->|Não| I[Continuar Pending]
```

## Cartão

```mermaid
flowchart LR
A[Checkout] --> B[Create Payment]
B --> C[Gateway]
C --> D[Authorization]
D --> E{Aprovado?}
E -->|Sim| F[Approved]
E -->|Não| G[Failed]
```

## Estorno

```mermaid
flowchart LR
A[Payment Approved]
--> B[Solicitar Refund]
--> C[Gateway]
--> D[Atualizar Refund]
--> E[Atualizar Payment]
```

## Falha

Uma falha de gateway deve:

- atualizar status;
- registrar referência do erro quando apropriado;
- preservar histórico;
- permitir nova tentativa quando a operação permitir.

## Webhook

```mermaid
flowchart LR
A[Gateway Webhook]
--> B[Validar Assinatura]
--> C[Localizar Payment]
--> D[Idempotência]
--> E[Atualizar Status]
--> F[Registrar Evento]
```

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

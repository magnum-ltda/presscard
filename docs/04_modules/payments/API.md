---
document: PAYMENTS_API
title: Payments API
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
path: docs/04_modules/payments/API.md
module: Payments
---

# Payments API

Base route:

```text
/api/payments
```

## Criar

```http
POST /api/payments
```

Exemplo:

```json
{
  "bookingId": "",
  "amount": 0,
  "currency": "BRL",
  "paymentMethod": "PIX"
}
```

## Buscar

```http
GET /api/payments/{paymentId}
```

## Meus pagamentos

```http
GET /api/payments/me
```

## Iniciar processamento

```http
POST /api/payments/{paymentId}/process
```

## Cancelar

```http
POST /api/payments/{paymentId}/cancel
```

## Solicitar estorno

```http
POST /api/payments/{paymentId}/refund
```

Exemplo:

```json
{
  "amount": 0,
  "reason": ""
}
```

## Webhook

```http
POST /api/payments/webhooks/{gateway}
```

O endpoint deve validar autenticação/assinatura e idempotência.

## Resposta

```json
{
  "success": true,
  "data": {}
}
```

## Segurança

Nunca retornar dados sensíveis do método de pagamento além do necessário.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

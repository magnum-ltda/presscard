# Payments Services

## Arquitetura

```text
Component
  ↓
Facade
  ↓
Payment Service
  ↓
Gateway Adapter
  ↓
External Gateway
```

## PaymentService

```text
create()
process()
get()
cancel()
```

## RefundService

```text
createRefund()
processRefund()
getRefund()
```

## PaymentStatusService

```text
validateTransition()
changeStatus()
```

## PaymentGatewayService

Abstrai o provedor externo.

```text
authorize()
capture()
cancel()
refund()
getTransaction()
```

## Gateway Adapter

Exemplo:

```text
IPaymentGateway

PixGatewayAdapter
CardGatewayAdapter
```

O domínio não deve depender diretamente do SDK do fornecedor.

## PaymentWebhookService

Responsável por:

- validar webhook;
- identificar Payment;
- garantir idempotência;
- atualizar status;
- registrar evento.

## PaymentFacade

Coordena operações utilizadas pelo frontend.

```text
createPayment()
processPayment()
getPayment()
refundPayment()
```

## Idempotência

Criação e processamento de pagamentos devem possuir uma chave de idempotência quando necessário para impedir cobranças duplicadas.

## Auditoria

Operações financeiras relevantes devem gerar histórico e AuditLog.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

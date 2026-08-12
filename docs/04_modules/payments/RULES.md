# Payments Rules

## Regras principais

- Todo Payment possui identificador único.
- Todo Payment deve possuir referência à operação de origem.
- Quando relacionado a Booking, deve possuir BookingId.
- O valor cobrado deve ser registrado no momento da cobrança.
- Valores históricos não devem mudar quando regras futuras forem alteradas.
- Status possíveis incluem Pending, Processing, Approved, Failed, Cancelled, Refunded e PartiallyRefunded.
- Payment Approved não deve voltar para Pending.
- Payment Refunded não deve voltar para Approved.
- Falhas de gateway devem ser registradas.
- Referência externa do gateway deve ser armazenada quando existir.
- Operações críticas devem possuir idempotência.
- O sistema não deve armazenar dados sensíveis de cartão que o gateway não permita armazenar.
- Cancelamento e estorno devem respeitar as regras do gateway e da operação de origem.
- Toda alteração financeira relevante deve gerar AuditLog.
- Valores monetários devem utilizar representação adequada para evitar erros de precisão.

## Booking

Quando Payment estiver relacionado a Booking:

- disponibilidade deve ter sido validada;
- Booking só deve ser confirmada quando as pré-condições financeiras forem atendidas;
- falha no Payment não deve apagar a Booking;
- a sincronização entre Booking e Payment deve ser rastreável.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

# Commissions Rules

## Regras principais

- Toda Commission possui identificador único.
- Toda Commission deve possuir referência à operação de origem.
- Quando aplicável, a Commission deve possuir BookingId e PaymentId.
- O percentual ou valor utilizado no cálculo deve ser preservado.
- O valor da comissão deve ser registrado com precisão monetária adequada.
- Uma comissão histórica não deve ser recalculada automaticamente por alteração de regras futuras.
- Status possíveis incluem Pending, Calculated, Payable, Paid, Cancelled e Reversed.
- Commission não altera o valor do Payment.
- Cancelamentos e estornos podem exigir reversão ou ajuste de comissão.
- Toda alteração financeira relevante deve ser auditada.
- Operações idempotentes devem evitar duplicação de comissão.

## Regra aplicada

A comissão deve ser determinada pela regra vigente no momento definido pelo domínio financeiro.

Exemplos:

- percentual sobre Payment;
- valor fixo;
- percentual por categoria;
- regra específica de Partner.

A regra exata deve ser configurável e não hardcoded no componente de interface.

## Booking

Quando uma Booking gerar Payment, a comissão deve ser calculada conforme a operação financeira correspondente.

## Refund

Quando houver Refund, o sistema deve avaliar se existe reversão total ou parcial da comissão.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

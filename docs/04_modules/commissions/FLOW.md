# Commissions Flows

## Geração

```mermaid
flowchart LR
A[Payment Approved]
--> B[Identificar Operação]
--> C[Encontrar Commission Rule]
--> D[Calcular]
--> E[Registrar Commission]
--> F[AuditLog]
```

## Regra por Partner

```mermaid
flowchart LR
A[Payment]
--> B[Partner]
--> C[Buscar Rule]
--> D[Calcular]
--> E[Commission]
```

## Pagamento da comissão

```mermaid
flowchart LR
A[Commission Calculated]
--> B[Payable]
--> C[Processar Pagamento]
--> D[Paid]
```

## Cancelamento

```mermaid
flowchart LR
A[Commission]
--> B[Booking/Payment Cancelled]
--> C[Recalcular Impacto]
--> D[Adjustment]
--> E[Reversal quando aplicável]
```

## Refund

```mermaid
flowchart LR
A[Payment Refund]
--> B[Identificar Commission]
--> C[Calcular Reversão]
--> D[Registrar Adjustment]
```

## Falha

Se o cálculo falhar:

- Payment permanece preservado;
- erro deve ser registrado;
- comissão deve permanecer em estado consistente;
- processamento deve poder ser reexecutado de forma idempotente.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

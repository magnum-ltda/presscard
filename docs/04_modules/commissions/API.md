# Commissions API

Base route:

```text
/api/commissions
```

## Criar/calcular

```http
POST /api/commissions/calculate
```

Exemplo:

```json
{
  "paymentId": "",
  "bookingId": ""
}
```

## Buscar

```http
GET /api/commissions/{commissionId}
```

## Listar

```http
GET /api/commissions
```

Filtros possíveis:

- status;
- partnerId;
- paymentId;
- bookingId;
- dateFrom;
- dateTo.

## Reprocessar

```http
POST /api/commissions/{commissionId}/recalculate
```

Uso deve ser restrito e auditado.

## Ajuste

```http
POST /api/commissions/{commissionId}/adjust
```

Exemplo:

```json
{
  "amount": 0,
  "reason": "",
  "type": "Adjustment"
}
```

## Marcar como paga

```http
POST /api/commissions/{commissionId}/mark-paid
```

## Resposta

```json
{
  "success": true,
  "data": {}
}
```

## Segurança

Operações administrativas devem validar autenticação, autorização e permissões financeiras.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

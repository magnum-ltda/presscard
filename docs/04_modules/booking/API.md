# Booking API

Base route:

```text
/api/bookings
```

## Disponibilidade

```http
GET /api/resources/{resourceId}/availability
```

Parâmetros: `from`, `to`, `quantity`.

## Criar

```http
POST /api/bookings
```

```json
{
  "benefitId": "",
  "resourceId": "",
  "startDate": "",
  "endDate": "",
  "quantity": 1
}
```

## Consultar

```http
GET /api/bookings/{bookingId}
GET /api/bookings/me
```

## Confirmar

```http
POST /api/bookings/{bookingId}/confirm
```

## Cancelar

```http
POST /api/bookings/{bookingId}/cancel
```

## Alterar

```http
PUT /api/bookings/{bookingId}
```

Somente quando permitido pelo estado e pela política do recurso.

## Segurança

Validar Employee, Tenant, Benefit, Resource, disponibilidade e autorização.

## Resposta

```json
{
  "success": true,
  "data": {}
}
```

Erros devem usar contrato padronizado.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

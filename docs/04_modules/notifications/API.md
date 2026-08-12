# Notifications API

Base route:

```text
/api/notifications
```

## Minhas notificações

```http
GET /api/notifications/me
```

## Buscar

```http
GET /api/notifications/{notificationId}
```

## Marcar como lida

```http
PATCH /api/notifications/{notificationId}/read
```

## Preferências

```http
GET /api/notifications/preferences
PUT /api/notifications/preferences
```

## Administração

```http
GET /api/admin/notifications
POST /api/admin/notifications/{notificationId}/retry
```

Retry deve ser restrito e auditado.

## Resposta

```json
{
  "success": true,
  "data": {}
}
```

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

---
document: NOTIFICATIONS_SERVICES
title: Notifications Services
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
path: docs/04_modules/notifications/SERVICES.md
module: Notifications
---

# Notifications Services

## Arquitetura

```text
Business Event
  ↓
Notification Service
  ↓
Template Service
  ↓
Channel Adapter
  ↓
Provider
```

## NotificationService

```text
create()
send()
get()
list()
retry()
cancel()
```

## NotificationTemplateService

```text
getTemplate()
render()
validate()
```

## NotificationPreferenceService

```text
get()
update()
isAllowed()
```

## NotificationDeliveryService

```text
deliver()
track()
retry()
```

## Channel Adapters

```text
INotificationChannel
EmailNotificationAdapter
PushNotificationAdapter
SmsNotificationAdapter
```

O domínio não deve depender diretamente do fornecedor.

## Idempotência

Eventos que possam ser republicados devem possuir proteção contra notificações duplicadas.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

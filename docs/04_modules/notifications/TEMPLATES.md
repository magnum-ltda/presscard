---
document: NOTIFICATIONS_TEMPLATES
title: Notification Templates
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
path: docs/04_modules/notifications/TEMPLATES.md
module: Notifications
---

# Notification Templates

## Estrutura

Cada template possui:
- Type
- Channel
- Subject
- Body
- Version
- Locale
- Status

## Templates iniciais

### Employee Invitation
Canal: Email

### Booking Confirmed
Canais: Email, Push, In-app

### Booking Cancelled
Canais: Email, Push, In-app

### Payment Approved
Canais: Email, In-app

### Payment Failed
Canais: Email, Push, In-app

## Variáveis

```text
%DISPLAY_NAME%
%BOOKING_ID%
%PARTNER_NAME%
%START_DATE%
%END_DATE%
%AMOUNT%
```

Variáveis devem ser validadas antes da renderização.

## Versionamento

Alterações que precisem preservar histórico devem criar nova versão.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

---
document: NOTIFICATIONS_ENTITIES
title: Notifications Entities
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
path: docs/04_modules/notifications/ENTITIES.md
module: Notifications
---

# Notifications Entities

## Notification

- Id
- RecipientId
- Type
- Channel
- TemplateId
- Subject
- Content
- Status
- CreatedAt
- SentAt
- FailedAt

## NotificationStatus

- Pending
- Processing
- Sent
- Failed
- Cancelled

## NotificationTemplate

- Id
- Type
- Channel
- SubjectTemplate
- BodyTemplate
- Version
- Status

## NotificationPreference

Exemplos:
- EmailEnabled
- PushEnabled
- MarketingEnabled
- BookingNotifications
- PaymentNotifications

## NotificationDelivery

- Id
- NotificationId
- Channel
- Provider
- ExternalId
- Status
- AttemptedAt
- Error

## Eventos de origem

- EmployeeInvited
- BookingCreated
- BookingConfirmed
- BookingCancelled
- PaymentApproved
- PaymentFailed
- BenefitAvailable

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

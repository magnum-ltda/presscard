---
document: INTEGRATIONS_MODULE
title: Integrações Module
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Integrations
purpose: Definir o módulo de integrações da Presscard.
audience:
  - AI
  - Developer
  - Product Owner
depends_on:
  - BOOKING
  - PAYMENTS
  - NOTIFICATIONS
  - SECURITY
related_documents:
  - RULES
  - ENTITIES
  - FLOW
  - API
  - SERVICES
  - TODO
---

# Services

## IntegrationService
`execute()`, `getProvider()`, `validateConfiguration()`

## ProviderRegistry
`register()`, `get()`, `list()`

## RetryService
`shouldRetry()`, `getDelay()`, `executeWithRetry()`

## IdempotencyService
`exists()`, `register()`, `complete()`

## WebhookService
`validate()`, `process()`, `isProcessed()`

## Adapters
`IBookingProvider`, `IPaymentGateway`, `IMapsProvider`, `INotificationChannel`

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

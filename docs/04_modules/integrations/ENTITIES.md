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

# Entities

## IntegrationProvider
- Id, Name, Type, Status, ConfigurationReference

## ExternalReference
- Provider, ExternalId, ResourceType

## IntegrationRequest
- Id, Provider, Operation, CorrelationId, IdempotencyKey, Status

## IntegrationEvent
- Id, Provider, ExternalEventId, EventType, Status, ReceivedAt

## IntegrationError
- Provider, Operation, ErrorCode, Message, Retryable

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

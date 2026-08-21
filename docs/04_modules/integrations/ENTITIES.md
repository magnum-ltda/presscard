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
- 04_modules/booking/README.md
- 03_business/PAYMENTS.md
- 04_modules/notifications/README.md
- 04_modules/security/README.md
related_documents:
- 04_modules/integrations/RULES.md
- 04_modules/integrations/ENTITIES.md
- 04_modules/integrations/FLOW.md
- 04_modules/integrations/API.md
- 04_modules/integrations/SERVICES.md
- 04_modules/integrations/TODO.md
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

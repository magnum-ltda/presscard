---
document: BOOKING_AVAILABILITY
title: Booking Availability
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
path: docs/04_modules/booking/AVAILABILITY.md
module: Booking
---

# Booking Availability

## Objetivo

Determinar se um Reservable Resource pode ser reservado para determinado período.

```mermaid
flowchart LR
A[Resource] --> B[Data/Hora] --> C[Availability] --> D{Disponível?}
D -->|Sim| E[Continuar]
D -->|Não| F[Indisponível]
```

## Disponibilidade interna

Considerar reservas, bloqueios, capacidade e regras do recurso.

## Disponibilidade externa

```text
Presscard → Provider Adapter → External Provider → Availability
```

O fornecedor externo permanece como fonte de verdade para seu inventário.

## Revalidação

Quando houver risco de concorrência ou exigência do fornecedor, revalidar antes da confirmação.

## Falhas

Não assumir disponibilidade em caso de erro externo. Registrar erro e permitir nova tentativa.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

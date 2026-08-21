---
document: BOOKING_DOCUMENTATION
title: Booking Module
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
path: docs/04_modules/booking/README.md
module: Booking
---

# Booking Module

Version: 1.0.0  
Status: Official

## Objetivo

Gerenciar o ciclo de vida das reservas realizadas por Employees, com suporte a hotéis, aluguel de carros, restaurantes, experiências e outros serviços reserváveis.

## Responsabilidades

- identificar recursos reserváveis;
- consultar disponibilidade;
- selecionar datas e horários;
- criar, confirmar, alterar e cancelar reservas;
- manter histórico;
- integrar fornecedores externos.

## Relação

```text
Employee → Benefit → Commercial Partner → Reservable Resource → Booking → Payment
```

Booking controla a reserva; Payment controla pagamento; Commission controla comissão.

## Integrações futuras

- Omnibees;
- sistemas de hotéis;
- sistemas de locadoras;
- outros fornecedores.

Integrações externas devem ficar isoladas por contratos/adapters.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

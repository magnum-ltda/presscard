---
document: PAYMENTS_TODO
title: Payments Backlog
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
path: docs/04_modules/payments/TODO.md
module: Payments
---

# Payments Backlog

## Legenda

- ☐ Não iniciado
- 🔄 Em desenvolvimento
- ☑ Concluído
- 🚫 Cancelado

## PAY-EPIC-01 — Núcleo

- ☐ PAY-TASK-001 Criar entidade Payment.
- ☐ PAY-TASK-002 Criar status.
- ☐ PAY-TASK-003 Criar histórico.
- ☐ PAY-TASK-004 Criar API.
- ☐ PAY-TASK-005 Implementar autorização.

## PAY-EPIC-02 — Gateway

- ☐ PAY-TASK-006 Criar interface de gateway.
- ☐ PAY-TASK-007 Criar adapter PIX.
- ☐ PAY-TASK-008 Criar adapter cartão.
- ☐ PAY-TASK-009 Armazenar referência externa.
- ☐ PAY-TASK-010 Tratar erros externos.

## PAY-EPIC-03 — Booking

- ☐ PAY-TASK-011 Integrar Payment com Booking.
- ☐ PAY-TASK-012 Confirmar Booking após Payment aprovado.
- ☐ PAY-TASK-013 Tratar Payment Failed.
- ☐ PAY-TASK-014 Garantir consistência entre Booking e Payment.

## PAY-EPIC-04 — Refund

- ☐ PAY-TASK-015 Criar Refund.
- ☐ PAY-TASK-016 Implementar estorno parcial.
- ☐ PAY-TASK-017 Implementar estorno total.
- ☐ PAY-TASK-018 Integrar gateway.

## PAY-EPIC-05 — Webhooks

- ☐ PAY-TASK-019 Endpoint de webhook.
- ☐ PAY-TASK-020 Validar assinatura.
- ☐ PAY-TASK-021 Implementar idempotência.
- ☐ PAY-TASK-022 Registrar eventos.

## PAY-EPIC-06 — Segurança

- ☐ PAY-TASK-023 Proteger dados sensíveis.
- ☐ PAY-TASK-024 Auditar operações.
- ☐ PAY-TASK-025 Revisar permissões.

## PAY-EPIC-07 — Testes

- ☐ PAY-TASK-026 Testes unitários.
- ☐ PAY-TASK-027 Testes de gateway.
- ☐ PAY-TASK-028 Testes de webhook.
- ☐ PAY-TASK-029 Testes de idempotência.
- ☐ PAY-TASK-030 Testes de refund.
- ☐ PAY-TASK-031 Testes de integração Booking.

## Critério de conclusão

Código implementado, testes realizados, documentação atualizada, regras validadas e segurança validada.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

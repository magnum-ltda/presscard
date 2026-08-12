# Notifications Module

Version: 1.0.0  
Status: Official

## Objetivo

Centralizar notificações enviadas pela Presscard para Employees e usuários administrativos.

Canais previstos:
- Email
- Push
- In-app
- SMS futuramente

## Princípio

Módulos de negócio geram eventos; Notifications decide como entregar a comunicação.

```text
Booking / Payment / Benefit
          ↓
        Event
          ↓
    Notifications
          ↓
       Channel
          ↓
       Recipient
```

## Responsabilidades

- criar notificações;
- selecionar canal;
- aplicar templates;
- enviar;
- acompanhar status;
- registrar falhas;
- permitir reprocessamento;
- manter histórico.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

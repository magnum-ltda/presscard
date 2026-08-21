---
document: BACKEND_APPLICATION
title: Backend Application Layer
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Backend
purpose: Definir casos de uso e orquestração da aplicação.
audience:
- AI
- Developer
depends_on:
- 06_backend/DOMAIN.md
related_documents:
- 06_backend/API.md
- 06_backend/INFRASTRUCTURE.md
---

# Application

## Responsabilidades

- executar casos de uso;
- orquestrar domínio e infraestrutura;
- validar comandos;
- mapear DTOs;
- controlar transações quando necessário;
- publicar eventos quando aplicável.

## Estrutura conceitual

```text
Command/Query
    ↓
Handler / Application Service
    ↓
Domain
    ↓
Repository / External Service
```

## Regras

- Application não deve conter regras que pertençam ao domínio.
- Application pode coordenar múltiplas operações.
- DTOs não devem vazar entidades internas sem necessidade.
- Casos de uso devem possuir testes.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

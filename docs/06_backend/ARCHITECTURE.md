---
document: BACKEND_ARCHITECTURE
title: Backend Architecture
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Backend
purpose: Definir a arquitetura em camadas do backend.
audience:
- AI
- Developer
depends_on:
- 06_backend/README.md
related_documents:
- 06_backend/DOMAIN.md
- 06_backend/APPLICATION.md
- 06_backend/INFRASTRUCTURE.md
---

# Backend Architecture

## Camadas

```text
API
 ↓
Application
 ↓
Domain
 ↓
Infrastructure
```

## API

Responsável por:

- HTTP;
- autenticação;
- autorização;
- model binding;
- validação de entrada;
- respostas HTTP.

Controllers/endpoints não devem concentrar regras de negócio.

## Application

Responsável por:

- casos de uso;
- orquestração;
- DTOs;
- comandos e queries;
- transações quando necessárias.

## Domain

Responsável por:

- entidades;
- value objects;
- regras;
- invariantes;
- contratos de domínio.

Não deve depender de banco ou HTTP.

## Infrastructure

Responsável por:

- Firestore;
- repositories;
- integrações externas;
- serviços técnicos;
- persistência.

## Regra

Dependências devem apontar para dentro da arquitetura.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

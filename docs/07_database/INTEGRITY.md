---
document: DATABASE_INTEGRITY
title: Database Integrity
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Database
purpose: Definir mecanismos de integridade e consistência dos dados.
audience:
- AI
- Developer
depends_on:
- 07_database/MODELING.md
related_documents:
- 07_database/TENANCY.md
---

# Data Integrity

## Constraints

Utilizar quando aplicável:

- Primary Key;
- Foreign Key;
- Unique Constraint;
- Check Constraint;
- NOT NULL.

## Integridade referencial

Relacionamentos devem impedir referências inválidas.

## Unicidade

Regras de unicidade devem ser protegidas no banco quando forem invariantes de persistência.

Exemplos:

```text
ExternalReference + Provider
Tenant + BusinessKey
```

O conjunto exato depende da entidade.

## Concorrência

Não assumir que duas requisições nunca ocorrerão simultaneamente.

Quando necessário:

- transaction;
- unique constraint;
- optimistic concurrency;
- idempotency.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

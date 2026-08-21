---
document: DATABASE_MIGRATIONS
title: Database Migrations
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Database
purpose: Definir controle de evolução do schema.
audience:
- AI
- Developer
depends_on:
- 06_backend/README.md
related_documents:
- 07_database/MODELING.md
- 07_database/TODO.md
---

# Database Migrations

## Princípios

- Alterações de schema devem ser versionadas.
- Migration deve ser reproduzível.
- Não editar migrations já aplicadas em ambientes compartilhados.
- Mudanças destrutivas exigem planejamento explícito.
- Dados existentes devem ser considerados antes de alterar constraints ou tipos.

## Fluxo

```mermaid
flowchart LR
A[Model Change] --> B[Create Migration] --> C[Review] --> D[Apply Development] --> E[Test] --> F[Deploy]
```

## Alterações destrutivas

Exemplos:

- remover coluna;
- remover tabela;
- reduzir capacidade de tipo;
- alterar relacionamento.

Devem possuir estratégia de migração de dados quando necessário.

## Rollback

Quando rollback automático não for seguro, definir procedimento de recuperação.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

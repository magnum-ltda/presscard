---
document: DATABASE_INDEXES
title: Database Indexing Standards
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Database
purpose: Definir critérios para criação e manutenção de índices.
audience:
- AI
- Developer
depends_on:
- 07_database/MODELING.md
- 06_backend/README.md
related_documents:
- 07_database/PERFORMANCE.md
---

# Indexes

## Princípios

- Criar índices para consultas relevantes.
- Não criar índices indiscriminadamente.
- Foreign Keys frequentemente exigem avaliação de indexação.
- Consultas tenant-scoped devem considerar o padrão de filtro.
- Índices compostos devem seguir a ordem real das consultas.
- Índices devem ser avaliados após mudanças importantes de acesso.

## Exemplo

Consulta:

```sql
WHERE CompanyId = @companyId
  AND Status = @status
ORDER BY CreatedAt DESC
```

Pode justificar avaliação de índice composto envolvendo:

```text
CompanyId
Status
CreatedAt
```

A definição final deve considerar planos de execução e volume real.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

---
document: DATABASE_PERFORMANCE
title: Database Performance
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Database
purpose: Definir práticas de desempenho para Firestore.
audience:
- AI
- Developer
depends_on:
- 07_database/INDEXES.md
- 07_database/MODELING.md
related_documents:
- 07_database/ARCHITECTURE.md
---

# Database Performance

## Princípios

- Evitar consultas sem filtros quando o volume puder crescer.
- Utilizar paginação em listagens grandes.
- Selecionar somente as colunas necessárias quando apropriado.
- Evitar N+1 queries.
- Avaliar padrões de leitura e índices.
- Monitorar consultas lentas.
- Não adicionar índices sem avaliar custo de escrita e armazenamento.

## Paginação

Listagens administrativas e relatórios devem possuir estratégia de paginação quando o volume justificar.

## Relatórios

Consultas analíticas pesadas não devem bloquear desnecessariamente operações transacionais.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

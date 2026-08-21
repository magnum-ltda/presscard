---
document: DATABASE_MODELING
title: Database Modeling Standards
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Database
purpose: Definir padrões de modelagem relacional.
audience:
- AI
- Developer
depends_on:
- 04_modules/README.md
related_documents:
- 07_database/TENANCY.md
- 07_database/INTEGRITY.md
---

# Database Modeling

## Princípios

- Tabelas devem representar conceitos persistidos.
- Chaves primárias devem ser estáveis.
- Foreign Keys devem ser utilizadas para relações reais.
- Nomes devem seguir uma convenção única no projeto.
- Tipos devem refletir o domínio sem desperdício desnecessário.
- Campos obrigatórios devem ser NOT NULL quando o domínio exigir.
- Datas devem representar claramente criação, atualização e demais eventos relevantes.

## Entidades

A modelagem deve considerar os módulos:

- Companies;
- Employees;
- Partners;
- Benefits;
- Catalog;
- Bookings;
- Payments;
- Commissions;
- Notifications;
- Administration;
- Audit.

## Auditoria de dados

Quando aplicável:

```text
CreatedAt
UpdatedAt
CreatedBy
UpdatedBy
```

A necessidade deve ser definida por entidade e caso de uso.

## Soft Delete

Não utilizar soft delete automaticamente em todas as tabelas.

Quando necessário, documentar o motivo e o comportamento esperado.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

---
document: DATABASE_TENANCY
title: Database Multi-Tenant Strategy
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Database
purpose: Definir regras de isolamento de dados por Tenant.
audience:
- AI
- Developer
depends_on:
- 03_business/BUSINESS_RULES.md
- 04_modules/README.md
- 06_backend/README.md
related_documents:
- 04_modules/security/README.md
- 07_database/MODELING.md
---

# Database Tenancy

## Princípio

Dados pertencentes a uma empresa/tenant não podem ser acessados por outro tenant.

## Modelo

Quando uma entidade for tenant-scoped, ela deve possuir referência ao Tenant/Company conforme o modelo de domínio definido.

```text
Company
   ↓
Tenant-scoped entities
```

## Regras

- Toda consulta tenant-scoped deve aplicar o contexto correto.
- O backend é responsável por determinar e validar o Tenant.
- Não confiar apenas em filtros enviados pelo frontend.
- Foreign Keys devem impedir referências inválidas.
- Índices devem considerar Tenant quando isso fizer parte das consultas.
- Dados globais devem ser explicitamente identificados como globais.

## Testes

Devem existir cenários que comprovem:

```text
Tenant A → dados de A = permitido
Tenant A → dados de B = negado
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

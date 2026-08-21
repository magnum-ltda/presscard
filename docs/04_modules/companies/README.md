---
document: COMPANIES_MODULE
title: Associated Companies Module
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Companies
purpose: Definir o módulo responsável pelo gerenciamento das Associated Companies.
audience:
- AI
- Developer
- Product Owner
depends_on:
- 02_architecture/ARCHITECTURE.md
- 02_architecture/DOMAIN_MODEL.md
- 02_architecture/MULTI_TENANT.md
- 03_business/BUSINESS_RULES.md
related_documents:
- 04_modules/companies/RULES.md
- 04_modules/companies/ENTITIES.md
- 04_modules/companies/FLOW.md
- 04_modules/companies/API.md
- 04_modules/companies/COMPONENTS.md
- 04_modules/companies/SERVICES.md
---

# Associated Companies

## Objetivo

O módulo Companies é responsável pelo gerenciamento das Empresas Associadas (Associated Companies) que utilizam a plataforma Presscard.

Uma Associated Company representa uma organização cliente da Presscard e funciona como um Tenant.

## Responsabilidades

O módulo deve permitir:

- cadastrar empresas;
- editar dados;
- ativar e desativar empresas;
- configurar dados institucionais;
- gerenciar administradores da empresa;
- consultar funcionários vinculados;
- consultar benefícios da empresa;
- acompanhar indicadores da empresa.

## Escopo

Incluído:

- identificação da empresa;
- dados de contato;
- endereço;
- status;
- administradores;
- configurações do Tenant;
- histórico administrativo.

Não incluído:

- cadastro detalhado de Employees;
- criação de Benefits;
- gestão de Commercial Partners;
- Bookings;
- Payments;
- Commissions.

Essas responsabilidades pertencem aos respectivos módulos.

## Ciclo de vida

```text
Configuração
    ↓
Ativa
    ↓
Suspensa
    ↓
Desativada
```

Uma empresa desativada permanece armazenada para preservação do histórico.

## Multi-Tenant

Cada Associated Company possui um Tenant próprio.

Dados pertencentes à empresa devem ser isolados de outros Tenants.

## Atores

### Platform Administrator

Gerencia empresas globalmente.

### Company Administrator

Gerencia somente sua própria empresa.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

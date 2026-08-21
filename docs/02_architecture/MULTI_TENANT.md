---
document: MULTI_TENANT
title: Presscard Multi-Tenant Architecture
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
purpose: Definir a estratégia oficial de multiempresa (multi-tenant) da plataforma
  Presscard.
audience:
- AI
- Developer
- Architect
updated_by_antigravity: false
depends_on:
- 01_project/PROJECT.md
- 02_architecture/DOMAIN_MODEL.md
- 02_architecture/ARCHITECTURE.md
related_documents:
- 02_architecture/MODULE_MAP.md
- 03_business/BUSINESS_RULES.md
---

# Multi-Tenant

## Objetivo

A Presscard é uma plataforma SaaS preparada para atender diversas Empresas Associadas utilizando uma única aplicação.

Este documento define como os dados serão organizados e isolados entre empresas.

---

# Filosofia

A plataforma é única.

Os dados pertencem às empresas.

Toda implementação deve considerar que múltiplas empresas utilizarão a plataforma simultaneamente.

Nenhuma regra deve assumir a existência de apenas uma empresa.

---

# Tenant

Na Presscard, um Tenant representa uma Empresa Associada.

Cada Tenant possui:

- funcionários;
- benefícios;
- configurações;
- permissões;
- campanhas;
- histórico.

---

# Isolamento

Os dados de um Tenant nunca devem ser acessados por outro Tenant.

O isolamento deve ser garantido pela aplicação.

Toda consulta deve considerar o Tenant ativo.

---

# Estrutura Conceitual

```mermaid
flowchart TB

Presscard

↓

Associated Company (Tenant)

↓

Employees

Benefits

Configurations

Campaigns

Reports
```

Cada empresa possui seu próprio contexto de negócio.

---

# Dados Compartilhados

Alguns dados pertencem à plataforma e são compartilhados.

Exemplos:

- categorias;
- países;
- estados;
- cidades;
- tipos de parceiro;
- parâmetros globais.

Esses dados não pertencem a nenhum Tenant.

---

# Dados Exclusivos

Exemplos de dados exclusivos de um Tenant:

- funcionários;
- benefícios;
- campanhas;
- configurações;
- histórico;
- indicadores internos.

---

# Parceiros Comerciais

Os Parceiros Comerciais pertencem à plataforma.

Um mesmo parceiro poderá atender diversas Empresas Associadas.

Exemplo:

Hotel ABC

↓

Empresa A

Empresa B

Empresa C

Cada empresa poderá possuir benefícios diferentes para o mesmo parceiro.

---

# Benefícios

Benefícios pertencem às Empresas Associadas.

Exemplo:

Empresa A

Hotel ABC

↓

15%

---

Empresa B

Hotel ABC

↓

10%

---

Empresa C

Hotel ABC

↓

20%

O parceiro é o mesmo.

O benefício é diferente.

---

# Funcionários

Funcionários pertencem a apenas uma Empresa Associada.

Nunca compartilhar funcionários entre empresas.

---

# Reservas

Reservas pertencem ao funcionário.

O funcionário pertence à empresa.

Consequentemente, toda reserva pertence indiretamente a um Tenant.

---

# Pagamentos

Pagamentos seguem a mesma regra.

Sempre associados ao contexto da empresa.

---

# Permissões

Toda autorização deverá considerar:

- usuário;
- perfil;
- tenant.

Nunca validar apenas o usuário.

---

# Administração

Existem dois níveis administrativos.

## Administração da Plataforma

Responsável por:

- cadastrar empresas;
- cadastrar parceiros;
- administrar parâmetros globais;
- acompanhar indicadores gerais.

---

## Administração da Empresa

Responsável por:

- funcionários;
- benefícios;
- campanhas;
- permissões internas.

Não possui acesso aos dados das demais empresas.

---

# Escalabilidade

A arquitetura deve suportar:

- dezenas de empresas;
- centenas de empresas;
- milhares de empresas.

Sem necessidade de alteração arquitetural.

---

# Regras

Toda entidade deverá responder à seguinte pergunta:

"Este dado pertence à plataforma ou pertence a uma empresa?"

Caso pertença à empresa:

Deve respeitar o Tenant.

Caso pertença à plataforma:

Pode ser compartilhado.

---

# Checklist

Antes de criar uma entidade verificar:

☐ Pertence à plataforma?

☐ Pertence à empresa?

☐ Deve ser compartilhada?

☐ Deve ser isolada?

☐ Possui impacto em permissões?

---

# Objetivo Final

Permitir que milhares de empresas utilizem a mesma plataforma de forma totalmente isolada, segura e transparente.

---

# Histórico

## Versão 1.0.0

- Definição da arquitetura Multi-Tenant da Presscard.
---
document: COMPANIES_FLOW
title: Associated Companies Module Flows
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Companies
purpose: Definir os fluxos funcionais do módulo Companies.
depends_on:
- 04_modules/companies/README.md
- 04_modules/companies/RULES.md
- 04_modules/companies/ENTITIES.md
---

# Companies Flows

## Cadastro

```mermaid
flowchart LR
A[Platform Administrator]
--> B[Nova Associated Company]
--> C[Informar Dados]
--> D[Validar]
--> E[Criar Tenant]
--> F[Criar Company Administrator]
--> G[Registrar Auditoria]
```

## Ativação

```mermaid
flowchart LR
A[Company em Configuração]
--> B[Validar Dados Obrigatórios]
--> C[Validar Administrator]
--> D[Ativar]
--> E[Registrar Auditoria]
```

## Atualização

```mermaid
flowchart LR
A[Selecionar Empresa]
--> B[Editar Dados]
--> C[Validar]
--> D[Salvar]
--> E[Registrar AuditLog]
```

## Suspensão

```mermaid
flowchart LR
A[Empresa Ativa]
--> B[Confirmar Suspensão]
--> C[Suspender]
--> D[Bloquear Novas Operações]
--> E[Registrar Auditoria]
```

## Desativação

```mermaid
flowchart LR
A[Empresa]
--> B[Confirmar Desativação]
--> C[Desativar]
--> D[Impedir Novas Operações]
--> E[Preservar Histórico]
--> F[Registrar Auditoria]
```

## Consulta pelo Company Administrator

```mermaid
flowchart LR
A[Login]
--> B[Validar Tenant]
--> C[Dashboard da Empresa]
--> D[Consultar Dados Próprios]
```

## Erro de Tenant

```text
Requisição
  ↓
Autenticação
  ↓
Autorização
  ↓
Validar Tenant
  ↓
Tenant incompatível
  ↓
Acesso negado
  ↓
Registrar evento de segurança
```

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

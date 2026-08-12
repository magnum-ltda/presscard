---
document: BENEFITS_FLOW
title: Benefits Module Flows
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard
module: Benefits

purpose:
  Definir os fluxos funcionais do módulo Benefits.

depends_on:
  - README
  - RULES
  - ENTITIES
---

# Benefits Flows

## Criar Benefit

```mermaid
flowchart LR
A[Company Administrator]
--> B[Novo Benefit]
--> C[Selecionar Partner]
--> D[Definir Condição]
--> E[Definir Elegibilidade]
--> F[Definir Validade]
--> G[Validar]
--> H[Salvar Draft]
--> I[Registrar Auditoria]
```

## Publicar

```mermaid
flowchart LR
A[Draft]
--> B[Validar Dados]
--> C[Validar Partner]
--> D[Validar Regras]
--> E[Ativar]
--> F[Disponibilizar no Catálogo]
--> G[Registrar Auditoria]
```

## Consultar catálogo

```mermaid
flowchart LR
A[Employee]
--> B[Catálogo]
--> C[Filtrar]
--> D[Selecionar Benefit]
--> E[Visualizar Detalhes]
--> F[Validar Elegibilidade]
```

## Utilizar Benefit sem Booking

```mermaid
flowchart LR
A[Selecionar Benefit]
--> B[Validar Elegibilidade]
--> C[Validar Validade]
--> D[Aplicar Condição]
--> E[Registrar Utilização]
```

## Utilizar Benefit com Booking

```mermaid
flowchart LR
A[Selecionar Benefit]
--> B[Escolher Resource]
--> C[Validar Disponibilidade]
--> D[Validar Elegibilidade]
--> E[Criar Booking]
--> F[Checkout]
--> G[Aplicar Benefit]
--> H[Payment]
```

## Suspender

```mermaid
flowchart LR
A[Benefit Active]
--> B[Confirmar]
--> C[Suspender]
--> D[Remover do Catálogo]
--> E[Preservar Histórico]
--> F[AuditLog]
```

## Expiração

```mermaid
flowchart LR
A[Data Final Atingida]
--> B[Atualizar Status]
--> C[Expirar]
--> D[Remover do Catálogo]
```

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

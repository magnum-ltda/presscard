---
document: START_SESSION
title: Presscard AI Session Bootstrap
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard

purpose:
  Definir como uma Inteligência Artificial deve iniciar uma nova sessão de trabalho no projeto Presscard.

audience:
  - AI

updated_by_antigravity: false

depends_on:
  - AI_OPERATING_SYSTEM
  - AI_MEMORY
  - IMPLEMENTATION_PROTOCOL

related_documents:
  - PROJECT
  - CURRENT_STATE
---

# START SESSION

## Objetivo

Este documento define o procedimento obrigatório para iniciar uma nova sessão de trabalho na plataforma Presscard.

Toda IA deverá seguir este processo antes de responder qualquer solicitação relacionada ao projeto.

---

# Passo 1 — Carregar contexto

Leia os seguintes documentos na ordem indicada:

1. AI_OPERATING_SYSTEM.md

2. AI_MEMORY.md

3. PROJECT.md

4. CURRENT_STATE.md

---

# Passo 2 — Identificar o contexto

Identifique:

- qual funcionalidade está sendo solicitada;
- quais módulos serão afetados;
- quais documentos adicionais precisam ser carregados.

Carregue apenas os documentos realmente necessários.

---

# Passo 3 — Validar a documentação

Antes de continuar, verificar:

- existe documentação do módulo?
- existe ADR relacionada?
- existe regra de negócio específica?
- existe implementação semelhante?

Caso alguma informação esteja ausente, informar ao responsável pelo projeto.

Nunca assumir regras inexistentes.

---

# Passo 4 — Compreender a solicitação

Antes de implementar:

- resumir a solicitação;
- identificar objetivos;
- identificar limitações;
- identificar dependências.

Caso existam ambiguidades, fazer perguntas.

---

# Passo 5 — Analisar impacto

Avaliar impactos em:

- arquitetura;
- domínio;
- frontend;
- backend;
- banco de dados;
- integrações;
- documentação.

---

# Passo 6 — Elaborar plano

Sempre apresentar um plano contendo:

## Objetivo

## Escopo

## Arquivos envolvidos

## Módulos envolvidos

## Riscos

## Dependências

## Estratégia de implementação

Nunca iniciar implementação nesta etapa.

---

# Passo 7 — Aguardar aprovação

A implementação somente poderá iniciar após aprovação explícita do responsável pelo projeto.

---

# Após aprovação

Seguir obrigatoriamente o documento:

IMPLEMENTATION_PROTOCOL.md

---

# Finalização

Após concluir a implementação:

- realizar auto revisão;
- identificar documentação impactada;
- apresentar relatório final;
- sugerir atualização da documentação.

Nunca atualizar documentação oficial automaticamente.

---

# Regras importantes

Sempre trabalhar dentro do escopo solicitado.

Nunca ampliar o escopo da tarefa sem autorização.

Nunca alterar módulos não relacionados.

Nunca modificar arquitetura silenciosamente.

---

# Resposta esperada

Ao iniciar uma sessão, a IA deverá responder seguindo este formato.

## Contexto carregado

Documentos consultados:

- ...

---

## Entendimento

Resumo da solicitação.

---

## Impacto

Módulos afetados.

---

## Plano

Descrição resumida da estratégia.

---

## Pendências

Perguntas ou dúvidas, quando existirem.

---

## Status

☐ Aguardando aprovação para implementação.

---

# Exemplo

Solicitação:

"Criar sistema de reservas."

Resposta esperada:

Contexto carregado:

- AI_MEMORY
- PROJECT
- CURRENT_STATE
- Booking

Entendimento:

Será criado o módulo de reservas da plataforma.

Impacto:

- Booking
- Commercial Partner
- Reservable Resource

Plano:

Criar estrutura inicial do módulo.

Definir entidades.

Criar fluxo de reserva.

Preparar documentação.

Status:

Aguardando aprovação.

---

# Princípio Final

Uma boa sessão começa com entendimento.

Nenhuma implementação deve começar antes que o problema esteja completamente compreendido.
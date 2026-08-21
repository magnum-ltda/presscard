---
document: PROMPTS_DOCUMENTATION
title: Presscard AI Prompts
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Prompts
purpose: Centralizar prompts oficiais para desenvolvimento, revisão, testes e manutenção
  da Presscard.
audience:
- AI
- Developer
- Product Owner
depends_on:
- 00_ai-os/AI_OPERATING_SYSTEM.md
- 01_project/PROJECT.md
- 02_architecture/ARCHITECTURE.md
- 03_business/BUSINESS_RULES.md
- 04_modules/README.md
related_documents:
- 09_prompts/IMPLEMENTATION.md
- 09_prompts/REVIEW.md
- 09_prompts/TESTING.md
- 09_prompts/DEBUGGING.md
- 09_prompts/DOCUMENTATION.md
- 09_prompts/TODO.md
---

# Presscard AI Prompts

## Objetivo

Fornecer prompts padronizados para que uma IA trabalhe no projeto sem ignorar arquitetura, regras de negócio, segurança ou documentação.

## Princípio

Prompts não substituem a documentação oficial.

A IA deve consultar os documentos relevantes antes de executar uma tarefa.

## Regra

Quando houver conflito entre um prompt e a documentação oficial do projeto, a documentação oficial deve prevalecer, salvo decisão registrada em `11_decisions`.

## Categorias

- implementação;
- revisão;
- testes;
- debugging;
- documentação;
- arquitetura;
- segurança.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo


## Source of Truth

A documentação oficial atualizada é a fonte de verdade para implementação.

Quando uma decisão relevante for aprovada em `11_decisions/`:
1. a decisão deve ser registrada;
2. os documentos oficiais afetados devem ser atualizados;
3. a documentação passa a refletir a decisão;
4. o ADR permanece como histórico e justificativa;
5. prompts e checklists devem ser atualizados quando necessário.

Um ADR aprovado não é uma segunda fonte permanente de regras.

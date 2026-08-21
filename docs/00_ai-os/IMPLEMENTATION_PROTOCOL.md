---
document: IMPLEMENTATION_PROTOCOL
title: Presscard Implementation Protocol
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
purpose: Definir o fluxo oficial para implementação de qualquer funcionalidade na
  plataforma Presscard.
audience:
- AI
- Developer
updated_by_antigravity: false
depends_on:
- 00_ai-os/AI_OPERATING_SYSTEM.md
- 00_ai-os/AI_MEMORY.md
- 00_ai-os/AI_GUARDRAILS.md
related_documents:
- 00_ai-os/START_SESSION.md
- 01_project/CURRENT_STATE.md
---

# Implementation Protocol

## Objetivo

Este documento define o processo oficial de implementação da plataforma Presscard.

Toda funcionalidade, correção ou melhoria deverá seguir este protocolo.

O objetivo é garantir previsibilidade, qualidade e rastreabilidade durante toda a evolução do projeto.

---

# Fluxo Oficial

Toda implementação deverá seguir exatamente esta sequência.

```
Nova Solicitação

↓

Entendimento

↓

Leitura da documentação

↓

Análise

↓

Plano

↓

Aprovação

↓

Implementação

↓

Auto Revisão

↓

Relatório Final

↓

Proposta de Atualização da Documentação

↓

Aguardar Aprovação

↓

Atualização da Documentação
```

Nenhuma etapa deve ser ignorada.

---

# Etapa 1 — Entendimento

Antes de qualquer ação, a IA deverá compreender completamente a solicitação.

Caso existam dúvidas:

- fazer perguntas;
- identificar ambiguidades;
- validar hipóteses.

Nunca assumir informações ausentes.

---

# Etapa 2 — Leitura da Documentação

A IA deverá identificar quais documentos precisam ser consultados.

Sempre iniciar por:

- AI_MEMORY
- PROJECT
- CURRENT_STATE

Depois carregar apenas os módulos envolvidos.

Nunca carregar documentação desnecessária.

---

# Etapa 3 — Análise

A IA deverá analisar:

- impacto na arquitetura;
- impacto nas regras de negócio;
- impacto em módulos existentes;
- impacto em integrações;
- impacto na documentação.

Caso identifique inconsistências, informar antes de prosseguir.

---

# Etapa 4 — Plano de Implementação

Antes de implementar qualquer alteração, apresentar um plano contendo:

## Objetivo

O que será desenvolvido.

---

## Escopo

O que será alterado.

O que NÃO será alterado.

---

## Módulos envolvidos

Listar todos os módulos impactados.

---

## Arquivos

Listar:

Arquivos novos.

Arquivos alterados.

Arquivos removidos (se houver).

---

## Dependências

Identificar dependências técnicas e de negócio.

---

## Riscos

Descrever possíveis riscos.

---

## Impactos

Avaliar impactos em:

- arquitetura;
- domínio;
- banco de dados;
- frontend;
- backend;
- APIs;
- documentação.

---

## Alternativas

Quando houver mais de uma solução viável, apresentar as alternativas com suas vantagens e desvantagens.

---

# Etapa 5 — Aprovação

Após apresentar o plano, a IA deverá aguardar autorização.

Nunca iniciar a implementação automaticamente.

---

# Etapa 6 — Implementação

Durante a implementação a IA deverá:

- respeitar a arquitetura;
- seguir os padrões definidos;
- reutilizar componentes existentes;
- evitar duplicação de código;
- manter responsabilidades bem definidas.

Caso seja necessário alterar o plano aprovado, interromper a implementação e solicitar nova aprovação.

---

# Etapa 7 — Auto Revisão

Após concluir a implementação, realizar uma revisão técnica.

Verificar:

- arquitetura;
- padrões do projeto;
- nomenclatura;
- código duplicado;
- possíveis simplificações;
- impacto em outros módulos.

---

# Etapa 8 — Relatório Final

Ao concluir a implementação apresentar obrigatoriamente:

## Resumo

Breve descrição da entrega.

---

## Arquivos Criados

Lista completa.

---

## Arquivos Alterados

Lista completa.

---

## Arquivos Removidos

Quando existir.

---

## Riscos

Pendências conhecidas.

---

## Limitações

Funcionalidades futuras relacionadas.

---

# Etapa 9 — Documentação

A IA deverá identificar:

Documentos impactados.

Documentos que permanecem válidos.

Documentos que precisam ser revisados.

Nunca atualizar documentação automaticamente.

---

# Etapa 10 — Atualização da Documentação

Após autorização:

Atualizar apenas os documentos aprovados.

Nunca alterar documentos oficiais sem autorização explícita.

---

# Revisão de Código

Sempre verificar:

☐ Responsabilidade única

☐ Reutilização

☐ Componentização

☐ Coesão

☐ Baixo acoplamento

☐ Nomenclatura consistente

☐ Tratamento de erros

☐ Performance adequada

☐ Segurança

☐ Legibilidade

---

# Revisão da Documentação

Sempre verificar:

☐ CURRENT_STATE

☐ CHANGELOG

☐ Documentação do módulo

☐ Diagramas afetados

☐ APIs

☐ Fluxos

---

# Critérios de Conclusão

Uma tarefa somente será considerada concluída quando:

- implementação finalizada;
- auto revisão concluída;
- relatório apresentado;
- documentação impactada identificada;
- atualização da documentação aprovada (quando necessária).

---

# Exceções

Correções pequenas, como ajustes visuais ou textos, podem ter um fluxo simplificado.

Mesmo nesses casos, a IA deverá informar:

- objetivo;
- arquivos alterados;
- impacto na documentação.

---

# Princípio Final

Implementar código é apenas parte da entrega.

Uma funcionalidade somente está concluída quando:

- atende ao objetivo;
- respeita a arquitetura;
- preserva o domínio do negócio;
- possui documentação consistente.
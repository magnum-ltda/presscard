---
document: QUALITY_TESTING_MODULE
title: Qualidade e Testes Module
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Quality
purpose: Definir o módulo de qualidade e testes da Presscard.
audience:
  - AI
  - Developer
  - Product Owner
depends_on:
  - ARCHITECTURE
  - BUSINESS_RULES
  - SECURITY
related_documents:
  - RULES
  - ENTITIES
  - FLOW
  - API
  - SERVICES
  - TODO
---

# Entities

## TestRun
- Id, Type, Status, StartedAt, CompletedAt

## TestCase
- Id, Name, Type, Status

## TestResult
- Id, TestRunId, TestCaseId, Status, Error, Duration

## QualityGate
- Id, Name, Rules, Status

## RegressionCase
- Id, SourceBug, Scenario, Status

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

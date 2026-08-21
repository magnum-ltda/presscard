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
- 02_architecture/ARCHITECTURE.md
- 03_business/BUSINESS_RULES.md
- 04_modules/security/README.md
related_documents:
- 04_modules/quality/RULES.md
- 04_modules/quality/ENTITIES.md
- 04_modules/quality/FLOW.md
- 04_modules/quality/API.md
- 04_modules/quality/SERVICES.md
- 04_modules/quality/TODO.md
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

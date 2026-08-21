---
document: REVIEW_CODE
title: Code Review
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Reviews
purpose: Padronizar revisão de qualidade e manutenção do código.
audience:
- AI
- Developer
depends_on:
- 06_backend/README.md
- 05_frontend/README.md
- 04_modules/quality/README.md
related_documents:
- 10_reviews/README.md
---

# Code Review

## Verificar

### Correção
- comportamento esperado;
- regras de negócio;
- edge cases;
- tratamento de erros.

### Design
- responsabilidade única;
- coesão;
- acoplamento;
- duplicação;
- legibilidade.

### Segurança
- authorization;
- Tenant isolation;
- validação;
- secrets;
- exposição de dados.

### Performance
- consultas desnecessárias;
- N+1;
- chamadas repetidas;
- processamento excessivo.

### Testes
- testes relevantes;
- regressão;
- casos negativos.

## Regra

Não aprovar somente porque o código compila.

## Resultado

Todo achado deve possuir:

```text
Severity
Location
Problem
Impact
Recommendation
```

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

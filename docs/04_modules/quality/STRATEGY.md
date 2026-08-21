---
document: QUALITY_STRATEGY
title: Estratégia de Testes
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
path: docs/04_modules/quality/STRATEGY.md
module: Quality
---

# Estratégia de Testes

## Pirâmide de cobertura

| Camada | Finalidade | Execução |
| --- | --- | --- |
| Unitários | Regras isoladas e validações | A cada alteração |
| Integração | Serviços, banco e mensageria | A cada alteração relevante |
| Contrato | Compatibilidade de APIs | Em mudanças de contrato |
| Ponta a ponta | Jornadas críticas | Pré-release e regressão |
| Exploratórios | Riscos e usabilidade | Conforme complexidade |

## Jornadas prioritárias

- Cadastro, autenticação e recuperação de acesso
- Elegibilidade de associado e empresa
- Descoberta e visualização de benefício
- Emissão, validação, cancelamento e expiração de resgate
- Reserva, pagamento, confirmação e reembolso quando aplicável
- Permissões administrativas, auditoria e integrações externas

## Critérios mínimos de saída

- Suites obrigatórias concluídas sem falhas críticas.
- Defeitos bloqueadores resolvidos ou rejeitados com justificativa registrada.
- Casos de aceite concluídos para o escopo entregue.
- Plano de rollback validado para mudanças de alto impacto.

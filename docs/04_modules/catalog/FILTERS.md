---
document: CATALOG_FILTERS
title: Catalog Filters
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Catalog
purpose: Definir filtros disponíveis no catálogo.
depends_on:
- 04_modules/catalog/README.md
- 04_modules/catalog/SEARCH.md
- 03_business/BENEFITS.md
- 04_modules/partners/README.md
---

# Filters

## Categorias

Exemplos:

- Hotel
- Restaurante
- Locadora
- Academia
- Farmácia
- Experiência

## Localização

Filtros:

- cidade;
- estado;
- distância;
- próximo de mim.

## Benefício

Filtros:

- percentual de desconto;
- faixa de valor;
- tipo de condição;
- benefícios ativos.

## Disponibilidade

Quando aplicável:

- disponível hoje;
- disponível em determinada data;
- recurso reservável.

## Parceiro

Filtros:

- parceiro;
- avaliação futura;
- status.

## Combinação

Filtros devem poder ser combinados.

Exemplo:

```text
Categoria = Hotel
+
Cidade = Belo Horizonte
+
Disponível = Sim
```

## Reset

O usuário deve conseguir limpar todos os filtros.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

---
document: CATALOG_SEARCH
title: Catalog Search
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard
module: Catalog

purpose:
  Definir o comportamento da pesquisa do catálogo.

depends_on:
  - CATALOG
  - BENEFITS
  - PARTNERS
---

# Search

## Objetivo

Permitir que o Employee encontre rapidamente benefícios e parceiros.

## Pesquisa textual

A pesquisa poderá considerar:

- nome do parceiro;
- nome do benefício;
- categoria;
- cidade;
- descrição;
- tipo de serviço.

## Exemplo

```text
"hotel"
"restaurante"
"aluguel de carro"
"hotel em Belo Horizonte"
```

## Busca por localização

Quando houver localização disponível, o sistema poderá considerar:

- cidade;
- estado;
- distância;
- latitude;
- longitude.

## Relevância

A ordenação poderá considerar:

1. disponibilidade;
2. elegibilidade;
3. correspondência textual;
4. distância;
5. relevância comercial.

A fórmula exata de ranking será definida durante a implementação.

## Autocomplete

O sistema poderá oferecer sugestões enquanto o usuário digita.

## Resultado vazio

Quando nenhum resultado for encontrado:

- informar claramente;
- sugerir alteração dos filtros;
- permitir nova pesquisa.

## Implementação

Status

☐ Não iniciado
☐ Parcial
☐ Completo

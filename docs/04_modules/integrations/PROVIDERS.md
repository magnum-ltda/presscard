# Integration Providers

## Objetivo

Registrar fornecedores que podem ser integrados à Presscard sem acoplar o domínio.

## Booking Providers

Exemplos futuros:

- Omnibees;
- fornecedor de hotéis;
- fornecedor de locadoras;
- outros provedores.

## Payment Providers

Exemplos:

- PIX gateway;
- cartão;
- outros meios suportados.

## Maps Providers

Exemplo:

- Google Maps.

## Notification Providers

Exemplos:

- Email provider;
- Push provider;
- SMS provider.

## Regra

A escolha do fornecedor deve ser uma decisão de configuração/arquitetura, não uma dependência espalhada no código.

## Novo fornecedor

Para adicionar um fornecedor:

1. definir/usar contrato interno;
2. criar adapter;
3. mapear request;
4. mapear response;
5. mapear erros;
6. implementar autenticação;
7. implementar idempotência quando necessária;
8. criar testes;
9. atualizar documentação.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

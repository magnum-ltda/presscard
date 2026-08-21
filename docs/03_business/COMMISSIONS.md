---
document: COMMISSIONS
title: Presscard Commission Specification
version: 1.0.0
status: Official
owner: Magnum Oliveira
project: Presscard
purpose: Definir o funcionamento do módulo de Comissões da plataforma Presscard.
audience:
- AI
- Developer
- Product Owner
updated_by_antigravity: false
depends_on:
- 03_business/BUSINESS_RULES.md
- 03_business/BOOKINGS.md
- 03_business/PAYMENTS.md
related_documents:
- 03_business/BENEFITS.md
---

# Commissions

## Objetivo

O módulo Commission é responsável por calcular, registrar, acompanhar e controlar as comissões geradas pelas transações realizadas na plataforma.

Este módulo não realiza pagamentos.

Este módulo não processa reservas.

Ele apenas calcula e controla a distribuição financeira.

---

# Definição

Uma Commission representa um valor financeiro gerado a partir de uma transação concluída.

Exemplo:

Valor da reserva

↓

Aplicação do benefício

↓

Pagamento

↓

Cálculo da comissão

↓

Repasse

---

# Responsabilidades

O módulo deve permitir:

- calcular comissão;
- registrar comissão;
- controlar status;
- registrar repasses;
- consultar histórico;
- recalcular quando autorizado;
- gerar auditoria.

---

# Conceitos

## Comissão da Plataforma

Valor destinado à Presscard.

---

## Desconto do Funcionário

Valor concedido ao Employee.

---

## Receita do Parceiro

Valor recebido pelo Commercial Partner.

---

# Exemplo

Hotel

Valor original

R$ 100,00

Desconto negociado

15%

Funcionário paga

R$ 85,00

Comissão Presscard

R$ 2,00

Parceiro recebe

R$ 83,00

---

# Regras

## COM-001

Toda Commission pertence exatamente a um Payment.

---

## COM-002

Commission somente poderá ser calculada após Payment Approved.

---

## COM-003

Commission nunca poderá existir sem uma transação financeira válida.

---

## COM-004

O cálculo deverá utilizar as regras vigentes no momento da compra.

---

## COM-005

Alterações futuras no Benefit não alteram comissões já registradas.

---

## COM-006

Comissões canceladas deverão manter histórico.

Nunca excluir registros.

---

## COM-007

O cálculo da comissão deverá ser centralizado exclusivamente no Commission Engine.

---

## COM-008

Nenhum outro módulo poderá calcular comissão.

---

## COM-009

Toda comissão deverá possuir rastreabilidade.

---

## COM-010

Toda alteração manual deverá ser registrada em auditoria.

---

# Componentes do Cálculo

```text
Valor Original

↓

Desconto

↓

Valor Pago

↓

Comissão

↓

Valor Líquido Parceiro
```

---

# Fórmula Conceitual

```text
Valor Original

-

Desconto Funcionário

=

Valor Pago

-

Comissão Plataforma

=

Valor Líquido Parceiro
```

A implementação da fórmula poderá variar conforme o parceiro comercial e futuras estratégias comerciais.

---

# Estados

```text
Calculada

↓

Pendente

↓

Aguardando Repasse

↓

Repassada

↓

Finalizada
```

Fluxo alternativo

```text
Calculada

↓

Cancelada
```

---

# Fluxo

```mermaid
flowchart LR

Booking Completed

↓

Payment Approved

↓

Commission Engine

↓

Commission Calculated

↓

Finance

↓

Partner Payment

↓

Completed
```

---

# Validações

Antes de calcular:

☑ Payment Approved

☑ Booking válido

☑ Commercial Partner ativo

☑ Benefit válido

☑ Regras vigentes

☑ Percentuais definidos

---

# Campos Obrigatórios

- Payment
- Booking
- Commercial Partner
- Valor Original
- Valor Pago
- Comissão
- Status
- Data de Cálculo

---

# Campos Opcionais

- Observações
- Referência Externa
- Número do Repasse
- Data do Repasse
- Justificativa de Ajuste

---

# Eventos

CommissionCalculated

CommissionUpdated

CommissionCancelled

CommissionTransferred

CommissionCompleted

---

# Casos de Uso

## Caso 1

Reserva concluída.

↓

Pagamento aprovado.

↓

Sistema calcula comissão automaticamente.

---

## Caso 2

Pagamento estornado.

↓

Comissão cancelada.

↓

Histórico preservado.

---

## Caso 3

Repasse realizado.

↓

Status atualizado para Repassada.

---

# Auditoria

Toda Commission deverá registrar:

- data do cálculo;
- usuário responsável (quando manual);
- Payment relacionado;
- Booking relacionado;
- Benefit aplicado;
- versão da regra utilizada.

---

# Integrações Futuras

O módulo poderá integrar com:

- Stripe Connect
- Mercado Pago Split
- Asaas Split
- Pagar.me Split
- ERP Financeiro
- Sistemas Contábeis

---

# Fora do Escopo

Este módulo não:

- realiza cobranças;
- recebe pagamentos;
- agenda reservas;
- concede benefícios.

Essas responsabilidades pertencem aos respectivos módulos.

---

# Implementação

Status

☐ Não iniciado

☐ Parcial

☐ Completo

---

# Histórico

## Versão 1.0.0

- Especificação inicial do módulo de Commission.
- Definição do fluxo de cálculo e repasse.
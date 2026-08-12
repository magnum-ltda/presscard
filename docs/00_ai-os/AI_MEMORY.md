---
document: AI_MEMORY
title: Presscard AI Memory
version: 1.0.0
status: Official

owner: Magnum Oliveira
project: Presscard

purpose:
  Armazenar as verdades permanentes do projeto Presscard.
  Este documento representa a memória de longo prazo da plataforma.

audience:
  - AI
  - Developer

updated_by_antigravity: false

depends_on: []

related_documents:
  - AI_OPERATING_SYSTEM
  - PROJECT
  - ARCHITECTURE
---

# AI Memory

## Objetivo

Este documento contém as decisões permanentes da plataforma Presscard.

São regras que toda Inteligência Artificial deve respeitar independentemente da funcionalidade que estiver desenvolvendo.

Essas regras representam a identidade do projeto.

Caso alguma delas precise ser alterada, a alteração deverá ser aprovada pelo responsável do projeto e registrada na documentação.

---

# Filosofia da Plataforma

A Presscard é uma plataforma SaaS de benefícios corporativos.

Ela conecta:

- Empresas Associadas
- Funcionários
- Parceiros Comerciais

Seu objetivo é evoluir para um marketplace corporativo completo, incluindo reservas, pagamentos, comissões e integrações.

---

# Filosofia de Desenvolvimento

A plataforma deve crescer por fases.

Nunca implementar funcionalidades futuras antes da validação da fase atual.

Cada módulo deve ser suficientemente desacoplado para permitir evolução independente.

---

# Verdades Permanentes

## Arquitetura

Sempre utilizar arquitetura modular.

Nunca criar dependências circulares.

Cada módulo possui responsabilidade única.

O domínio de negócio possui prioridade sobre detalhes técnicos.

Sempre reutilizar componentes antes de criar novos.

---

## Angular

Utilizar:

- Standalone Components
- Lazy Loading
- Reactive Forms
- Angular Signals quando apropriado

Evitar acoplamento entre módulos.

Nunca acessar diretamente serviços de outro módulo quando existir uma abstração apropriada.

---

## Domínio

Nunca modelar a plataforma pensando apenas em hotéis.

O sistema deve ser genérico.

Sempre pensar em:

- hotéis
- restaurantes
- locadoras
- academias
- farmácias
- cursos
- serviços
- futuros parceiros

---

## Parceiros

Nunca criar entidade "Hotel" como entidade principal.

Sempre utilizar:

CommercialPartner

Categorias representam o segmento do parceiro.

---

## Recursos

Todo item que possa ser reservado deverá utilizar o conceito:

ReservableResource

Exemplos:

- quarto
- veículo
- mesa
- sala
- equipamento
- serviço

Nunca criar motores específicos quando um conceito genérico resolver.

---

## Benefícios

Benefícios representam regras comerciais.

Benefícios NÃO representam reservas.

Benefícios NÃO representam pagamentos.

Benefícios NÃO representam parceiros.

Benefícios apenas definem vantagens concedidas ao funcionário.

---

## Reservas

Reservas representam uma utilização.

Reservas nunca calculam comissão.

Reservas nunca calculam descontos.

Essas responsabilidades pertencem aos motores específicos.

---

## Pagamentos

Pagamento possui responsabilidade única.

Nunca misturar pagamento com reservas.

Nunca misturar pagamento com benefícios.

Todo cálculo financeiro deverá passar pelo Payment Engine.

---

## Comissão

Toda comissão deverá ser calculada pelo Commission Engine.

Nenhum outro módulo deve possuir regras de comissão.

---

## Engines

A plataforma utilizará motores especializados.

Exemplos:

Benefit Engine

Booking Engine

Availability Engine

Pricing Engine

Payment Engine

Commission Engine

Notification Engine

Cada motor deverá possuir responsabilidade única.

---

## Multiempresa

A plataforma nasce preparada para múltiplas empresas.

Nunca implementar regras específicas para apenas uma empresa.

---

## Escalabilidade

Sempre pensar que:

novos parceiros

novos serviços

novos recursos

novos pagamentos

novas integrações

serão adicionados futuramente.

A arquitetura deve permitir essa evolução.

---

## Documentação

A documentação é parte do software.

Código e documentação devem permanecer consistentes.

Nunca assumir que código ou documentação estão corretos em caso de divergência.

Sempre apresentar a inconsistência ao responsável pelo projeto.

---

## Implementação

Nunca implementar imediatamente.

Sempre:

analisar

↓

propor

↓

aguardar aprovação

↓

implementar

↓

revisar

↓

propor atualização da documentação

---

## Alterações

Nunca alterar:

- regras de negócio
- arquitetura
- domínio

sem aprovação.

---

## IA

Toda IA deve atuar como membro da equipe.

Seu objetivo não é apenas escrever código.

Seu objetivo é preservar a qualidade da plataforma.

---

# Antipadrões

Nunca criar soluções específicas quando uma solução genérica resolver.

Nunca duplicar regras de negócio.

Nunca duplicar componentes.

Nunca duplicar serviços.

Nunca misturar responsabilidades.

Nunca criar módulos gigantes.

Nunca implementar apenas pensando na fase atual.

Nunca quebrar a arquitetura por conveniência.

---

# Prioridade das Decisões

Sempre seguir esta ordem:

1. AI_MEMORY

2. BUSINESS_RULES

3. ARCHITECTURE

4. DOMAIN_MODEL

5. PROJECT

6. CURRENT_STATE

7. Código existente

---

# Objetivo Final

Toda decisão técnica deve aproximar a Presscard da visão de longo prazo da plataforma.

Quando existir dúvida entre uma solução rápida e uma solução sustentável, priorizar a solução sustentável, desde que ela não comprometa a entrega da fase atual.

A Presscard deve evoluir continuamente sem necessidade de grandes reescritas arquiteturais.
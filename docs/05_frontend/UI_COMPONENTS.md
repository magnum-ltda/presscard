---
document: FRONTEND_UI_COMPONENTS
title: Frontend UI Components
version: 1.1.0
status: Official
owner: Magnum Oliveira
project: Presscard
module: Frontend
purpose: Definir padrões para componentes visuais reutilizáveis.
audience:
- AI
- Developer
depends_on:
- 05_frontend/ARCHITECTURE.md
related_documents: []
---

# UI Components

## Princípios

- Componentes compartilhados devem ser genéricos.
- Componentes de negócio permanecem dentro da feature.
- Angular Material deve ser utilizado de forma consistente.
- Evitar duplicação de markup.
- Acessibilidade deve ser considerada.
- Componentes não devem conter chamadas HTTP diretamente quando um service/facade for apropriado.

## Organização obrigatória dos arquivos de componente

Todo componente Angular deve manter a implementação dividida em três arquivos no mesmo diretório:

```text
nome-do-componente.component.ts     # classe, metadados e lógica TypeScript
nome-do-componente.component.html   # template
nome-do-componente.component.scss   # estilos locais
```

Regras:

- Usar `templateUrl` e `styleUrl` (ou `styleUrls`) no decorator `@Component`.
- Não utilizar `template` ou `styles` inline, inclusive em componentes pequenos, layouts e o componente raiz.
- Novos componentes devem usar SCSS, padrão configurado pelo projeto. Arquivos CSS legados existentes devem ser migrados para SCSS quando o respectivo componente for revisado.
- Arquivos de template e estilo devem permanecer específicos ao componente; estilos compartilhados pertencem a `src/styles.scss` ou a um recurso compartilhado apropriado.
- Uma alteração de componente somente estará concluída quando os três arquivos existirem e suas referências no decorator forem válidas.

## Categorias e Componentes Disponíveis

```text
Shared UI (`src/app/shared/components/`)
├── currency-percentage-input/   # CurrencyPercentageInputComponent (R$ / %)
├── skeleton-table/              # SkeletonTableComponent (Loading placeholder)
├── confirm-modal/               # ConfirmModalComponent (Modal genérico de confirmação)
├── offer-card/                  # OfferCardComponent (Card de benefício/oferta)
├── whatsapp-button/             # WhatsappButtonComponent (Botão de ação do WhatsApp)
└── spinner/                     # SpinnerComponent (Indicador de loading)
```

### Detalhamento dos Componentes Compartilhados

#### `CurrencyPercentageInputComponent`
- **Caminho**: `src/app/shared/components/currency-percentage-input`
- **Descrição**: Input inteligente para valores monetários (`FIXED` com prefixo `R$`) e percentuais (`PERCENTAGE` com sufixo `%`).
- **Comportamento**: Digitação estilo caixa eletrônico / ATM (deslocamento dos centavos da direita para a esquerda), suporte a `ControlValueAccessor` (integração nativa com Reactive Forms), validação e formatação automática com locale `pt-BR`.

#### `SkeletonTableComponent`
- **Caminho**: `src/app/shared/components/skeleton-table`
- **Descrição**: Indicador visual de carregamento para listagens tabulares, configurável por número de colunas e linhas.

#### `ConfirmModalComponent`
- **Caminho**: `src/app/shared/components/confirm-modal`
- **Descrição**: Modal reutilizável para confirmação de ações críticas (remoção, alteração de status), desacoplado via `ConfirmDialogService`.

#### `OfferCardComponent`
- **Caminho**: `src/app/shared/components/offer-card`
- **Descrição**: Card padronizado para exibição de parceiros e benefícios no catálogo.

#### `WhatsappButtonComponent`
- **Caminho**: `src/app/shared/components/whatsapp-button`
- **Descrição**: Botão de integração direta com API do WhatsApp Web / Mobile para facilidade de contato.

## Forms

Formulários devem possuir:

- validação síncrona e assíncrona (ex: busca e validação de CEP via ViaCEP);
- aplicação de máscaras apropriadas com `ngx-mask` (`CPF`, `CNPJ`, `Telefone/WhatsApp`, `CEP`, `Data DD/MM/AAAA`);
- mensagens de erro claras e contextuais;
- estado de loading e desabilitação durante submissão;
- prevenção de submissão duplicada;
- feedback de sucesso/erro.

## Implementação

Status

☐ Não iniciado
☑ Parcial
☐ Completo

---
document: FRONTEND_UI_COMPONENTS
title: Frontend UI Components
version: 1.0.0
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

## Categorias

```text
Shared UI
├── Buttons
├── Inputs
├── Tables
├── Dialogs
├── Cards
├── Loading
├── Empty States
└── Error States
```

## Forms

Formulários devem possuir:

- validação;
- mensagens de erro;
- estado de loading;
- prevenção de submissão duplicada;
- feedback de sucesso/erro.

## Implementação

☐ Não iniciado
☐ Parcial
☐ Completo

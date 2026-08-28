---
document: PROJECT_CHANGELOG
title: Presscard Changelog
version: 1.0.0
status: Living Document
owner: Magnum Oliveira
project: Presscard
path: docs/01_project/CHANGELOG.md
module: Project
---
---

# Changelog

## [Unreleased]

### Adicionado
- **CurrencyPercentageInputComponent**: Novo componente genérico para inserção de valores monetários e percentuais (`R$` e `%`), com máscara de digitação inteligente da direita para a esquerda e limite de valores.
- **Validações e Máscaras nas Telas Administrativas**:
  - **Parceiros (`PartnersComponent`)**:
    - Máscaras de entrada para Telefone e WhatsApp (`(00) 00000-0000`), com validação de 10 a 11 dígitos.
    - Máscara de CEP (`00000-000`) com consulta automática ao serviço ViaCEP e tratamento/exibição de mensagens de erro específicas.
    - Validação com expressões regulares para Link Externo (`http/https`) e Link do Google Maps.
    - Integração do `CurrencyPercentageInputComponent` para o campo de Valor da Comissão (`commissionValue`) com alternância dinâmica entre percentual e valor fixo.
    - Formatação de telefone na listagem de parceiros.
  - **Empresas Associadas (`CompaniesComponent`)**:
    - Aplicação de máscara de CNPJ (`00.000.000/0000-00`) no formulário e formatação com pipe na tabela de listagem.
    - Sanitização e tratamento aprimorado de erros de validação de CNPJ (obrigatório e formato).
  - **Benefícios (`BenefitsMgmtComponent`)**:
    - Utilização do `CurrencyPercentageInputComponent` para os campos de Desconto Total, Desconto do Usuário e Comissão da Plataforma.
    - Campo de validade com máscara de data brasileira (`DD/MM/AAAA`) e conversão bidirecional transparente com o formato ISO (`YYYY-MM-DD`) no backend.
  - **Funcionários (`EmployeesComponent`)**:
    - Aplicação de máscaras de CPF (`000.000.000-00`) e telefone, com validações customizadas.
- **Autenticação**:
  - Suporte a login usando identificador de usuário do sistema / CPF / e-mail e integração com `UserManagementService`.


# Presscard Knowledge Base

> Documentação oficial da plataforma Presscard.

---

## Objetivo

A Presscard Knowledge Base é a fonte oficial de conhecimento do projeto.

Seu objetivo é centralizar todas as informações necessárias para o desenvolvimento da plataforma, servindo como referência para:

- desenvolvimento de software;
- evolução da arquitetura;
- definição das regras de negócio;
- documentação técnica;
- desenvolvimento assistido por Inteligência Artificial.

Esta documentação faz parte do projeto e deve evoluir junto com o código.

---

# Filosofia

A documentação da Presscard foi projetada seguindo o conceito **AI First Documentation**.

Isso significa que ela foi escrita para ser compreendida tanto por desenvolvedores quanto por Inteligências Artificiais.

Cada documento possui uma única responsabilidade e pode ser utilizado de forma independente, reduzindo o consumo de contexto das IAs.

---

# Estrutura da documentação

```
docs/

README.md
    Índice principal.

00_ai-os/
    Sistema operacional utilizado pelas IAs.

01_project/
    Informações oficiais do projeto.

02_architecture/
    Arquitetura da plataforma.

03_business/
    Regras de negócio.

04_modules/
    Documentação dos módulos.

05_frontend/
    Padrões Angular.

06_backend/
    Backend e integrações.

07_database/
    Modelagem de dados.

08_diagrams/
    Diagramas Mermaid.

09_prompts/
    Prompts oficiais.

10_reviews/
    Revisões técnicas.

11_decisions/
    Architecture Decision Records.
```

---

# Organização

Cada documento possui uma responsabilidade única.

Evite duplicar informações entre documentos.

Sempre consulte apenas os documentos relacionados à funcionalidade em desenvolvimento.

---

# Fluxo para Inteligências Artificiais

Toda IA deverá seguir a seguinte ordem de leitura:

```
AI_OPERATING_SYSTEM

↓

AI_MEMORY

↓

PROJECT

↓

CURRENT_STATE

↓

Documentação do módulo solicitado
```

Nenhuma IA deve iniciar uma implementação sem compreender esses documentos.

---

# Fluxo de Desenvolvimento

Toda funcionalidade deverá seguir o seguinte processo:

```
Solicitação

↓

Leitura da documentação

↓

Análise

↓

Plano de implementação

↓

Aprovação

↓

Implementação

↓

Auto revisão

↓

Proposta de atualização da documentação

↓

Aprovação

↓

Atualização da documentação
```

---

# Tipos de documentação

A documentação da Presscard é dividida em duas categorias.

## Documentação Oficial

Representa decisões permanentes do projeto.

Exemplos:

- PROJECT
- PROJECT_VISION
- AI_MEMORY
- BUSINESS_RULES
- DOMAIN_MODEL
- ARCHITECTURE

Essa documentação deve ser alterada somente após decisão do responsável pelo projeto.

---

## Documentação Técnica

Representa o estado atual da implementação.

Exemplos:

- CURRENT_STATE
- CHANGELOG
- COMPONENTS
- SERVICES
- ROUTES
- APIs

Essa documentação poderá ser atualizada automaticamente após revisão da implementação.

---

# Fonte oficial de verdade

A documentação é a fonte oficial de verdade da Presscard.

Caso exista divergência entre código e documentação:

1. Nunca assumir que o código está correto.
2. Nunca assumir que a documentação está correta.
3. Identificar a divergência.
4. Explicar o impacto.
5. Propor uma solução.
6. Aguardar aprovação.
7. Atualizar código ou documentação somente após autorização.

---

# Princípios arquiteturais

A plataforma Presscard segue os seguintes princípios:

- arquitetura modular;
- separação de responsabilidades;
- componentização reutilizável;
- domínio orientado ao negócio;
- arquitetura preparada para SaaS;
- suporte a múltiplos parceiros comerciais;
- evolução incremental;
- documentação como parte do software.

---

# Objetivo da plataforma

A Presscard é uma plataforma SaaS de benefícios corporativos.

Ela conecta:

- Empresas Associadas;
- Funcionários;
- Parceiros Comerciais.

Sua evolução contempla:

- marketplace corporativo;
- catálogo de serviços;
- sistema de reservas;
- pagamentos;
- comissões;
- integrações externas.

---

# Atualização da documentação

Nenhuma implementação será considerada concluída enquanto sua documentação não estiver consistente.

Toda funcionalidade nova deverá identificar quais documentos precisam ser revisados.

---

# Convenções

- Markdown para toda documentação.
- Mermaid para diagramas.
- Um documento deve possuir apenas uma responsabilidade.
- Evitar duplicação de informações.
- Manter referências entre documentos.

---

# Versionamento

Toda alteração relevante deverá possuir histórico.

Mudanças arquiteturais deverão ser registradas através de ADRs.

---

# Responsabilidades

## ChatGPT

Responsável por:

- arquitetura;
- domínio do negócio;
- documentação oficial;
- evolução da plataforma.

---

## Antigravity

Responsável por:

- documentação técnica;
- sincronização com o código;
- atualização do estado atual;
- revisão da implementação.

---

## Proprietário do projeto

Responsável por:

- decisões finais;
- aprovação de implementações;
- aprovação de mudanças arquiteturais;
- aprovação de alterações na documentação.

---

# Princípio Final

A documentação não é um complemento do software.

A documentação faz parte do software.

Uma implementação somente estará concluída quando:

- o código estiver funcionando;
- a arquitetura continuar consistente;
- a documentação estiver atualizada.
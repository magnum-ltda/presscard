# Security Threats

## Objetivo

Manter uma lista inicial de ameaças que devem ser consideradas durante o desenvolvimento.

## Principais ameaças

### Acesso indevido
Mitigação:
- autenticação;
- autorização;
- menor privilégio.

### Vazamento entre Tenants
Mitigação:
- TenantContext;
- filtros obrigatórios;
- testes de isolamento.

### Manipulação de identificadores
Exemplo:

```text
GET /api/benefits/{id}
```

O backend deve validar se o recurso pertence ao contexto autorizado.

### Exposição de secrets
Mitigação:
- secrets manager/configuração segura;
- nunca versionar credenciais;
- não registrar tokens.

### Replay / duplicidade
Mitigação:
- idempotência;
- validação de eventos;
- correlation/idempotency keys.

### Webhook falso
Mitigação:
- assinatura;
- autenticação;
- validação de origem conforme o provedor.

### Escalada de privilégio
Mitigação:
- permissions granulares;
- validação no backend;
- auditoria de alterações de roles.

## Regra para IA

Ao implementar uma funcionalidade que envolva dados, permissões, pagamentos, administração ou integrações externas, a IA deve verificar este documento antes de propor a implementação.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

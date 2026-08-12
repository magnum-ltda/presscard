# Booking Flows

## Reserva padrão

```mermaid
flowchart LR
A[Employee] --> B[Benefit] --> C[Resource] --> D[Datas] --> E[Disponibilidade] --> F[Oferta] --> G[Resumo] --> H[Payment] --> I[Booking Confirmed]
```

## Revalidação

```mermaid
flowchart LR
A[Checkout] --> B[Revalidar Availability] --> C{Disponível?}
C -->|Sim| D[Payment]
C -->|Não| E[Atualizar Oferta]
```

## Reserva externa

```mermaid
flowchart LR
A[Presscard] --> B[Provider Adapter] --> C[External Provider] --> D[Create Reservation] --> E[External Confirmation] --> F[ExternalId] --> G[Confirmed]
```

## Falha externa

```mermaid
flowchart LR
A[Create External Booking] --> B{Sucesso?}
B -->|Sim| C[Confirmed]
B -->|Não| D[Failed] --> E[Registrar Erro]
```

## Cancelamento

```mermaid
flowchart LR
A[Booking] --> B[Solicitar Cancelamento] --> C[Validar Política] --> D[Cancelar no Provider] --> E[Atualizar Booking]
```

Toda mudança de status deve gerar histórico.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

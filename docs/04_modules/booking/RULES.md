# Booking Rules

## Regras

- Toda Booking possui identificador único.
- Toda Booking pertence a um Employee.
- Toda Booking referencia um Reservable Resource.
- Todo Resource pertence a um Commercial Partner.
- Disponibilidade deve ser validada antes da criação.
- Disponibilidade pode precisar de revalidação antes da confirmação.
- Uma Booking pode estar em Draft, Pending, Confirmed, InProgress, Completed, Cancelled ou Failed.
- Booking Cancelled não volta para Confirmed.
- Booking Completed não pode ser alterada.
- Datas e horários devem respeitar o tipo do recurso e timezone.
- Benefits devem validar elegibilidade antes da confirmação.
- A condição comercial aplicada deve ser preservada na Booking.
- Quando pagamento for obrigatório, a Booking não deve ser confirmada antes do Payment aprovado.
- Booking não processa pagamentos.
- Cancelamentos respeitam a política do recurso/fornecedor.
- Referências externas devem ser armazenadas quando fornecidas.
- Falhas externas devem manter histórico e rastreabilidade.
- Criação, alteração, confirmação, cancelamento e falhas devem ser auditadas.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

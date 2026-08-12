# Booking Calendar

## Tipos

### Date Range
Para hotéis, hospedagens e aluguel de carros.

### Date Time
Para restaurantes, serviços e experiências.

### Time Slot
Para recursos com horários fixos.

## Timezone

Toda operação com horário deve preservar timezone. A exibição pode ser localizada, mas o armazenamento deve ser consistente.

## Exemplos

Hotel:
`Check-in / Check-out`

Carro:
`Retirada / Devolução`

Restaurante:
`Data / Horário / Quantidade de pessoas`

## Regras

- rejeitar datas inválidas;
- respeitar o tipo do recurso;
- preservar timezone;
- aplicar regras do fornecedor.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

# Reservable Resources

## Objetivo

Representar genericamente aquilo que pode ser reservado, evitando um núcleo diferente para cada tipo de negócio.

## Exemplos

### Hotel
`Commercial Partner → Hotel → Room Type → Inventory`

### Aluguel de carro
`Commercial Partner → Rental Location → Vehicle Category`

### Restaurante
`Commercial Partner → Restaurant → Reservation Slot`

## Atributos conceituais

- Id
- PartnerId
- Type
- Name
- Description
- Status
- ExternalId
- Metadata

## Tipos

- HotelRoom
- Vehicle
- RestaurantTable
- Service
- Experience

Novos tipos podem ser adicionados sem alterar o núcleo de Booking.

## Recurso externo

Quando vier de fornecedor externo, armazenar Provider, ExternalId, ExternalReference e Metadata.

## Implementação

☐ Não iniciado  ☐ Parcial  ☐ Completo

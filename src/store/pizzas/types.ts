import { EntityStatus } from '../types';

export interface IPizza {
  id: number,
  imageUrl: string
  name: string,
  types: number[],
  sizes: number[],
  price: number,
  category: number,
  rating: number
}

export interface PizzasState {
  items: IPizza[]
  status: EntityStatus
}

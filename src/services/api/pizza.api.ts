import axios from 'axios';
import { FetchPizzasPayload } from '../../store/pizzas/types';

class PizzaApi {
  async getAll({ category, sortBy }: FetchPizzasPayload) {
    const url = `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`;
    const { data } = await axios.get(url);
    return data;
  }
}

export default new PizzaApi();

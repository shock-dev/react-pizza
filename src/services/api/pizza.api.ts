import axios from 'axios';

class PizzaApi {
  async getAll() {
    const { data } = await axios.get('/pizzas');
    return data;
  }
}

export default new PizzaApi();

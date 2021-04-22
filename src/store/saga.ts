import { all } from 'redux-saga/effects';
import pizzasSaga from './pizzas/saga';

export default function* rootSaga() {
  yield all([
    pizzasSaga()
  ]);
}

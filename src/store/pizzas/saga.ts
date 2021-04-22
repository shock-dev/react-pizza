import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import Api from '../../services/api/pizza.api';
import { FetchPizzasAction, PizzasActionType } from './types';
import { setPizzas, setStatus } from './actions';
import { EntityStatus } from '../types';

function* fetchPizzas({ payload }: FetchPizzasAction): SagaIterator {
  try {
    const pizzas = yield call(Api.getAll, payload);
    yield put(setPizzas(pizzas));
  } catch (e) {
    yield put(setStatus(EntityStatus.ERROR));
  }
}

function* pizzasSaga() {
  yield takeEvery(PizzasActionType.FETCH_PIZZAS, fetchPizzas);
}

export default pizzasSaga;

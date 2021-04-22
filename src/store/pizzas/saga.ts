import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import Api from '../../services/api/pizza.api';

function* fetchPizzas(): SagaIterator {
  try {
    const pizzas = yield call(Api.getAll);
    yield put({ type: '*', pizzas });
  } catch (e) {
    yield put({ type: '*' });
  }
}

function* pizzasSaga() {
  yield takeEvery('*', fetchPizzas);
}

export default pizzasSaga;

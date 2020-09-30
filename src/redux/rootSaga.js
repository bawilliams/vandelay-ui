import { all } from 'redux-saga/effects';

import inventory from './inventory/sagas';
import warehouses from './warehouses/sagas';

/**
 * rootSaga combines all of the saga arrays into a single array and then calls all to start
 * listening to everything. This also means that everything exported from the individual sagas files
 * should not be yielded since that happens here. Every saga needs to be imported and added here to
 * make it work
 */
function* rootSaga() {
  yield all([
    ...inventory,
    ...warehouses,
  ]);
}

export default rootSaga;

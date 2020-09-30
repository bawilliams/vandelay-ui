import { put, takeLatest, call } from 'redux-saga/effects';
import _ from 'lodash';

import {
  FETCH_WAREHOUSES_REQUEST,
  FETCH_WAREHOUSES_SUCCESS,
  FETCH_WAREHOUSES_FAILURE,
} from './types';

import api from '../../api/api';

import { warehouseData } from '../../api/warehouse-data';

export function* fetchWarehouses() {
  try {
    // const response = yield call(api.get, `/warehouses`);
    // const data = _.get(response, 'data.content', []);

    yield put({
      type: FETCH_WAREHOUSES_SUCCESS,
      payload: warehouseData,
    });

    return true;
  } catch (error) {
    yield put({
      type: FETCH_WAREHOUSES_FAILURE,
      error: `Error fetching warehouses. ${error.message || ''}`,
    });

    return false;
  }
}

export default [
  takeLatest(FETCH_WAREHOUSES_REQUEST, fetchWarehouses),
];

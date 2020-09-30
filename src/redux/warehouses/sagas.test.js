import { call, put } from 'redux-saga/effects';
import _ from 'lodash';
import api from '../../api/api';
import { warehouseData } from '../../api/warehouse-data';

import {
  fetchWarehouses,
} from './sagas';

import {
  FETCH_WAREHOUSES_FAILURE,
  FETCH_WAREHOUSES_SUCCESS,
} from './types';

describe('warehouses sagas', () => {
  describe('fetchWarehouses', () => {
    test('success', () => {
      // const warehouses = [{ id: 1, key: 'value' }, { id: 2, key: 'value2' }];
      const response = {};
      _.set(response, 'data.content', warehouseData);

      const saga = fetchWarehouses({});

      // expect(saga.next().value).toEqual(call(api.get, `/warehouses`));

      expect(saga.next(response).value).toEqual(
        put({
          type: FETCH_WAREHOUSES_SUCCESS,
          payload: warehouseData
        })
      );

      expect(saga.next().value).toBe(true);
    });

    test('failure', () => {
      const saga = fetchWarehouses({});

      // expect(saga.next().value).toEqual(call(api.get, `/warehouses`));
      saga.next();

      expect(saga.throw('error').value).toEqual(
        put({
          type: FETCH_WAREHOUSES_FAILURE,
          error: 'Error fetching warehouses. ',
        })
      );

      expect(saga.next().value).toBe(false);
    });
  });
});

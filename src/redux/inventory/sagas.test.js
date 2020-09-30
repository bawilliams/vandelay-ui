import { call, put } from 'redux-saga/effects';
import _ from 'lodash';
import api from '../../api/api';
import { inventoryData } from '../../api/warehouse-data';

import {
  fetchInventory,
  updateInventoryItem,
  deleteInventoryItem,
} from './sagas';

import {
  DELETE_INVENTORY_ITEM_FAILURE,
  DELETE_INVENTORY_ITEM_SUCCESS,
  FETCH_INVENTORY_FAILURE,
  FETCH_INVENTORY_SUCCESS,
  UPDATE_INVENTORY_ITEM_FAILURE,
  UPDATE_INVENTORY_ITEM_SUCCESS,
} from './types';

describe('inventory sagas', () => {
  describe('fetchInventory', () => {
    test('success', () => {
      const response = {};
      _.set(response, 'data.content', inventoryData);

      const saga = fetchInventory({ payload: { warehouseId: 1 } });

      // Leaving these in here to show how you would normally test saga calls
      // expect(saga.next().value).toEqual(call(api.get, `/warehouses/${warehouseId}/inventory`));

      expect(saga.next(response).value).toEqual(
        put({
          type: FETCH_INVENTORY_SUCCESS,
          payload: inventoryData[1]
        })
      );

      expect(saga.next().value).toBe(true);
    });

    test('failure', () => {
      const saga = fetchInventory({});

      // expect(saga.next().value).toEqual(call(api.get, `/warehouses/${warehouseId}/inventory`));
      saga.next();

      expect(saga.throw('error').value).toEqual(
        put({
          type: FETCH_INVENTORY_FAILURE,
          error: 'Error fetching inventory. ',
        })
      );

      expect(saga.next().value).toBe(false);
    });
  });

  describe('updateInventoryItem', () => {
    test('success', () => {
      const response = {};
      _.set(response, 'data.content', inventoryData);

      const item = {
        itemId: 1,
        itemQuantity: 200,
      }

      const saga = updateInventoryItem({ payload: { item } });

      // expect(saga.next().value).toEqual(call(api.put, `/warehouses/${warehouseId}/inventory/${itemId}`));

      expect(saga.next(response).value).toEqual(
        put({
          type: UPDATE_INVENTORY_ITEM_SUCCESS,
          payload: item,
        })
      );

      expect(saga.next().value).toBe(true);
    });

    test('failure', () => {
      const saga = updateInventoryItem({});

      // expect(saga.next().value).toEqual(call(api.put, `/warehouses/${warehouseId}/inventory/${itemId}`));
      saga.next();

      expect(saga.throw('error').value).toEqual(
        put({
          type: UPDATE_INVENTORY_ITEM_FAILURE,
          error: 'Error updating inventory item. ',
        })
      );

      expect(saga.next().value).toBe(false);
    });
  });

  describe('deleteInventoryItem', () => {
    test('success', () => {
      const response = {};
      _.set(response, 'data.content', inventoryData);

      const itemId = 1;

      const saga = deleteInventoryItem({ payload: { itemId } });

      // expect(saga.next().value).toEqual(call(api.put, `/warehouses/${warehouseId}/inventory/${itemId}`));

      expect(saga.next(response).value).toEqual(
        put({
          type: DELETE_INVENTORY_ITEM_SUCCESS,
          payload: { itemId },
        })
      );

      expect(saga.next().value).toBe(true);
    });

    test('failure', () => {
      const saga = deleteInventoryItem({});

      // expect(saga.next().value).toEqual(call(api.put, `/warehouses/${warehouseId}/inventory/${itemId}`));
      saga.next();

      expect(saga.throw('error').value).toEqual(
        put({
          type: DELETE_INVENTORY_ITEM_FAILURE,
          error: 'Error deleting inventory item. ',
        })
      );

      expect(saga.next().value).toBe(false);
    });
  });
});

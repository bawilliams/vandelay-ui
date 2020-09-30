import { put, takeLatest, call } from 'redux-saga/effects';
import _ from 'lodash';

import {
  FETCH_INVENTORY_REQUEST,
  FETCH_INVENTORY_SUCCESS,
  FETCH_INVENTORY_FAILURE,
  UPDATE_INVENTORY_ITEM_REQUEST,
  UPDATE_INVENTORY_ITEM_SUCCESS,
  UPDATE_INVENTORY_ITEM_FAILURE,
  DELETE_INVENTORY_ITEM_REQUEST,
  DELETE_INVENTORY_ITEM_SUCCESS,
  DELETE_INVENTORY_ITEM_FAILURE,
} from './types';

import api from '../../api/api';

import { inventoryData } from '../../api/warehouse-data';

export function* fetchInventory(action) {
  try {
    const warehouseId = _.get(action, 'payload.warehouseId', null);

    ////// What an actual call to an API would look like
    // const response = yield call(api.get, `/warehouses/${warehouseId}/inventory`);
    // const data = _.get(response, 'data.content', []);

    // Because I am mocking out this data from an API, if you make edit/delete changes on one inventory
    // and then switch to another inventory and then back to the original inventory, this will display
    // the original (non-updated) data; provided we use a real API with data from a database, this will not be an issue
    yield put({
      type: FETCH_INVENTORY_SUCCESS,
      payload: inventoryData[warehouseId],
    });

    return true;
  } catch (error) {
    yield put({
      type: FETCH_INVENTORY_FAILURE,
      error: `Error fetching inventory. ${error.message || ''}`,
    });

    return false;
  }
}

export function* updateInventoryItem(action) {
  try {
    const updatedItem = _.get(action, 'payload.item', {});

    ////// What an actual call to an API would look like
    // const response = yield call(api.put, `/warehouses/${warehouseId}/inventory/${itemId}`);
    // const data = _.get(response, 'data.content', []);

    yield put({
      type: UPDATE_INVENTORY_ITEM_SUCCESS,
      payload: updatedItem,
    });

    return true;
  } catch (error) {
    yield put({
      type: UPDATE_INVENTORY_ITEM_FAILURE,
      error: `Error updating inventory item. ${error.message || ''}`,
    });

    return false;
  }
}

export function* deleteInventoryItem(action) {
  try {
    ////// What an actual call to an API would look like
    // const response = yield call(api.delete, `/warehouses/${warehouseId}/inventory/${itemId}`);
    // const data = _.get(response, 'data.content', []);

    yield put({
      type: DELETE_INVENTORY_ITEM_SUCCESS,
      payload: action.payload,
    });

    return true;
  } catch (error) {
    yield put({
      type: DELETE_INVENTORY_ITEM_FAILURE,
      error: `Error deleting inventory item. ${error.message || ''}`,
    });

    return false;
  }
}

export default [
  takeLatest(FETCH_INVENTORY_REQUEST, fetchInventory),
  takeLatest(UPDATE_INVENTORY_ITEM_REQUEST, updateInventoryItem),
  takeLatest(DELETE_INVENTORY_ITEM_REQUEST, deleteInventoryItem),
];

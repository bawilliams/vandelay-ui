import { combineReducers } from 'redux';
import _ from 'lodash';

import {
  FETCH_INVENTORY_SUCCESS,
  FETCH_INVENTORY_REQUEST,
  FETCH_INVENTORY_FAILURE,
  UPDATE_INVENTORY_ITEM_REQUEST,
  UPDATE_INVENTORY_ITEM_SUCCESS,
  UPDATE_INVENTORY_ITEM_FAILURE,
  DELETE_INVENTORY_ITEM_REQUEST,
  DELETE_INVENTORY_ITEM_SUCCESS,
  DELETE_INVENTORY_ITEM_FAILURE,
} from './types';

export const loading = (state = false, action = {}) => {
  switch (action.type) {
    case FETCH_INVENTORY_REQUEST:
    case UPDATE_INVENTORY_ITEM_REQUEST:
    case DELETE_INVENTORY_ITEM_REQUEST:
      return true;
    case FETCH_INVENTORY_FAILURE:
    case FETCH_INVENTORY_SUCCESS:
    case UPDATE_INVENTORY_ITEM_SUCCESS:
    case UPDATE_INVENTORY_ITEM_FAILURE:
    case DELETE_INVENTORY_ITEM_SUCCESS:
    case DELETE_INVENTORY_ITEM_FAILURE:
      return false;
    default:
      return state;
  }
};

export const data = (state = null, action = {}) => {
  switch (action.type) {
    case FETCH_INVENTORY_SUCCESS:
      return _.get(action, 'payload', []);
    case UPDATE_INVENTORY_ITEM_SUCCESS: {
      // I would normally leave data manipulation out of the reducer as much as possible
      // but I can't currently fetch updated data in the saga without a working API
      const updatedItem = _.get(action, 'payload', {});

      const updatedData = state.map(item => {
        if (updatedItem.itemId === item.itemId) {
          return updatedItem;
        }

        return item;
      });

      return updatedData;
    }
    case DELETE_INVENTORY_ITEM_SUCCESS: {
      const itemId = _.get(action, 'payload.itemId', null);

      const updatedData = state.filter(item => item.itemId !== itemId);
      return updatedData;
    }
    case FETCH_INVENTORY_FAILURE:
    case UPDATE_INVENTORY_ITEM_FAILURE:
    case DELETE_INVENTORY_ITEM_FAILURE:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  loading,
  data,
});

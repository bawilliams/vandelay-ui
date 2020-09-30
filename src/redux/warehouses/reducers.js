import { combineReducers } from 'redux';
import _ from 'lodash';

import {
  FETCH_WAREHOUSES_SUCCESS,
  FETCH_WAREHOUSES_REQUEST,
  FETCH_WAREHOUSES_FAILURE,
} from './types';

export const loading = (state = false, action = {}) => {
  switch (action.type) {
    case FETCH_WAREHOUSES_REQUEST:
      return true;
    case FETCH_WAREHOUSES_FAILURE:
    case FETCH_WAREHOUSES_SUCCESS:
      return false;
    default:
      return state;
  }
};

export const data = (state = null, action = {}) => {
  switch (action.type) {
    case FETCH_WAREHOUSES_SUCCESS: {
      return _.get(action, 'payload', []);
    }
    case FETCH_WAREHOUSES_FAILURE: {
      return [];
    }
    default:
      return state;
  }
};

export default combineReducers({
  loading,
  data,
});

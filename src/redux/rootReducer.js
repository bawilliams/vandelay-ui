import { combineReducers } from 'redux';

import inventory from './inventory/reducers';
import warehouses from './warehouses/reducers';

export default combineReducers({
  inventory,
  warehouses,
});

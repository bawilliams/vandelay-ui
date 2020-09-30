import _ from 'lodash';

export const warehousesSelector = state =>
  _.get(state, `warehouses.data`, []);

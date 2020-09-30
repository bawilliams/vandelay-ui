import _ from 'lodash';

export const inventorySelector = state =>
  _.get(state, `inventory.data`, []);

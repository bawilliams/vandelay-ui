import {
  FETCH_INVENTORY_REQUEST,
  UPDATE_INVENTORY_ITEM_REQUEST,
  DELETE_INVENTORY_ITEM_REQUEST,
} from './types';

export const fetchInventoryAction = warehouseId => ({
  type: FETCH_INVENTORY_REQUEST,
  payload: {
    warehouseId,
  },
});

export const updateInventoryItemAction = item => ({
  type: UPDATE_INVENTORY_ITEM_REQUEST,
  payload: {
    item,
  },
});

export const deleteInventoryItemAction = itemId => ({
  type: DELETE_INVENTORY_ITEM_REQUEST,
  payload: {
    itemId,
  },
});
import {
  loading,
  data,
} from './reducers';
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

describe('inventory reducer', () => {
  describe('loading', () => {
    test('Default returns false', () => {
      const state = loading();
      expect(state).toBe(false);
    });

    test('FETCH_INVENTORY_REQUEST returns true', () => {
      const state = loading(false, { type: FETCH_INVENTORY_REQUEST });
      expect(state).toBe(true);
    });

    test('FETCH_INVENTORY_SUCCESS returns false', () => {
      const state = loading(true, { type: FETCH_INVENTORY_SUCCESS });
      expect(state).toBe(false);
    });

    test('FETCH_INVENTORY_FAILURE returns false', () => {
      const state = loading(true, { type: FETCH_INVENTORY_FAILURE });
      expect(state).toBe(false);
    });

    test('UPDATE_INVENTORY_ITEM_REQUEST returns true', () => {
      const state = loading(false, { type: UPDATE_INVENTORY_ITEM_REQUEST });
      expect(state).toBe(true);
    });

    test('UPDATE_INVENTORY_ITEM_SUCCESS returns false', () => {
      const state = loading(true, { type: UPDATE_INVENTORY_ITEM_SUCCESS });
      expect(state).toBe(false);
    });

    test('UPDATE_INVENTORY_ITEM_FAILURE returns false', () => {
      const state = loading(true, { type: UPDATE_INVENTORY_ITEM_FAILURE });
      expect(state).toBe(false);
    });

    test('DELETE_INVENTORY_ITEM_REQUEST returns true', () => {
      const state = loading(false, { type: DELETE_INVENTORY_ITEM_REQUEST });
      expect(state).toBe(true);
    });

    test('DELETE_INVENTORY_ITEM_SUCCESS returns false', () => {
      const state = loading(true, { type: DELETE_INVENTORY_ITEM_SUCCESS });
      expect(state).toBe(false);
    });

    test('DELETE_INVENTORY_ITEM_FAILURE returns false', () => {
      const state = loading(true, { type: DELETE_INVENTORY_ITEM_FAILURE });
      expect(state).toBe(false);
    });
  });

  describe('data', () => {
    test('Default returns null', () => {
      const state = data();
      expect(state).toEqual(null);
    });

    test('FETCH_INVENTORY_SUCCESS updates state with data', () => {
      const beginningState = [
        {
          firstAttribute: 'value',
        },
        {
          firstAttribute: 'value2',
        },
      ];

      const finalData = [
        {
          firstAttribute: 'value3',
        },
        {
          firstAttribute: 'value4',
        },
      ];

      const payload = finalData;

      const state = data(beginningState, {
        type: FETCH_INVENTORY_SUCCESS,
        payload,
      });
      expect(state).toEqual(finalData);
    });

    test('FETCH_INVENTORY_FAILURE clears state data', () => {
      const beginningState = [
        {
          firstAttribute: 'value',
        },
        {
          firstAttribute: 'value2',
        },
      ];

      const state = data(beginningState, {
        type: FETCH_INVENTORY_FAILURE,
      });
      expect(state).toEqual([]);
    });

    test('UPDATE_INVENTORY_ITEM_SUCCESS updates state with data', () => {
      const beginningState = [
        {
          itemId: 1,
          itemQuantity: 110,
        },
        {
          itemId: 2,
          itemQuantity: 220,
        },
      ];

      const finalData = [
        {
          itemId: 1,
          itemQuantity: 120,
        },
        {
          itemId: 2,
          itemQuantity: 220,
        },
      ];

      const payload = {
        itemId: 1,
        itemQuantity: 120,
      };

      const state = data(beginningState, {
        type: UPDATE_INVENTORY_ITEM_SUCCESS,
        payload,
      });
      expect(state).toEqual(finalData);
    });

    test('UPDATE_INVENTORY_ITEM_FAILURE clears state data', () => {
      const beginningState = [
        {
          firstAttribute: 'value',
        },
        {
          firstAttribute: 'value2',
        },
      ];

      const state = data(beginningState, {
        type: UPDATE_INVENTORY_ITEM_FAILURE,
      });
      expect(state).toEqual([]);
    });

    test('DELETE_INVENTORY_ITEM_SUCCESS updates state with data', () => {
      const beginningState = [
        {
          itemId: 1,
        },
        {
          itemId: 2,
        },
      ];

      const finalData = [
        {
          itemId: 2,
        },
      ];

      const payload = {
        itemId: 1,
      };

      const state = data(beginningState, {
        type: DELETE_INVENTORY_ITEM_SUCCESS,
        payload,
      });
      expect(state).toEqual(finalData);
    });

    test('DELETE_INVENTORY_ITEM_FAILURE clears state data', () => {
      const beginningState = [
        {
          firstAttribute: 'value',
        },
        {
          firstAttribute: 'value2',
        },
      ];

      const state = data(beginningState, {
        type: DELETE_INVENTORY_ITEM_FAILURE,
      });
      expect(state).toEqual([]);
    });
  });
});

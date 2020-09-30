import {
  loading,
  data,
} from './reducers';
import {
  FETCH_WAREHOUSES_REQUEST,
  FETCH_WAREHOUSES_SUCCESS,
  FETCH_WAREHOUSES_FAILURE,
} from './types';

describe('warehouse reducer', () => {
  describe('loading', () => {
    test('Default returns false', () => {
      const state = loading();
      expect(state).toBe(false);
    });

    test('FETCH_WAREHOUSES_REQUEST returns true', () => {
      const state = loading(false, { type: FETCH_WAREHOUSES_REQUEST });
      expect(state).toBe(true);
    });

    test('FETCH_WAREHOUSES_SUCCESS returns false', () => {
      const state = loading(true, { type: FETCH_WAREHOUSES_SUCCESS });
      expect(state).toBe(false);
    });

    test('FETCH_WAREHOUSES_FAILURE returns false', () => {
      const state = loading(true, { type: FETCH_WAREHOUSES_FAILURE });
      expect(state).toBe(false);
    });
  });

  describe('data', () => {
    test('Default returns null', () => {
      const state = data();
      expect(state).toEqual(null);
    });

    test('FETCH_WAREHOUSES_SUCCESS updates state with data', () => {
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
        type: FETCH_WAREHOUSES_SUCCESS,
        payload,
      });
      expect(state).toEqual(finalData);
    });

    test('FETCH_WAREHOUSES_FAILURE clears state data', () => {
      const beginningState = [
        {
          firstAttribute: 'value',
        },
        {
          firstAttribute: 'value2',
        },
      ];

      const state = data(beginningState, {
        type: FETCH_WAREHOUSES_FAILURE,
      });
      expect(state).toEqual([]);
    });
  });
});

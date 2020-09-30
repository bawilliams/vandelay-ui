import {
  warehousesSelector,
} from './selectors';

describe('warehouses selectors', () => {
  describe('warehousesSelector', () => {
    test('empty state', () => {
      const value = warehousesSelector({});
      expect(value).toEqual([]);
    });

    test('returns correct data', () => {
      const testData = [
        { key: 'value' },
        { key: 'another value' },
      ];

      const value = warehousesSelector({
        warehouses: { data: testData },
      });
      expect(value).toEqual(testData);
    });
  });
});

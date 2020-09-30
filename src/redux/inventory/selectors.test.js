import {
  inventorySelector,
} from './selectors';

describe('inventory selectors', () => {
  describe('inventorySelector', () => {
    test('empty state', () => {
      const value = inventorySelector({});
      expect(value).toEqual([]);
    });

    test('returns correct data', () => {
      const testData = [
        { key: 'value' },
        { key: 'another value' },
      ];

      const value = inventorySelector({
        inventory: { data: testData },
      });
      expect(value).toEqual(testData);
    });
  });
});

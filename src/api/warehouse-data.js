export const inventoryData = {
  1: [{
    "warehouseId": 1,
    "itemId": 100,
    "itemName": "Waterproof seal",
    "itemDescription": "For sealing specimens to preserve them",
    "itemSKU": 12345,
    "itemQuantity": 110,
  },
  {
    "warehouseId": 1,
    "itemId": 101,
    "itemName": "Waterproof sealant",
    "itemDescription": "Used alongside the waterproof seal",
    "itemSKU": 12346,
    "itemQuantity": 150,
  }],
  2: [
    {
      "warehouseId": 2,
      "itemId": 103,
      "itemName": "Wood glue",
      "itemDescription": "Used to glue wood together",
      "itemSKU": 12347,
      "itemQuantity": 105,
    }
  ]
};

export const warehouseData = [{
  "warehouseId": 1,
  "warehouseName": "Pier 10 Holdings",
  "warehouseDescription": "Key East Coast shipping/receiving location for storing finished product, ready for distribution.",
  "warehouseAddress": {
    "buildingName": "Bass Warehouse",
    "streetLine1": "101 Bass Place",
    "streetLine2": "Bldg. 5",
    "city": "New York City",
    "stateProvince": "NY",
    "zipPostalCode": "12345",
    "country": "US"
  }
},
{
  "warehouseId": 2,
  "warehouseName": "Dock 20 Receiving",
  "warehouseDescription": "Main dock for receiving new inventory from overseas.",
  "warehouseAddress": {
    "buildingName": "Switch Industries",
    "streetLine1": "45677 Boat Drive",
    "streetLine2": "Bldg. 10",
    "city": "San Francisco",
    "stateProvince": "CA",
    "zipPostalCode": "09877",
    "country": "US"
  }
},
];
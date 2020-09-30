import React from 'react';
import { Table } from 'reactstrap';
import ItemRow from './ItemRow';

export default function InventoryTable(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Item ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>SKU</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {props.inventory && props.inventory.map(item => {
          return (
            <ItemRow
              key={item.itemId}
              item={item}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Input, InputGroupAddon } from 'reactstrap';
import _ from 'lodash';
import { deleteInventoryItemAction, updateInventoryItemAction } from '../redux/inventory/actions';

const convertToNumber = {
  'itemQuantity': true,
  'itemSKU': true,
  'itemId': true,
  'warehouseId': true,
}

class ItemRow extends Component {
  state = {
    updating: false,
    updatedItem: {},
  };

  handleChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    if (convertToNumber[name]) {
      value = parseInt(value);
    }

    this.setState({
      updatedItem: {
        ...this.state.updatedItem,
        [name]: value,
      },
    });
  }

  update = () => {
    const { updateItem, item } = this.props;
    const { updating, updatedItem } = this.state;
    const editedItem = { ...updatedItem };

    if (updating) {
      this.setState({
        updating: false,
      }, () => updateItem(editedItem));
      return;
    }

    this.setState({
      updating: true,
      updatedItem: item,
    });
  }

  delete = () => {
    const { deleteItem, item } = this.props;

    deleteItem(item.itemId);
  }

  renderRows = () => {
    const { updating, updatedItem } = this.state;
    const { warehouseId, itemId, itemName, itemDescription, itemSKU, itemQuantity } = this.props.item;

    if (!updating) {
      return (
        <tr>
          <td>{warehouseId}</td>
          <td>{itemId}</td>
          <td>{itemName}</td>
          <td>{itemDescription}</td>
          <td>{itemSKU}</td>
          <td>{itemQuantity}</td>
          <td>
            <Button color="success" size="sm" className="mr-2" onClick={this.update}>Edit</Button>
            <Button color="danger" size="sm" onClick={this.delete}>Delete</Button>
          </td>
        </tr>
      );
    }

    return (
      <tr>
        {updatedItem && _.map(updatedItem, (value, key) => {
          return (
            <td key={key}>
              <Input
                name={key}
                value={value}
                onChange={(e) => this.handleChange(e)}
              />
            </td>
          );
        })}
        <InputGroupAddon addonType="append"><Button color="success" onClick={this.update}>Save</Button></InputGroupAddon>
      </tr>
    )
  }

  render() {
    const rows = this.renderRows();

    return rows;
  }
}

const mapDispatchToProps = dispatch => ({
  updateItem: item => dispatch(updateInventoryItemAction(item)),
  deleteItem: itemId => dispatch(deleteInventoryItemAction(itemId)),
});

export default connect(
  null,
  mapDispatchToProps
)(ItemRow);
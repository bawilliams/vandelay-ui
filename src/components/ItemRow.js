import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import _ from 'lodash';
import { deleteInventoryItemAction, updateInventoryItemAction } from '../redux/inventory/actions';

class ItemRow extends Component {
  state = {
    updating: false,
    updatedItem: {},
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(this.state);

    this.setState({
      updatedItem: {
        ...this.state.updatedItem,
        [name]: value,
      },
    });
  }

  update = () => {
    const { updateItem, updatedItem, item } = this.props;
    const { updating } = this.state;
    const editedItem = { ...updatedItem };
    console.log(this.state);
    if (updating) {
      this.setState({
        updating: false,
        updatedItem: {},
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
    const { itemId, itemName, itemDescription, itemSKU, itemQuantity } = this.props.item;

    if (!updating) {
      return (
        <tr>
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
        <InputGroup>
          {updatedItem && _.map(updatedItem, (value, key) => {
            return (
              <Input
                key={key}
                name={key}
                value={value}
                onChange={(e) => this.handleChange(e)}
              />
            );
          })}
          <InputGroupAddon addonType="append"><Button color="success" onClick={this.update}>Save</Button></InputGroupAddon>
        </InputGroup>
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
import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class WarehouseDropdown extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  };

  render() {
    const { warehouses, handleWarehouse } = this.props;

    return (
      <div id="dropdownDiv">
        <label htmlFor="warehouseDropdown">Choose a warehouse:</label>
        <Dropdown id="warehouseDropdown" isOpen={this.state.isOpen} toggle={this.toggle}>
          <DropdownToggle caret color="info">
            Dropdown
        </DropdownToggle>
          <DropdownMenu>
            {warehouses && warehouses.map(warehouse => {
              return (
                <DropdownItem key={warehouse.warehouseId} onClick={() => handleWarehouse(warehouse.warehouseId)}>
                  {warehouse.warehouseName}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default WarehouseDropdown;
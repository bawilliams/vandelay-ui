import React, { Component } from 'react';
import { connect } from 'react-redux'

import { inventorySelector } from './redux/inventory/selectors';
import { warehousesSelector } from './redux/warehouses/selectors';
import { fetchInventoryAction } from './redux/inventory/actions';
import { fetchWarehousesAction } from './redux/warehouses/actions';

import WarehouseDropdown from './components/WarehouseDropdown';
import InventoryTable from './components/InventoryTable';

class App extends Component {
  state = {
    warehouseId: null,
  }

  componentDidMount() {
    const { fetchWarehouses } = this.props;

    fetchWarehouses();
  }

  handleWarehouse = id => {
    const { fetchInventory } = this.props;

    this.setState({
      warehouseId: id,
    }, () => fetchInventory(id));
  }

  render() {
    const { inventory, warehouses } = this.props;

    return (
      <div className="App container">
        <WarehouseDropdown
          handleWarehouse={this.handleWarehouse}
          warehouses={warehouses}
        />
        <hr></hr>
        <InventoryTable inventory={inventory} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  inventory: inventorySelector(state),
  warehouses: warehousesSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchWarehouses: () => dispatch(fetchWarehousesAction()),
  fetchInventory: warehouseId => dispatch(fetchInventoryAction(warehouseId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

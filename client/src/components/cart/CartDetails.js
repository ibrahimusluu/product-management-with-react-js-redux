import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Button, Table } from "reactstrap";
import alertify from "alertifyjs";

// Code Smell --> Bad Code Techniques

class CartDetails extends Component {
  // "Solid Single Responsibility" Principle and Refactoring
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " removed from Cart.");
  }

  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {/* Add "Your Cart is Empty!" */}
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button
                    onClick={() => this.removeFromCart(cartItem.product)}
                    color="danger"
                  >
                    delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

// state
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

// action
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);

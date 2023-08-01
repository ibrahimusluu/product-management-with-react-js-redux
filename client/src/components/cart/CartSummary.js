import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";

class CartSummary extends Component {
  // Desadvantage of Redux; we write the same code 2 times also in Redux as we see here.
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " removed from Cart.");
  }

  renderSummary() {
    return (
      <UncontrolledDropdown>
        <DropdownToggle caret>
          Your Cart - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu>
          {this.props.cart.map((cartItem) => (
            // Cannot read properties of undefined (reading 'product')
            <DropdownItem key={cartItem.product.id}>
              <Badge
                onClick={
                  () => this.removeFromCart(cartItem.product)
                  //   this.props.actions.removeFromCart(cartItem.product)
                }
                color="danger"
              >
                -
              </Badge>{" "}
              {cartItem.product.productName}{" "}
              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to="cart">Go to Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmpty() {
    return (
      <UncontrolledDropdown>
        <DropdownToggle>Empty Cart</DropdownToggle>
      </UncontrolledDropdown>
      //   <NavItem>
      //     <NavLink>Empty Cart</NavLink>
      //   </NavItem>
    );
  }

  render() {
    return (
      // Removing Spagetti Code
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);

import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  Button,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";
import { Link } from "react-router-dom";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  renderNavi() {
    return (
      <Navbar color="light" light expand="md">
        {/* NavbarBrand is more proper way */}
        {/* Hyper Reference refreshes the page, Link doesn't */}
        <Button href="/" color="primary">
          Product Management App
        </Button>
        {/* Invalid hook call. Hooks can only be called inside of the body of a function component. */}
        {/* <Link to="/">Product Management App</Link> */}
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="me-auto" navbar>
            {/* <NavItem>
              <NavLink
                href="contact_form"
                style={{
                  color: "black",
                  backgroundColor: "#E9ECEF",
                  adding: "10px",
                  marginLeft: "15px",
                  borderRadius: "5px",
                }}
              >
                Contact Us
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink
                href="https://github.com/ibrahimusluu"
                style={{
                  backgroundColor: "#5C636A",
                  color: "#fff",
                  padding: "10px",
                  marginLeft: "15px",
                  borderRadius: "5px",
                }}
              >
                MY GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <NavLink
            href="/saveproduct"
            style={{
              backgroundColor: "#0B5ED7",
              color: "#fff",
              padding: "10px",
              marginRight: "15px",
              borderRadius: "5px",
              // textDecoration: "none",
              // listStyle: "none",
            }}
          >
            Add Product
            {/* <Link --> validateDOMNesting(...): <a> cannot appear as a descendant of <a>.
              // to="/saveproduct"
              >
                Save
              </Link> */}
          </NavLink>
          <CartSummary />
        </Collapse>
      </Navbar>
    );
  }

  render() {
    return <div>{this.renderNavi()}</div>;
  }
}

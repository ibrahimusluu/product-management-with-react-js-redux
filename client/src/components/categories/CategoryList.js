import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";

class CategoryList extends Component {
  // once
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id);
  };

  render() {
    return (
      <div>
        {/* "Actions" must be plain objects. Instead, the actual type was: 'function'. You may need to add "middleware" to your store...  */}
        {/* Use "custom middleware" for "async actions" */}
        {/* Redux-Thunk = MiddleWare */}
        <h3>
          <Badge color="warning">Categories: </Badge>{" "}
          {this.props.categories.length}
        </h3>

        <ListGroup>
          {this.props.categories.map((category) => (
            // () means "jsx"
            <ListGroupItem
              onClick={() => this.selectCategory(category)}
              key={category.id}
              active={category.id === this.props.currentCategory.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer, // "Actions" must be plain objects. Instead, the actual type was: 'function'. You may need to add "middleware" to your store...
  };
}

// actions
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList); // IIFE

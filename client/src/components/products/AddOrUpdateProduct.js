// setState = useState, useEffect = componentDidMount and other lifecycles

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { getProducts, saveProduct } from "../../redux/actions/productActions";
import ProductDetails from "./ProductDetails";
import { useParams, useHistory, useNavigate } from "react-router-dom";
import { validate } from "@babel/types";

function AddOrUpdateProduct({
  // parameters
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  // console.log(useParams());
  // const { productId } = useParams();
  // console.log(productId);
  // if (!productId) {
  //   console.log("Add Product");
  //   mapStateToProps(null, productId);
  // }

  // console.log(props);
  console.log("state: ", {
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    history,
    props,
  });
  // console.log(...props); // cannot get with ...props
  // destructuring of JS

  // let history = useHistory(); // useHistory was not found in 'react-router-dom'
  console.log(product);

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
      console.log("categories LENGTH 0: ", categories);
    } else {
      // getCategories(); // Invalid Hook Call.
      console.log("categories NOT LENGTH 0: ", categories);
    }
    console.log(product);

    setProduct({ ...props.product });
    // setProduct({ ...product });
    console.log(product);
  }, [props.product]);
  // }, [product]);

  function handleChange(event) {
    console.log(event);
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));

    validate(name, value);

    // here doesn't work, it was just for "test"
    // setProduct((previousProduct) => {
    //   console.log(product);

    //   return {
    //     ...previousProduct,
    //     [name]: name === "categoryId" ? parseInt(value, 10) : value,
    //   };
    // });
  }

  function validate(name, value) {
    // if (name === "productName" && !value) {
    if (name === "productName" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        productName: "Product name is required!",
      }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        productName: "",
      }));
    }
  }

  function handleSave(event) {
    event.preventDefault();
    console.log(event);

    console.log(saveProduct);

    saveProduct(product).then(() => {
      console.log(product);

      // history.push("/");
      // history("/"); // useHistory was not found in 'react-router-dom'
      // console.log(history("/"));
      // navigate("/"); // Invalid hook call.
    });

    console.log(saveProduct);

    navigate("/");
  }

  // console.log(handleSave);
  return (
    <ProductDetails
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

// Redux Usage in Function-Components

export function getProductById(products, productId) {
  console.log(true);
  let product = products.find((product) => product.id == productId) || null;

  console.log(product);
  return product;
}

// "ownProps" can be used in Class-Components
function mapStateToProps(state, ownProps) {
  const { productId } = useParams(); // React Hook "useParams" is called in function "mapStateToProps" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter. React Hook names must start with the word "use".eslintreact-hooks/rules-of-hooks. eslint
  console.log("state: ", state, "ownProps: ", ownProps);
  // console.log(
  //   `state: ${Object.keys(state)} ownProps: ${Object.entries(ownProps)}`
  // );
  console.log(useParams());
  // useParams().productId ? "":""; // doesn't work
  if (useParams().productId) {
    console.log("UPDATE PRODUCT");
    console.log(useParams());
  } else {
    console.log("SAVE PRODUCT");
    console.log(useParams());
  }

  // let productId = ownProps;

  // console.log(productIdTest); // there was no error when we defined it as "productIdTest"
  // console.log(ownProps);
  // console.log(ownProps.match.params);
  // queryString --> ownProps

  try {
    // debugger;
    // const productId = ownProps.match.params.productId; // Cannot read properties of undefined (reading 'params')
    // const productId = productIdTest; // Solved with useParams (not in a proper way)
    // console.log(productIdTest);
    // console.log(productId);

    const product =
      productId && state.productListReducer.length > 0
        ? getProductById(state.productListReducer, productId)
        : {};

    return {
      product,
      products: state.productListReducer,
      categories: state.categoryListReducer,
    };
  } catch (error) {
    console.log(error);
  }
}

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);

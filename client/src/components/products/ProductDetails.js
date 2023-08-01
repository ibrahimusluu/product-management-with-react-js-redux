import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

const ProductDetails = (
  // will be catched by Hook automaticly
  { categories, product, onSave, onChange, errors } // categories.map is not a function --> cause of {}
) => {
  // console.log(product);
  // console.log({ categories, product, onSave, onChange, errors });
  return (
    <form onSubmit={onSave}>
      {/* {console.log(onSave)} */}

      <h2>{product.id ? "Update" : "Add"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error={errors.productName}
      />

      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Select..."
        options={categories.map((category) => ({
          // categories.map is not a function
          value: category.id, // not "category.categoryId"
          text: category.categoryName,
        }))}
        onChange={onChange}
        error={errors.categoryId}
      />

      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      />

      <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit"
        value={product.quantityPerUnit}
        onChange={onChange}
        error={errors.quantityPerUnit}
      />

      <TextInput
        name="unitsInStock"
        label="Units In Stock"
        value={product.unitsInStock}
        onChange={onChange}
        error={errors.unitsInStock}
      />

      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
};

export default ProductDetails;

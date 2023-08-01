import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import CartDetails from "../cart/CartDetails";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";
// import CartDetails from "../cart/CartDetails";

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" exact element={<Dashboard />} />
        <Route
          // exact // no need "exact"
          path="/saveproduct/:productId"
          element={<AddOrUpdateProduct />}
        />
        <Route path="/saveproduct" element={<AddOrUpdateProduct />} />
        <Route path="/cart" exact element={<CartDetails />} />
        {/* <Route path="/cart" exact element={CartDetails} /> possible usage */}
        <Route path="/*" element={<NotFound />} />
        {/* doesn't work without path */}
      </Routes>
    </Container>
  );
}

export default App;

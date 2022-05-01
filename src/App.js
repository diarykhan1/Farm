import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "./Components/Home";
// import ProductList from "./ProductItems/ProductList";
import Cart from "./Cart/Cart";
import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Login/Login";
import SignUp from "./Login/Signup";
import AllProduct from "./Components/AllProducts";
import BasicBreadcrumbs from "./Components/BreadCrumb";
import SearchItems from "./Components/Search/SearchItems";
import ProductList from "./ProductItems/ProductList";
import CartContextProvider from "./context/CartContext";
import ProductContextProvider from "./context/ProductContext";
// import { useParams } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //  --------------------ADDING TO CART------------------------------ //
  const [cartProduct, setcartProduct] = useState([]);
  const onAdd = (product) => {
    const exist = cartProduct.find((x) => x.id === product.id);
    if (exist) {
      setcartProduct(
        cartProduct.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setcartProduct([...cartProduct, { ...product, qty: 1 }]);
    }
  };
  //----------------------------------------------------------------------------///

  // const params = useParams();
  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    axios.get("https://dev.farm2me.in/api/Product").then((res) => {
      setProducts(res.data.result);
    });
  }, []);

  return (
    <Router>
      <ProductContextProvider>
        <CartContextProvider>
          <div className="App">
            <Switch>
              <Route exact path="/">
                <Home searchTerm={searchTerm} searchHandler={searchHandler} />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route path="/product/:id">
                <ProductList products={products} />
              </Route>
              <Route exact path="/cart">
                <Cart cartProduct={cartProduct} onAdd={onAdd} />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route exact path="/caterogy/id:">
                <BasicBreadcrumbs products={products} />
              </Route>
              <Route path="/search">
                <SearchItems
                  products={products}
                  searchHandler={searchHandler}
                  searchTerm={searchTerm}
                />
              </Route>

              <Route exact path="/:value">
                <AllProduct products={products} />
              </Route>
            </Switch>
          </div>
        </CartContextProvider>
      </ProductContextProvider>
    </Router>
  );
}

export default App;

import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
// import ProductCategory from "../Cart/ProductCategory/ProductsCategory";
import header2 from "../Images/header2.jpg";
import { Card, CardContent, CardMedia } from "@mui/material";
// import { API_URL } from "../Constants/constants";
import { useHistory } from "react-router-dom";
import SearchItems from "./Search/SearchItems";
import ProductCategory from "../ProductCategory/ProductsCategory";
import { API_URL } from "../Constants/constants";

const Home = ({ searchTerm, searchHandler }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`${API_URL}/ProductCategory`).then((res) => {
      setProducts(res.data.result);
    });
  }, []);
  console.log(products);
  return (
    <div style={{ paddingBottom: "5px" }}>
      <Navbar
        products={products}
        searchTerm={searchTerm}
        searchHandler={searchHandler}
      />

      <Card
        elevation={16}
        sx={{
          marginLeft: "2px",
          maxWidth: "99.5%",
          position: "relative",
        }}
      >
        {/* <CardContent > */}

        <CardMedia
          sx={{ alignItems: "center", objectFit: "fill" }}
          component="img"
          height="430vh"
          image={header2}
          alt=""
        />
        {/* </CardContent>  */}
      </Card>
      {/* <Card /> */}

      {products
        .filter((product) => product.subCategoryID == null)
        .map((productCategory) => (
          <div key={productCategory.id}>
            <ProductCategory
              products={productCategory.inverseSubCategory}
              name={productCategory.name}
              value={productCategory.value}
              id={productCategory.inverseSubCategory.id}
              subcategory={productCategory.inverseSubCategory.subCategoryID}
            />
          </div>
        ))}
    </div>
  );
};

export default Home;

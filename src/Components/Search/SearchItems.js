import { Card, IconButton, InputBase, Paper } from "@mui/material";
import { useState } from "react";
import Home from "../Home";
import Navbar from "../Navbar";
import SearchBar from "./SearchBar";
import SearchCard from "./SearchCard";
import SearchIcon from "@material-ui/icons/Search";

const SearchItems = ({ products, searchTerm, searchHandler }) => {
  console.log(searchTerm);
  return (
    <div>
      {/* <input
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={searchHandler}
      /> */}
      {/* <SearchBar /> */}
      <Paper
        component="form"
        sx={{
          p: "1px 4px",
          display: "flex",
          alignItems: "center",
          height: 40,
          width: 500,
          marginLeft: 10,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          value={searchTerm}
          onChange={searchHandler}
        />

        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      {products
        .filter((searchProduct) => {
          if (searchTerm == 0) {
            return null;
          } else if (
            searchProduct.family
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            return searchProduct;
          }
        })
        .map((product) => (
          <SearchCard product={product} />
        ))}
    </div>
  );
};

export default SearchItems;

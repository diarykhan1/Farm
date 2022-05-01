import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useHistory } from "react-router-dom";
import SearchCard from "./SearchCard";
import { useState } from "react";
import Home from "../Home";
import SearchItems from "./SearchItems";
const SearchBar = ({ products, searchTerm, searchHandler }) => {
  const history = useHistory();
  console.log(searchTerm);
  return (
    <>
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
          // onSubmit={() => {
          //   history.push("/search");
          // }}
        />

        {/* // value={searchTerm}
          // onClick={() => {
          //   products
          //     .filter((searchProduct) => {
          //       if (
          //         searchProduct.family
          //           .toLowerCase()
          //           .includes(searchTerm.toLowerCase())
          //       ) {
          //         return searchProduct;
          //       }
          //     })
          //     .map((product) => <SearchCard product={product} />);
          // }} */}

        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <Link to="/search">
            <SearchIcon />
          </Link>
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;

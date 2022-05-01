import { ArrowDropDownCircle } from "@material-ui/icons";
import { Breadcrumbs, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
}

export default function BasicBreadcrumbs() {
  return (
    <div
      style={{
        position: "absolute",
        marginTop: "-70px",
        marginLeft: "50px",
      }}
      role="presentation"
      onClick={handleClick}
    >
      <Breadcrumbs
        style={{
          backgroundColor: "white",
          alignContent: "center",
          marginTop: "-15px",
        }}
        className="breadcrumb"
      >
        <Link
          style={{ textDecoration: "none" }}
          underline="hover"
          color="inherit"
          to="/Oils"
        >
          Bull Driven Ghana Oils
        </Link>
        <Link underline="hover" color="inherit" to="/Millets">
          Positive Millets
        </Link>
        <Link underline="hover" color="inherit" to="/Soaps">
          Natural Soap
        </Link>
      </Breadcrumbs>
    </div>
  );
}

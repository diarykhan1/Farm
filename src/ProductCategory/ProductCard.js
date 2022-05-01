import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCategoryCard = ({ product }) => {
  return (
    <div>
      <Link style={{ textDecoration: "none" }} to={"product/" + product.id}>
        <Card
          elevation={0}
          sx={{ width: "150px", height: "180px", marginTop: "5px" }}
        >
          <CardContent sx={{ padding: "1px 1px 1px 1px" }}>
            <CardMedia
              sx={{ alignItems: "center", objectFit: "fill" }}
              component="img"
              height="135px"
              image={"https://dev.farm2me.in" + product.imagePath}
              alt=""
            />
            <div className="product-name">
              <Typography variant="subtitl2" component="span" align="center">
                {product.name}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCategoryCard;

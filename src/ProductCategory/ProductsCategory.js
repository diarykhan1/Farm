import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ProductCategoryCard from "./ProductCard";

const ProductCategory = (props) => {
  return (
    <div style={{ marginTop: "10px", position: "relative" }}>
      <Container>
        <Card
          elevation={1}
          sx={{
            height: "260px",
            marginLeft: "80px",
            width: "93%",
            maxHeight: 255,
          }}
        >
          <CardContent>
            <Typography align="right">
              <Link style={{ textDecoration: "none" }} to={props.value}>
                <Button size="small" variant="contained">
                  View More
                </Button>
              </Link>
            </Typography>

            <Typography
              position="absolute"
              mt={-5}
              fontSize="22px"
              lineHeight="32px"
              variant="h5"
              fontWeight="500"
              component="span"
              align="left"
            >
              {props.name}
            </Typography>

            <div className="hl"></div>

            <Grid container marginLeft={0} spacing={2} mt={-1}>
              {props.products.map((product) => (
                <Grid key={product.id} item xs={6} md={3} lg={2}>
                  <div className="products">
                    <ProductCategoryCard product={product} />
                  </div>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default ProductCategory;

import {
  Badge,
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Stack,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import RemoveRedIcon from "@mui/icons-material/RemoveRedEye";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lib/types/product";
import { useEffect } from "react";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(
  retrieveProducts,
  (products) => ({ products 
}));

export default function Products() {

    const {setProducts} = actionDispatch(useDispatch());
    const {products} = useSelector(productsRetriever);

    useEffect(() => {
      const product = new ProductService();
      product.getProducts({
        page: 1,
        limit: 8,
        order: "createdAt",
        productCollection: ProductCollection.DISH,
        search: "",
      })
      .then(data => setProducts(data))
      .catch((err) => console.log(err));
    }, []);

  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Box></Box>
            <Box className={"category-title"}>Burak Restaurant</Box>
            {/* <Box className={"single-search-big-box"}>
              <SearchBar />
            </Box> */}
          </Stack>
          <Stack className={"dishes-filter-box"}>
            <Button variant={"contained"} color={"primary"} className={"order"}>
              New
            </Button>
            <Button
              variant={"contained"}
              color={"secondary"}
              className={"order"}
            >
              Price
            </Button>
            <Button
              variant={"contained"}
              color={"secondary"}
              className={"order"}
            >
              Views
            </Button>
          </Stack>
          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <div className="category-main">
                <Button variant={"contained"} color={"secondary"}>
                  OTHER
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  SALADS
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  DRINK
                </Button>
                <Button variant={"contained"} color={"secondary"}>
                  DESSERT
                </Button>
                <Button variant={"contained"} color={"primary"}>
                  DISH
                </Button>
              </div>
            </Stack>

            <Stack className={"product-wrapper"}>
              {products.length !== 0 ? (
                products?.map((product: Product, index) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume = product.productCollection === ProductCollection.DRINK 
                  ? product.productVolume + " litre " 
                  : product.productSize + " size";
                  return (
                    <Stack key={product._id} className={"product-card"}>
                      <Stack
                        className={"product-img"}
                        sx={{
                          backgroundImage: `url(${imagePath})`,
                          backgroundSize: "cover",
                        }}
                      >
                        <Box className="product-sale">{sizeVolume}</Box>
                        <Stack>
                          <Box>
                            <Button className={"shop-btn"}>
                              <img
                                src={"/icons/shopping-cart.svg"}
                                alt="btn-image"
                              />
                            </Button>
                          </Box>
                          <Box>
                            <Button className={"view-btn"}>
                              <Badge 
                                badgeContent={product.productViews} 
                                color="secondary"
                                >
                                <RemoveRedIcon
                                  sx={{ 
                                    color: 
                                      product.productViews === 0 ? "grey" : "white"
                                    }}
                                />
                              </Badge>
                            </Button>
                          </Box>
                        </Stack>
                      </Stack>
                      <Box className={"product-desc-box"}>
                        <span className={"product-title"}>
                          {product.productName}
                        </span>
                        <div className={"product-desc"}>
                          <MonetizationOnIcon />
                          {product.productPrice}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">New Products are not available!</Box>
              )}
            </Stack>
          </Stack>

          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>
      <div className={"brands-logo"}>
        <Container className={"family-brands"}>
          <Box className={"category-title"}>Our Family Brands</Box>
          <Stack className={"brand-list"}>
            <Box>
              <Card className="card-media">
                <CardMedia
                  component="img"
                  image="../../../img/gurme.webp"
                  alt="green iguana"
                />
              </Card>
            </Box>
            <Box>
              <Card className="card-media">
                <CardMedia
                  component="img"
                  image="../../../img/seafood.webp"
                  alt="green iguana"
                />
              </Card>
            </Box>
            <Box>
              <Card className="card-media">
                <CardMedia
                  component="img"
                  image="../../../img/sweets.webp"
                  alt="green iguana"
                />
              </Card>
            </Box>
            <Box>
              <Card className="card-media">
                <CardMedia
                  component="img"
                  image="../../../img/doner.webp"
                  alt="green iguana"
                />
              </Card>
            </Box>
          </Stack>
        </Container>
      </div>

      <div className={"address"}>
        <Container>
          <Stack>
            <Box className={"category-title"}>Our Address</Box>
            <iframe
              style={{ marginTop: "60px" }}
              src="https://maps.google.com/maps?q=Burak%20restaurand%20istanbul&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              width={"1260"}
              height={"500"}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}


import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { CardCover } from "@mui/joy";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AspectRatio from "@mui/joy/AspectRatio";
import Divider from "../../components/divider"
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveNewDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { ProductCollection } from "../../../lib/enums/product.enum";

/** REDUX SLICE & SELECTOR */
const newDishesRetriever = createSelector(retrieveNewDishes, (newDishes) => ({ 
    newDishes, 
  }));

export default function NewDishes() {
  const { newDishes } = useSelector(newDishesRetriever); 

  console.log("newDishes:", newDishes);
  return (
    <div className={"new-dishes-frame"}>
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Fresh Menu</Box>
          <Stack className={"cards-frame"}>
            <CssVarsProvider>
              {newDishes.length !== 0 ? (
                newDishes.map((product: Product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume = product.productCollection === ProductCollection.DRINK 
                    ? product.productVolume + "l" 
                    : product.productSize + " size ";
                  return (
                    <Card key={product._id} variant="outlined" className={"card"}>
                      <CardOverflow>
                        <div className="product-sale">{sizeVolume}</div>
                        <AspectRatio ratio="1">
                            <img src={imagePath} alt="image" />
                        </AspectRatio>
                      </CardOverflow>
                      <CardOverflow variant="soft" className="product-detail">
                        <Stack className="info">
                            <Stack className="product-top">
                                <Typography className={"title"}>
                                    {product.productName}
                                </Typography>
                                <Divider width="2" height="24" bg="#d9d9d9" />
                                <Typography className={"price"}>${product.productPrice}</Typography>
                            </Stack>
                            <Stack className="product-bottom">
                                <Typography className={"views"}>
                                    {product.productViews}
                                    <VisibilityIcon
                                    sx={{ fontSize: 20, marginLeft: "5px"}}
                                    />
                                </Typography>
                            </Stack>
                        </Stack>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">New Products are not available!</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

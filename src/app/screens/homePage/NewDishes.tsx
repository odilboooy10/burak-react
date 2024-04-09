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

const newDishList = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
];

function NewDishes() {
  return (
    <div className={"new-dishes-frame"}>
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Fresh Menu</Box>
          <Stack className={"cards-frame"}>
            <CssVarsProvider>
              {newDishList.length !== 0 ? (
                newDishList.map((ele, index) => {
                  return (
                    <Card key={index} variant="outlined" className={"card"}>
                      <CardOverflow>
                        <div className="product-sale">Normal size</div>
                        <AspectRatio ratio="1">
                            <img src={ele.imagePath} alt="image" />
                        </AspectRatio>
                      </CardOverflow>
                      <CardOverflow variant="soft" className="product-detail">
                        <Stack className="info">
                            <Stack className="product-top">
                                <Typography className={"title"}>
                                    {ele.productName}
                                </Typography>
                                <Divider width="2" height="24" bg="#d9d9d9" />
                                <Typography className={"price"}>$12</Typography>
                            </Stack>
                            <Stack className="product-bottom">
                                <Typography className={"views"}>
                                    20
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

export default NewDishes;

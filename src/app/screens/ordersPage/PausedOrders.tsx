import TabPanel from "@mui/lab/TabPanel";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";

export default function PausedOrders() {
  return (
    <TabPanel value={"1"}>
      <Stack>
        {[1, 2].map((ele, index) => {
          return (
            <Box key={index} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {[1, 2, 3].map((ele2, index2) => {
                  return (
                    <Box key={index2} className={"orders-name-price"}>
                      <img
                        src="/img/lavash.webp"
                        alt=""
                        className={"order-dish-img"}
                      />
                      <p className={"title-dish"}>Lavash</p>
                      <Box className={"price-box"}>
                        <p>$9</p>
                        <img src="/icons/close.svg" alt="" />
                        <p>$2</p>
                        <img src="/icons/pause.svg" alt="" />
                        <p style={{ marginLeft: "15px" }}>$24</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price</p>
                  <p>$22</p>
                  <img src={"/icons/plus.svg"} alt="" />
                  <p>delivery cost</p>
                  <p>$2</p>
                  <img
                    src="/icons/pause.svg"
                    alt=""
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Total</p>
                  <p>$24</p>
                </Box>
                <Button variant={"contained"} color={"secondary"} className={"cancel-button"}>CANCEL</Button>
                <Button variant={"contained"} className={"pay-button"}>PAYMENT</Button>
              </Box>
            </Box>
          );
        })}

        {false && (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img
              src="/icons/noimage-list.svg"
              alt=""
              style={{ width: 300, height: 300 }}
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}

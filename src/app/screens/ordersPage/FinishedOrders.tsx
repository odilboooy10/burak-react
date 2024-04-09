import React from "react"
import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";


export default function FinishedOrders() {
    return (
      <TabPanel value={"3"}>
        <Stack>
          {[].map((ele, index) => {
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
              </Box>
            );
          })}

        {true && (
          <Box display={ "flex" } flexDirection={"row"} justifyContent={"center"}>
            <img src="/icons/noimage-list.svg" 
            alt="" 
            style={{ width: 300, height: 300}}
            />
          </Box>
        )}
        </Stack>
      </TabPanel>
    );
}

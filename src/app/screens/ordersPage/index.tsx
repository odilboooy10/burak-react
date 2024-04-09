import React from "react";
import { SyntheticEvent, useState } from "react";
import { Container, Box, Stack } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import FinishedOrders from "./FinishedOrders";
import ProcessOrder from "./ProcessOrder";
// import CreditCardForm from "../../components/creditCard/creditCard"
// import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import "../../../css/order.css";

export default function OrdersPage() {
  const [value, setValue] = useState("1");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className={"order-page"}>
      <Container className="order-container">
        <Stack className="order-left">
          <TabContext value={value}>
            <Box className={"order-nav-frame"}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className={"table_list"}
                >
                  <Tab label="PAUSED ORDER" value={"1"} />
                  <Tab label="PROCESS ORDER" value={"2"} />
                  <Tab label="FINISHED ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className={"order-main-content"}>
              <PausedOrders />
              <ProcessOrder />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>
        <Stack className={"order-right"}>
          <Box className={"order-info-box"}>
            <Box className={"member-box"}>
              <div className={"order-user-img"}>
                <img
                  src="/icons/default-user.svg"
                  alt=""
                  className={"order-user-avatar"}
                />
                <div className={"order-user-icon-box"}>
                  <img
                    src="/icons/user-badge.svg"
                    alt=""
                    className="order-user-prof-img"
                  />
                </div>
              </div>
              <span>Martin</span>
              <span>User</span>
            </Box>
            <Box className={"liner"}></Box>
            <Box className={"order-user-address"}>
              <div style={{ display: "flex"}}>
                <LocationOnIcon />
              </div>
              <div><p>South Korea, Busan</p></div>
            </Box>
          </Box>
          {/* <Box className={"cards-box"}>
            <StyledEngineProvider injectFirst>
              <CssVarsProvider>
                <CreditCardForm />
              </CssVarsProvider>
            </StyledEngineProvider>
          </Box> */}
        </Stack>
      </Container>
    </div>
  );
}

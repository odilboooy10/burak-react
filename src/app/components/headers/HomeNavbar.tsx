import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

export function HomeNavbar() {
  const authMember = null;
  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to={"/"}>
              <img className="brand-logo"
                src="/icons/Burak.svg"
                alt="Logo"
              />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink to={"/"} activeClassName={"underline"}>Home</NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to={"/products"} activeClassName={"underline"}>Products</NavLink>
            </Box>
            {authMember &&
              [
                { path: "/orders", text: "Orders" },
                { path: "/member-page", text: "My Page" },
              ].map((link, index) => (
                <Box key={index} className={"hover-line"}>
                  <NavLink to={link.path} activeClassName={"underline"}>{link.text}</NavLink>
                </Box>
              ))}
              <Box className={"hover-line"}>
              <NavLink to={"/help"} activeClassName={"underline"}>
                Help
              </NavLink>
            </Box>
            <Basket />

            {!authMember ? (
              <Box>
                <NavLink to={"/login"}><Button 
                variant="contained"
                className="login-button">Login</Button></NavLink>
              </Box>
            ) : (
              <img className="user-avatar"
              src="/icons/default-user.svg"
              aria-haspopup="true"
              />
            )}
          </Stack>
        </Stack>
        <Stack className={"header-frame"}>
            <Stack className={"detail"}>
                <Box className={"head-main-txt"}>World's Most Delicious Cousine</Box>
                <Box className={"wel-txt"}>The Choice, not just a choice!</Box>
                <Box className={"service-txt"}>24 hour service</Box>
                <Box className={"signup"}>
                    {!authMember ? (
                    <Button variant="contained" className="signup-button">SING UP</Button> 
                    ) : null }
                </Box>
            </Stack>
            <Stack className="logo-frame">
                <div className="logo-img"></div>
            </Stack>
        </Stack>
      </Container>
    </div>
  )
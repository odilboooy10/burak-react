import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

export default function OtherNavebar() {
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
      </Container>
    </div>
);
}
"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Image } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import logo from "@/assets/web.png";
import Link from "next/link";
import Stack from '@mui/material/Stack';

// icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Header from "./Header";

const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Pages",
    pathname: "/pages",
  },
  {
    route: "Category",
    pathname: "/category",
  },
  {
    route: "News",
    pathname: "/news",
  },
  {
    route: "About",
    pathname: "/about",
  },
  {
    route: "Contact",
    pathname: "/contact",
  },
];

function Navbar() {
  return (
    <>
    <Header />
      <AppBar position="static" className="bg-black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} width={100} height={100} alt="logo" />

          <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link href={item.pathname} key={item}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>

          <Box>
            <Stack direction="row" sx={{
                "& svg": {
                    color: "white"
                }
            }}>
              <IconButton color="secondary" aria-label="delete">
                <FacebookIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="delete">
                <TwitterIcon />
              </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default Navbar;

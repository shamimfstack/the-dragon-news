import { Box, Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Link from "next/link";
import Typography from '@mui/material/Typography';

// icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

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

export default function Footer() {
  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box
          className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton color="secondary" aria-label="delete">
            <FacebookIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="delete">
            <TwitterIcon />
          </IconButton>
        </Box>
        <Box className="w-full text-center">
          {navItems.map((item) => (
            <Link href={item.pathname} key={item}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography variant="body2" color="gray" textAlign="center">&copy;Shamim Ahammad - All rights reserved </Typography>
      </Container>
    </Box>
  );
}

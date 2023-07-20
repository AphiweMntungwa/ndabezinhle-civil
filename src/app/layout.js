"use client";
import React, { useState } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { Icon } from "@iconify/react";

// ** MUI components
import {
  Grid,
  Paper,
  Typography,
  Box,
  Menu,
  MenuItem,
  IconButton,
  AppBar,
  Container,
  Toolbar,
  Avatar,
  Tooltip,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Civil Engineer Portfolio",
//   description:
//     "A civil engineering portfolio website for Ndabezinhle Mntungwa.",
// };

export default function RootLayout(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const pages = ["Products", "Pricing", "Blog"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Grid container>
          <Grid item sx={{ width: "100%" }}>
            <AppBar
              position="static"
              sx={{ color: "black", backgroundColor: "transparent" }}
            >
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  {/* <Grid sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
                  </Grid> */}

                  {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                  <Link href="/">
                    <Typography
                      variant="h6"
                      noWrap
                      sx={{
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      NDABA
                    </Typography>
                  </Link>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                  >
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: "block", md: "none" },
                      }}
                    >
                      {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                  {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href=""
                    sx={{
                      mr: 2,
                      display: { xs: "flex", md: "none" },
                      flexGrow: 1,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      textDecoration: "none",
                    }}
                  >
                    <Link href="/">NDABA</Link>
                  </Typography>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                    {pages.map((page) => (
                      <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "black", display: "block" }}
                      >
                        {page}
                      </Button>
                    ))}
                  </Box>

                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open profile">
                      <Link href="/profile">
                        <IconButton sx={{ p: 0 }}>
                          <Avatar alt="Ndabezinhle Mntungwa" src="/ndabo.jpg" />
                        </IconButton>
                      </Link>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {settings.map((setting) => (
                        <Link key={setting} href={`/${setting.toLowerCase()}`}>
                          <MenuItem>
                            <Typography textAlign="center">
                              {setting}
                            </Typography>
                          </MenuItem>
                        </Link>
                      ))}
                    </Menu>
                  </Box>
                </Toolbar>
              </Container>
            </AppBar>
          </Grid>
          <Grid item>{props.children}</Grid>
        </Grid>
      </body>
    </html>
  );
}

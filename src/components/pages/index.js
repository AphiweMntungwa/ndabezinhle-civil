import React, { useState } from "react";
// ** Next Imports
import Link from "next/link";

//** Layouts */
import Layout from "@/components/layout/Layout";

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

function Home() {
  return (
    <Layout>
      <Grid container display="flex">
        <Grid item>
          <Typography variant="h1">This is the Home Page</Typography>
          <Link href="/profile">
            <Button variant="contained">Go to Profile</Button>
          </Link>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Home;

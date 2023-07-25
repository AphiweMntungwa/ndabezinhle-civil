"use client";
import BioCard from "@/components/profile.js/BioCard";
import { Grid } from "@mui/material";
import React from "react";

function Profile() {
  return (
    <Grid container className="flex justify-center items-center" sx={{width: '100vw'}}>
      <Grid item marginTop='2.5%'>
        <BioCard />
      </Grid>
    </Grid>
  );
}

export default Profile;

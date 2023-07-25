"use client";
import { Paper, Typography, Container } from "@mui/material";
import React from "react";

function Project1() {
  return (
    <div class="flex w-screen justify-center items-center">
      <Paper sx={{ marginTop: "2%" }}>
        <Typography variant="h5" component="h5">
          Kings Gate
        </Typography>
        <Typography variant="h6" component="h6">
          Hillcrest, Durban
        </Typography>
        <Container>
          <Typography>
            This is a project I was part of for a few years in part of building
            the KingsGate estate in Hillcrest, Durban. I solved many problems
            and I enjoyed my time working on this site.
          </Typography>
        </Container>
      </Paper>
    </div>
  );
}

export default Project1;

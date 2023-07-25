"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import CustomizedBreadcrumbs from "@/components/breadcrumb/Breadcrumb";

// ** MUI components
import {
  Grid,
  Paper,
  Typography,
  Card,
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
  styled,
  Slide,
  Zoom,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@mui/material";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export default function Home() {
  const [isBlurApplied, setIsBlurApplied] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsBlurApplied(true);
    }, 500);

    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex < textSlides.length - 1) {
          return ++prevIndex;
        } else {
          return 0;
        }
      });
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  const sentence = "From Project Management to site management.";
  const letters = Array.from(sentence);

  const content = (
    <Card
      sx={{
        width: 300,
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="/work-images/1.avif"
        title="site"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Kingsgate Estate
        </Typography>
        <Typography variant="body2" color="text.secondary">
          To develop, build and service South Africa’s, especially the Eastern
          Cape’s requirements for better living, working and traveling
          conditions in order to improve the quality of life for all.
          Engineering that makes a difference. The company is dedicated to
          maintaining professional standards within the Civil Engineering
          Industry set by ECSA.
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Link href="/projects/1">
          <Button variant="outlined" sx={{ color: "#000" }}>
            view more
          </Button>
        </Link>
      </CardActions>
    </Card>
  );

  const items = [
    <Grid key="1" container justifyContent="space-evenly">
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <Grid item>{content}</Grid>
      </Slide>
    </Grid>,
    <Grid key="2" container justifyContent="space-evenly">
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <Grid item>{content}</Grid>
      </Slide>
    </Grid>,
    <Grid key="3" container justifyContent="space-evenly">
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <Grid item>{content}</Grid>
      </Slide>
    </Grid>,
    <Grid key="4" container justifyContent="space-evenly">
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <Grid item>{content}</Grid>
      </Slide>
    </Grid>,
  ];

  const textSlides = [
    <div className="my-svg-text" key="1">
      <Typography variant="h5">{sentence}</Typography>
      <Typography variant="h5">{sentence}</Typography>
    </div>,
    <div className="my-svg-text" key="2">
      <Typography variant="h5">
        Stormwater, Surveying, Subcontracting
      </Typography>
      <Typography variant="h5">
        Stormwater, Surveying, Subcontracting
      </Typography>
    </div>,
  ];

  return (
    <Grid
      container
      sx={{ width: "100%", margin: 0, overflowX: "hidden" }}
      flexDirection="column"
      alignItems="center"
    >
      <Grid
        item
        className={`blur-element ${isBlurApplied ? "blur-applied" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
          backgroundImage: "url('/construction.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Grid>
      <Grid
        item
        className="overhead-text"
        sx={{
          backgroundColor: "rgba(30, 56, 150, .25)",
          width: "100%",
          backgroundImage: "url('/zigzag.png')",
          backgroundSize: "contain",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center"
        }}
      >
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
          {textSlides[index]}
        </Slide>
      </Grid>
      <CustomizedBreadcrumbs />
      <Grid
        item
        sx={{ fontFamily: "sans-serif", width: "100vw", height: "100%" }}
      >
        <AliceCarousel
          autoPlay
          autoPlayInterval={3000}
          infinite
          responsive={{
            0: { items: 1 },
            768: { items: 3 },
          }}
          showSlideIndex
          mouseTracking
          keyboardNavigation
          items={items}
          disableButtonsControls
        />
      </Grid>
    </Grid>
  );
}

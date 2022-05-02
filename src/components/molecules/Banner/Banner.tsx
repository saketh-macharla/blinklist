import React from "react";
import { Grid } from "@mui/material";
import undraw_Reading from "../../../assets/Image/undraw_Reading.png";
import { customStyles } from "../../../theme";
import Bleft from "./Bleft/Bleft";

const Banner = () => {
  const classes = customStyles();
  return (
    <Grid
      container
      sx={{ bgcolor: "#F1F6F4", height: "264px", width: "912px", mb: "60px" }}
      wrap="nowrap"
      data-testid="full-Banner"
    >
      <Grid item my={"45px"} mx={"45px"}>
        <Bleft />
      </Grid>
      <Grid item mx={"45px"}>
        <img
          src={undraw_Reading}
          alt="banner-image"
          className={classes.bannerImage}
        />
      </Grid>
    </Grid>
  );
};

export default Banner;

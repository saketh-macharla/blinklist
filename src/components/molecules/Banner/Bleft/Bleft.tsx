import React from "react";
import { Grid } from "@mui/material";
import CustomTypo from "../../../atoms/CustomTypo";
import { customStyles } from "../../../../theme";

const Bleft = () => {
  const classes = customStyles();
  return (
    <Grid
      item
      container
      direction="column"
      rowSpacing={"15px"}
      data-testid="Banner-left"
    >
      <Grid item>
        <CustomTypo
          variant="heading"
          component="div"
          className={classes.exploretitle}
          children="Explore Books on entrepreneurship"
        />
      </Grid>

      <Grid item>
        <CustomTypo
          variant="subtitle2"
          className={classes.explorecontent}
          component="div"
          children="Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start"
        />
      </Grid>
    </Grid>
  );
};

export default Bleft;

import { Grid } from "@mui/material";
import React from "react";
import Fleft from "./Fleft";
import Fright from "./Fright";
import { customStyles } from "../../../theme";
import CustomTypo from "../../atoms/CustomTypo";

const index = () => {
  const classes = customStyles();
  return (
    <Grid container className={classes.fullFooter} role="Footer">
      <Grid
        item
        container
        direction="column"
        rowGap={6}
        sx={{ alignItems: "flex-start", width: "952px" }}
      >
        <Grid
          item
          container
          sx={{ width: "952px", height: "224px" }}
          columnGap={4}
        >
          <Grid item>
            <Fleft />
          </Grid>

          <Grid item>
            <Fright />
          </Grid>
        </Grid>

        <Grid item>
          <CustomTypo
            variant="caption"
            component="div"
            children="© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies"
            className={classes.iconText}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default index;

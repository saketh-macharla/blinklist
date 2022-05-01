import React from "react";
import Grid from "@mui/material/Grid";
import CustomTypo from "../../../atoms/CustomTypo";
import { customStyles } from "../../../../theme";

const Index = () => {
  const classes = customStyles();
  return (
    <Grid
      container
      direction="row"
      columnGap={4}
      wrap="nowrap"
      className={classes.footer}
      data-testid="footer-right"
    >
      {/* // Editorial */}
      <Grid
        item
        container
        direction="column"
        rowGap={2}
        sx={{ width: "214px", height: "224px" }}
      >
        <Grid item>
          <CustomTypo
            variant="body1"
            component="div"
            children="Editorial"
            className={classes.bookInfo}
          />
        </Grid>

        <Grid item>
          <CustomTypo
            variant="body2"
            component="div"
            children="Book lists"
            className={classes.iconText}
          />
        </Grid>

        <Grid item>
          <CustomTypo
            variant="body2"
            component="div"
            children="What is Nonfiction?"
            className={classes.iconText}
          />
        </Grid>

        <Grid item>
          <CustomTypo
            variant="body2"
            component="div"
            children="What to read next?"
            className={classes.iconText}
          />
        </Grid>

        <Grid item>
          <CustomTypo
            variant="body2"
            component="div"
            children="Benefits of reading"
            className={classes.iconText}
          />
        </Grid>

        <Grid item></Grid>
      </Grid>

      {/* // Useful Links */}
      <Grid
        item
        container
        direction="column"
        rowGap={2}
        sx={{ width: "132px", height: "224px" }}
      >
        <Grid item>
          <CustomTypo
            variant="body1"
            component="div"
            children="Useful links"
            className={classes.bookInfo}
          />
        </Grid>

        <Grid item>
          <CustomTypo
            variant="body2"
            component="div"
            children="Pricing"
            className={classes.iconText}
          />
        </Grid>

        <Grid item>
          <CustomTypo
            variant="body2"
            component="div"
            children="Blinkist business"
            className={classes.iconText}
          />
        </Grid>

        <Grid item>
          <CustomTypo
            variant="body2"
            component="div"
            children="Gift cards"
            className={classes.iconText}
          />
        </Grid>

        <Grid item>
          <CustomTypo
            variant="body2"
            component="div"
            children="Blinkist magaine"
            className={classes.iconText}
          />
        </Grid>

        <Grid item>
          <CustomTypo
            variant="body2"
            component="div"
            children="Contact & help"
            className={classes.iconText}
          />
        </Grid>
      </Grid>

      {/* // Company */}
      <Grid
        item
        container
        direction="column"
        rowGap={2}
        sx={{ width: "132px", height: "224px" }}
      >
        <Grid item>
          <CustomTypo
            variant="body1"
            component="div"
            children="Company"
            className={classes.bookInfo}
          />
        </Grid>

        <Grid item>
          <CustomTypo
            variant="body2"
            component="div"
            children="About"
            className={classes.iconText}
          />
        </Grid>

        <Grid item>
          <CustomTypo
            variant="body2"
            component="div"
            children="Careers"
            className={classes.iconText}
          />
        </Grid>

        <Grid item>
          <CustomTypo
            variant="body2"
            component="div"
            children="partners"
            className={classes.iconText}
          />
        </Grid>

        <Grid item>
          <CustomTypo
            variant="body2"
            component="div"
            children="Code of Conduct"
            className={classes.iconText}
          />
        </Grid>

        <Grid item></Grid>
      </Grid>
    </Grid>
  );
};

export default Index;

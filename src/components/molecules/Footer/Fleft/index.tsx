import Grid from "@mui/material/Grid";
import React from "react";
import BlinkList from "../../../../assets/Image/BlinkList.svg";
import CustomTypo from "../../../atoms/CustomTypo";
import { customStyles } from "../../../../theme";

const Index = () => {
  const classes = customStyles();
  return (
    <Grid
      container
      direction="column"
      rowGap={"32px"}
      sx={{
        width: "378px",
        height: "120px",
      }}
      role="footer-left"
    >
      <Grid item sx={{ height: "24px", width: "100px" }}>
        <img src={BlinkList} />
      </Grid>

      <Grid item>
        <CustomTypo
          variant="subtitle1"
          component="div"
          children="Big ideas in small packages
          Start learnign now"
          className={classes.footerLeft}
        />
      </Grid>
    </Grid>
  );
};

export default Index;

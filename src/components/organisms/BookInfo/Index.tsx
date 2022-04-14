import React from "react";
import Grid from "@mui/material/Grid";
import CustomTypo from "../../atoms/CustomTypo";
import { ClassNames } from "@emotion/react";
import { customStyles } from "../../../theme";
import IconWithText from "../../molecules/IconWithText/index";
import Time from "../../../assets/Image/Time.png";
import Buttons from "../../atoms/Buttons/Buttons";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface BookInfoProps {
  imgPath: string;
  children: string;
}
const Index = (props: BookInfoProps) => {
  const classes = customStyles();
  return (
    <div>
      <CustomTypo
        variant="body2"
        component="div"
        children="Get the key ideas from"
        className={classes.bookInfo}
      />

      <Grid
        container
        columnGap={"125px"}
        mt={"40px"}
        sx={{ alignItems: "flex-start" }}
        wrap="nowrap"
      >
        <Grid
          item
          container
          direction="column"
          rowGap={"19px"}
          sx={{ width: "509px" }}
        >
          <Grid item container direction="column" rowGap={"24px"}>
            <Grid item sx={{ height: "45px" }}>
              <CustomTypo
                variant="heading"
                component="div"
                children={props.children}
                className={classes.bookInfo}
              />
            </Grid>

            <Grid item sx={{ height: "25px" }}>
              <CustomTypo
                variant="subtitle5"
                component="div"
                children="Turning Your Business into an Enduring Great Company"
                className={classes.bookInfo}
              />
            </Grid>

            <Grid item sx={{ height: "20px" }}>
              <CustomTypo
                variant="body2"
                component="div"
                children="By Jim Collins and Bill Lasier"
                className={classes.iconText}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            rowGap={"80px"}
            sx={{ width: "509px" }}
          >
            <Grid item sx={{ height: "24px" }}>
              <IconWithText Path={Time} text="15-minute read" ColGap="7.33px" />
            </Grid>
            <Grid item container columnGap={"24px"}>
              <Grid item>
                <Buttons
                  variant="outlined"
                  className={`${classes.buttonstyle} ${classes.readNowButton}`}
                >
                  Read now
                </Buttons>
              </Grid>

              <Grid item>
                <Buttons
                  variant="text"
                  className={`${classes.buttonstyle} ${classes.finishedReading}`}
                >
                  Finished Reading
                </Buttons>
              </Grid>
              <Grid item>
                <Buttons
                  variant="text"
                  className={`${classes.buttonstyle} ${classes.sendToKindle}`}
                  endIcon={<ArrowForwardIcon />}
                >
                  Send to Kindle
                </Buttons>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ height: "304px", alignSelf: "stretch" }}>
          <img src={props.imgPath} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;

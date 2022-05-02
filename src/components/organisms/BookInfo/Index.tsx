import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import CustomTypo from "../../atoms/CustomTypo";
import { customStyles } from "../../../theme";
import IconWithText from "../../molecules/IconWithText/index";
import Time from "../../../assets/Image/Time.png";
import Buttons from "../../atoms/Buttons/Buttons";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";

interface BookInfoProps {
  imgPath: string;
  authorName: string;
  bookName: string;
  finish: boolean;
  id: number;
}
const Index = (props: BookInfoProps) => {
  const classes = customStyles();
  const [click, setClicked] = useState<boolean>();
  // Note: If props are used to set initial state then use useEffect
  //Here you have to add useEffect if you want to update the state on props change, which will listen to prop change & will update the state value accordingly
  // refer - https://stackoverflow.com/questions/58818727/react-usestate-not-setting-initial-value

  useEffect(() => {
    setClicked(props.finish);
  }, [props.finish]);

  const handleClick = async () => {
    const response1 = await axios.patch(
      `http://localhost:3001/booklist/${props.id}`,
      {
        finished: !click,
      }
    );
    setClicked(response1.data.finished);
  };

  return (
    <div role="BookInfo">
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
                children={props.bookName}
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
                children={`By ${props.authorName}`}
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
                  onClick={handleClick}
                  disabled={!click ? true : false}
                >
                  Read now
                </Buttons>
              </Grid>

              <Grid item>
                <Buttons
                  variant="text"
                  className={`${classes.buttonstyle} ${classes.finishedReading}`}
                  onClick={handleClick}
                  disabled={click ? true : false}
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

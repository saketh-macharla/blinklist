import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import CustomTypo from "../../../atoms/CustomTypo";
import { customStyles } from "../../../../theme";
import IconWithText from "../../IconWithText";
import AccessTime from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { padding } from "@mui/system";
import AddToLibrary from "../../AddToLibrary";
import { bookInfo } from "../../../organisms/FunctionalGrid";

export interface CardsProps {
  handleClick: any;
  id: number;
  imgsrc: string;
  bookName: string;
  authorName: string;
  time: string;
  nReads: string;
  icon1: string;
  icon2: string;
}

const index = (props: CardsProps) => {
  const classes = customStyles();

  return (
    <Card className={classes.CardHead}>
      <CardMedia
        component="img"
        alt="Card-image"
        height="292px"
        width="294.1px"
        image={props.imgsrc}
      />

      <CardContent sx={{ padding: "16px 16px 11px 16px" }}>
        <CustomTypo
          variant="subtitle1"
          component="div"
          children={props.bookName}
          className={classes.bookTitle}
        />

        <CustomTypo
          variant="body1"
          component="div"
          children={props.authorName}
          className={classes.bookAuthor}
        />
        <div style={{ display: "flex", columnGap: "44px" }}>
          <IconWithText
            Path={props.icon1}
            text={props.time}
            ColGap="5.67px"
            className={classes.timerIcon}
          />

          <IconWithText
            Path={props.icon2}
            text={props.nReads}
            ColGap="5px"
            className={classes.personIcons}
          />
        </div>
      </CardContent>

      <CardActions sx={{ padding: "0px" }}>
        <AddToLibrary handleClick={() => props.handleClick(props.id)} />
      </CardActions>
    </Card>
  );
};

export default index;

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
import Buttons from "../../../atoms/Buttons/Buttons";
import { padding } from "@mui/system";

export interface CardsProps {
  imgsrc: string;
  bookName: string;
  authorName: string;
  time: string;
  nReads: string;
  icon1: string;
  icon2: string;
  finished: boolean;
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

      <CardContent>
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

      <CardActions
        sx={{
          justifyContent: "center",
          mb: "12px",
          padding: "0px",
          height: "20px",
        }}
      >
        {/* <Buttons variant='text' className={classes.buttonstyle}>
      <CustomTypo  variant='body1' component='div' children='Finished'/>
      </Buttons> */}
        <div>
          {props.finished ? (
            <Buttons variant="text">
              <CustomTypo
                variant="body1"
                component="div"
                children="Read again"
                className={classes.cardReadagain}
              />
            </Buttons>
          ) : (
            <Buttons variant="text">
              <CustomTypo
                variant="body1"
                component="div"
                children="finished"
                className={classes.finished}
              />
            </Buttons>
          )}
        </div>
      </CardActions>
      <div>
        {props.finished ? (
          <>
            <Grid
              item
              xs={12}
              sx={{ backgroundColor: "#DFE8F6", height: "15px" }}
            />
          </>
        ) : (
          <Grid container direction="row">
            <Grid item xs={4} sx={{ backgroundColor: "#E1ECFC" }} />
            <Grid
              item
              xs={8}
              sx={{
                background: "#F1F6F4",
                border: "1px solid #E1ECFC",
                height: "15px",
              }}
            />
          </Grid>
        )}
      </div>
    </Card>

    // <Card className={props.className}>
    //   <CardMedia
    //     component="img"
    //     alt="Card-image"
    //     height="292px"
    //     width="294.1px"
    //     image={props.imgsrc}
    //   />

    //   <CardContent>
    //     <Grid container rowGap={"17px"} direction="column">
    //       <Grid item container rowGap={"16px"}>
    //         <Grid item>
    //           <CustomTypo
    //             variant="subtitle1"
    //             component="div"
    //             children={props.bookName}
    //             className={classes.bookTitle}
    //           />
    //         </Grid>

    //         <Grid item>
    //           <CustomTypo
    //             variant="body1"
    //             component="div"
    //             children={props.authorName}
    //             className={classes.bookAuthor}
    //           />
    //         </Grid>
    //       </Grid>

    //       <Grid item container columnGap={"47.3px"}>
    //         <Grid item>
    //           <IconWithText
    //             Path={props.icon1}
    //             text={props.time}
    //             ColGap="5.67px"
    //           />
    //         </Grid>
    //         <Grid item>
    //           <IconWithText
    //             Path={props.icon2}
    //             text={props.nReads}
    //             ColGap="7.33px"
    //           />
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </CardContent>

    //   <CardActions>
    //     {/* <Buttons variant='text' className={classes.buttonstyle}>
    //     <CustomTypo  variant='body1' component='div' children='Finished'/>
    //     </Buttons> */}

    //     <Grid item container direction="column" rowGap={1.5} mt={"15px"}>
    //       <Grid item>
    //         {props.finished ? (
    //           <Buttons variant="text">
    //             <CustomTypo
    //               variant="body1"
    //               component="div"
    //               children="Read again"
    //               className={classes.cardReadagain}
    //             />
    //           </Buttons>
    //         ) : (
    //           <Buttons variant="text">
    //             <CustomTypo
    //               variant="body1"
    //               component="div"
    //               children="finished"
    //               className={classes.cardReadagain}
    //             />
    //           </Buttons>
    //         )}
    //       </Grid>

    //       <Grid item container sx={{ height: "15px" }}>
    //         {props.finished ? (
    //           <>
    //             <Grid item xs={12} sx={{ backgroundColor: "#DFE8F6" }} />
    //           </>
    //         ) : (
    //           <>
    //             <Grid item xs={4} sx={{ backgroundColor: "#E1ECFC" }} />
    //             <Grid
    //               item
    //               xs={8}
    //               sx={{ background: "#F1F6F4", border: "1px solid #E1ECFC" }}
    //             />
    //           </>
    //         )}
    //       </Grid>
    //     </Grid>
    //   </CardActions>
    // </Card>

    // <Card className={props.className}>
    //       <CardMedia
    //         component="img"
    //         alt="Card-image"
    //         height="292px"
    //         width="294.1px"
    //         image={props.imgsrc}
    //       />

    //       <CardContent>
    //         <Grid container rowGap={"17px"} direction="column">
    //           <Grid item container rowGap={"16px"}>
    //             <Grid item>
    //               <CustomTypo
    //                 variant="subtitle1"
    //                 component="div"
    //                 children={props.bookName}
    //                 className={classes.bookTitle}
    //               />
    //             </Grid>

    //             <Grid item>
    //               <CustomTypo
    //                 variant="body1"
    //                 component="div"
    //                 children={props.authorName}
    //                 className={classes.bookAuthor}
    //               />
    //             </Grid>
    //           </Grid>

    //           <Grid item container columnGap={"47.3px"}>
    //             <Grid item>
    //               <IconWithText
    //                 Path={props.icon1}
    //                 text={props.time}
    //                 ColGap="5.67px"
    //               />
    //             </Grid>
    //             <Grid item>
    //               <IconWithText
    //                 Path={props.icon2}
    //                 text={props.nReads}
    //                 ColGap="7.33px"
    //               />
    //             </Grid>
    //           </Grid>
    //         </Grid>
    //       </CardContent>

    // <Grid container className={props.className}>
    //   <CardMedia
    //     component="img"
    //     alt="Card-image"
    //     image={props.imgsrc}
    //     sx={{ height: "292px" }}
    //   />

    //   <Grid container rowGap={"17px"} direction="column" mt={"23px"}>
    //     <Grid item container rowGap={"16px"}>
    //       <Grid item>
    //         <CustomTypo
    //           variant="subtitle1"
    //           component="div"
    //           children={props.bookName}
    //           className={classes.bookTitle}
    //         />
    //       </Grid>

    //       <Grid item>
    //         <CustomTypo
    //           variant="body1"
    //           component="div"
    //           children={props.authorName}
    //           className={classes.bookAuthor}
    //         />
    //       </Grid>
    //     </Grid>

    //     <Grid item container columnGap={"47.3px"}>
    //       <Grid item>
    //         <IconWithText
    //           Path={props.icon1}
    //           text={props.time}
    //           ColGap="5.67px"
    //         />
    //       </Grid>
    //       <Grid item>
    //         <IconWithText
    //           Path={props.icon2}
    //           text={props.nReads}
    //           ColGap="7.33px"
    //         />
    //       </Grid>
    //     </Grid>
    //   </Grid>

    //   {/* <CardActions>
    //     <Buttons variant='text' className={classes.buttonstyle}>
    //     <CustomTypo  variant='body1' component='div' children='Finished'/>
    //     </Buttons>

    //     </CardActions> */}
    // </Grid>
  );
};

export default index;

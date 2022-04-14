import React from "react";
import RFCard from "../../molecules/Cards/RFCard";
import { CardsProps } from "../../molecules/Cards/RFCard";
import { Grid } from "@mui/material";
import { customStyles } from "../../../theme";

// const classes = customStyles();

interface cardObjProps {
  details: {
    imgsrc: string;
    bookName: string;
    authorName: string;
    time: string;
    nReads: string;
    icon1: string;
    icon2: string;
    finished: boolean;
  }[];
}

// const getCard = (cardObj: CardsProps) => {
//   return (
//     <Grid item xs={12} sm={4}>
//       <RFCard {...cardObj} />
//     </Grid>
//   );
// };

const Index = (props: cardObjProps) => {
  return (
    <Grid container rowSpacing={3} sx={{ justifyContent: "space-between" }}>
      {props.details.map((cardObj) => {
        return (
          <Grid item>
            <RFCard {...cardObj} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Index;

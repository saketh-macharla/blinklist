import React, { useEffect, useState } from "react";
import RFCard from "../../molecules/Cards/RFCard";
import AddLibCard from "../../molecules/Cards/AddLibCard";
import { CardsProps } from "../../molecules/Cards/RFCard";
import { Grid } from "@mui/material";
import { customStyles } from "../../../theme";
import axios from "axios";

// const classes = customStyles();

interface cardObjProps {
  handleClick: ((id: number, finish: boolean) => void) | ((id: number) => void);
  addtoLib: boolean;
  details: {
    id: number;
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

// interface cardGridProps {
//   name: "finished" | "currentlyReading";
// }

// const Index = ({ name }: cardGridProps) => {
//   const [books, setBooks] = useState([]);
//   useEffect(() => {
//     axios.get("http://localhost:3001/booklist").then((res) => {
//       console.log(res.data);
//       setBooks(res.data);
//     });
//   }, [name]);

//   const handleClick = async (item: string, finish: boolean) => {
//     await axios
//       .patch(`http://localhost:3001/booklist?bookName=${item}`, {
//         finished: !finish,
//       })
//       .then((res) => {
//         setBooks(res.data);
//       });

//     const requiredBooks =
//       name === "finished"
//         ? books.filter((book: any) => {

//             return book.finished === true;
//           })
//         : books.filter((book: any) => {
//           console.log(book.finished);
//             return book.finished === false;
//           });
//     // console.log(requiredBooks);
//     setBooks(requiredBooks);
//   };
const Index = (props: cardObjProps) => {
  return (
    <Grid container spacing={"29px"}>
      {props.details.map((cardObj, index) => {
        return (
          <Grid item key={index}>
            {props.addtoLib ? (
              <AddLibCard handleClick={props.handleClick} {...cardObj} />
            ) : (
              <RFCard handleClick={props.handleClick} {...cardObj} />
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Index;

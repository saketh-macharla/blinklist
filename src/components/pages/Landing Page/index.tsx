import React from "react";
import { Grid } from "@mui/material";
import Header from "../../organisms/Header";
import Footer from "../../molecules/Footer";
import Template from "../../templates/Template1";
import CardGrid from "../../organisms/CardsGrid/index";
import { BookList } from "../../constants";
import CustomTypo from "../../atoms/CustomTypo";
import { customStyles } from "../../../theme";

const index = () => {
  const classes = customStyles();
  return (
    <Template
      Header={<Header />}
      Content={
        <>
          <CustomTypo
            variant="heading"
            component="div"
            children="My Library"
            className={classes.myLibrary}
          />
          <CardGrid details={BookList} />
        </>
      }
      Footer={<Footer />}
    />
  );
};

export default index;

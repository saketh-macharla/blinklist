import React from "react";
import { Grid } from "@mui/material";
import Header from "../../organisms/Header";
import Footer from "../../molecules/Footer";
import Template from "../../templates/Template1";
import CardGrid from "../../organisms/CardsGrid/index";
import { BookList } from "../../constants";
import CustomTypo from "../../atoms/CustomTypo";
import { customStyles } from "../../../theme";
import BookInfo from "../../organisms/BookInfo/Index";
import beyondEntrepreneur from "../../../assets/BookCovers/beyondentrepreneurship.png";

const index = () => {
  const classes = customStyles();
  return (
    <Template
      Header={<Header />}
      Content={
        <>
          <BookInfo
            children="Beyond Entrepreneur 2.0"
            imgPath={beyondEntrepreneur}
          />
        </>
      }
      Footer={<Footer />}
    />
  );
};

export default index;

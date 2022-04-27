import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Header from "../../organisms/Header";
import Footer from "../../molecules/Footer";
import Template from "../../templates/Template1";
import CardGrid from "../../organisms/CardsGrid/index";
import { BookList } from "../../constants";
import { customStyles } from "../../../theme";
import BookInfo from "../../organisms/BookInfo/Index";
import beyondEntrepreneur from "../../../assets/BookCovers/beyondentrepreneurship.png";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CustomTypo from "../../atoms/CustomTypo";
import { useParams } from "react-router-dom";
import axios from "axios";

const Index = () => {
  const classes = customStyles();

  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const { id } = useParams();
  console.log(`params ${id}`);
  // var books: any = [];
  const [books, setBooks] = useState([] as any);

  useEffect(() => {
    axios.get(`http://localhost:3001/booklist/${id}`).then((res) => {
      setBooks(res.data);
      console.log(res.data);
      console.log(books);
    });
  }, []);

  return (
    <Template
      Header={<Header />}
      Content={
        <>
          <BookInfo
            bookName={books.bookName}
            imgPath={books.imgsrc}
            authorName={books.authorName}
            finish={books.finished}
            id={books.id}
          />
          <Box mt={"60px"}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange}>
                  <Tab
                    label="Synopsis"
                    value="1"
                    sx={{
                      width: "304px",
                      alignItems: "flex-start",
                      textTransform: "none",
                      color: "#6D787E",
                      "&.Mui-selected": {
                        color: "#03314B",
                      },
                    }}
                  />
                  <Tab
                    label="Who is it for?"
                    value="2"
                    sx={{
                      width: "304px",
                      alignItems: "flex-start",
                      textTransform: "none",
                      color: "#6D787E",
                      "&.Mui-selected": {
                        color: "#03314B",
                      },
                    }}
                  />
                  <Tab
                    label="About the author"
                    value="3"
                    sx={{
                      width: "304px",
                      alignItems: "flex-start",
                      textTransform: "none",
                      color: "#6D787E",
                      "&.Mui-selected": {
                        color: "#03314B",
                      },
                    }}
                  />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ mt: "25px", p: "0" }}>
                <CustomTypo
                  variant="body2"
                  component="div"
                  children="Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world."
                  className={classes.bookInfo}
                />
              </TabPanel>
              <TabPanel value="2" sx={{ mt: "25px", p: "0" }}></TabPanel>
              <TabPanel value="3" sx={{ mt: "25px", p: "0" }}></TabPanel>
            </TabContext>
          </Box>
        </>
      }
      Footer={<Footer />}
    />
  );
};

export default Index;

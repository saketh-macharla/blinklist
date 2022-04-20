import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Header from "../../organisms/Header";
import Footer from "../../molecules/Footer";
import Template from "../../templates/Template1";
// import CardGrid from "../../organisms/CardsGrid/index";
import FunctionalGrid, { bookInfo } from "../../organisms/FunctionalGrid";
// import { BookList } from "../../constants";
import CustomTypo from "../../atoms/CustomTypo";
import { customStyles } from "../../../theme";

import axios from "axios";

// new imports for currRead and finishedRead
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const Index = () => {
  const classes = customStyles();
  // new
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const fetchRecords = () => {
    axios.get("http://localhost:3001/booklist").then((res) => {
      const newBooks = res.data;
      // console.log(newBooks);
      setBooks(newBooks);
      console.log(books);
    });
  };

  const [books, setBooks] = useState<bookInfo[]>([]);
  useEffect(() => {
    fetchRecords();
  }, []);

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

          <Box>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange}>
                  <Tab
                    label="Currently reading"
                    value="1"
                    sx={{ width: "304px", textTransform: "none" }}
                  />
                  <Tab
                    label="Finished"
                    value="2"
                    sx={{ width: "304px", textTransform: "none" }}
                  />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ mt: "25px", p: "0" }}>
                <FunctionalGrid
                  fetchRecords={fetchRecords}
                  name="currentlyReading"
                  books={books.filter((x) => !x.finished)}
                />
              </TabPanel>
              <TabPanel value="2" sx={{ mt: "25px", p: "0" }}>
                <FunctionalGrid
                  fetchRecords={fetchRecords}
                  name="finished"
                  books={books.filter((x) => x.finished)}
                />
              </TabPanel>
            </TabContext>
          </Box>
        </>
      }
      Footer={<Footer />}
    />
  );
};

export default Index;

import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import AvatarWithIcon from "../../molecules/AvatarWithIcon";
import BlinkList from "../../../assets/Image/BlinkList.svg";
// import SearchIcon from "@mui/icons-material/Search";
import CustomTypo from "../../atoms/CustomTypo";
import { customStyles } from "../../../theme";
import {
  CheckBoxOutlineBlankRounded,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import Buttons from "../../atoms/Buttons/Buttons";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as SearchIcon } from "../../../assets/Image/SearchIcon.svg";
import ExploreDrop from "../Explore/index";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [clicked, handler] = useState(false);
  const navigate = useNavigate();
  const classes = customStyles();
  const [logClick, handleLogin] = useState(true);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      // sx={{ width: "1440px" }}
      role="Header"
    >
      <Grid
        item
        container
        direction="row"
        columnGap={"36px"}
        wrap="nowrap"
        sx={{
          display: "flex",
          alignItems: "center",
          background: "#FFFFFF",
          width: "925px",
        }}
      >
        <Grid
          item
          container
          direction="row"
          columnGap={"40px"}
          wrap="nowrap"
          sx={{ width: "auto", display: "flex", alignItems: "center" }}
        >
          <Grid item sx={{ height: "24px", width: "100px" }}>
            <img src={BlinkList} />
          </Grid>

          <Grid item sx={{ display: "flex", alignItems: "center" }}>
            {/* <SearchIcon sx={{ width: "20.31px", height: "20.31px" }} /> */}
            <SvgIcon
              component={SearchIcon}
              sx={{ width: "20.31px", height: "20.31px" }}
            />
          </Grid>

          <Grid item>
            <Buttons
              variant="text"
              endIcon={clicked ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              onClick={() => handler(!clicked)}
              sx={{
                width: "79px",
                height: "20px",
                textTransform: "none",
                color: "#03314B",
                fontSize: "16px",
              }}
            >
              Explore
            </Buttons>
          </Grid>
        </Grid>

        <Grid
          item
          sx={{
            width: "78px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Buttons
            variant="text"
            onClick={() => navigate("/")}
            sx={{ textTransform: "none" }}
            role="Lib-button"
          >
            <CustomTypo
              variant="body2"
              component="div"
              children="My Library"
              className={classes.bookInfo}
            />
          </Buttons>
        </Grid>

        <Grid item>
          <AvatarWithIcon
            logClick={logClick}
            handleLogin={() => handleLogin(!logClick)}
          />
        </Grid>
      </Grid>

      <Grid
        item
        sx={{ width: "1440px" }}
        className={clicked ? classes.visible : classes.hidden}
        data-testid="Explore-Popup"
      >
        <ExploreDrop handleChange={() => navigate("/explorePage")} />
      </Grid>
    </Grid>

    // <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
    //   <BlinkList />
    //   <SvgIcon
    //     component={SearchIcon}
    //     sx={{ width: "20.31px", height: "20.31px" }}
    //   />
    //   <Buttons
    //     variant="text"
    //     endIcon={<KeyboardArrowDownIcon />}
    //     sx={{
    //       width: "79px",
    //       height: "20px",
    //       textTransform: "none",
    //       color: "#03314B",
    //       fontSize: "16px",
    //     }}
    //   >
    //     Explore
    //   </Buttons>

    //   <CustomTypo
    //     variant="body2"
    //     component="div"
    //     children="My Library"
    //     className={classes.bookInfo}
    //   />
    //   <AvatarWithIcon />
    // </Box>
  );
};

export default Index;

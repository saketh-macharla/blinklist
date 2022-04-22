import React from "react";
import { Grid, Divider } from "@mui/material";
import CustomTypo from "../../atoms/CustomTypo";
import { customStyles } from "../../../theme";

import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import FiberSmartRecordOutlinedIcon from "@mui/icons-material/FiberSmartRecordOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import ModeStandbyOutlinedIcon from "@mui/icons-material/ModeStandbyOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import Buttons from "../../atoms/Buttons/Buttons";

const itemList = [
  {
    name: "Entrepreneurship",
    icon: <RocketLaunchOutlinedIcon />,
  },
  {
    name: "Politics",
    icon: <AccountBalanceOutlinedIcon />,
  },
  {
    name: "Marketing & Sales",
    icon: <AutoGraphOutlinedIcon />,
  },
  {
    name: "Science",
    icon: <ScienceOutlinedIcon />,
  },
  {
    name: "Health & Nutrition",
    icon: <LocalHospitalOutlinedIcon />,
  },
  {
    name: "Personal Development",
    icon: <SignalCellularAltOutlinedIcon />,
  },
  {
    name: "Economics",
    icon: <FiberSmartRecordOutlinedIcon />,
  },
  {
    name: "History",
    icon: <PublicOutlinedIcon />,
  },
  {
    name: "Communication Skills",
    icon: <CommentOutlinedIcon />,
  },
  {
    name: "Corporate Culture",
    icon: <BusinessCenterOutlinedIcon />,
  },
  {
    name: "Motivation & Inspiration",
    icon: <TipsAndUpdatesOutlinedIcon />,
  },
  {
    name: "Money & Investments",
    icon: <AccountBalanceWalletOutlinedIcon />,
  },
  {
    name: "Psychology",
    icon: <PsychologyOutlinedIcon />,
  },
  {
    name: "Productivity",
    icon: <HourglassBottomOutlinedIcon />,
  },
  {
    name: "Sex & Relationship",
    icon: <FavoriteBorderOutlinedIcon />,
  },
  {
    name: "Nature & Environment",
    icon: <YardOutlinedIcon />,
  },
  {
    name: "Career & Success",
    icon: <ModeStandbyOutlinedIcon />,
  },
  {
    name: "Education",
    icon: <SchoolOutlinedIcon />,
  },
];

interface ExploreCardProps {
  handleChange: () => void;
}

const Index = (props: ExploreCardProps) => {
  const classes = customStyles();
  const ExploreItem = itemList.map((eItem) => {
    return (
      <Buttons
        key={eItem.name}
        startIcon={eItem.icon}
        className={classes.exploreHover}
        onClick={props.handleChange}
      >
        <CustomTypo variant="body2" component="div" children={eItem.name} />
      </Buttons>
    );
  });

  return (
    <Grid
      container
      sx={{ background: "#F1F6F4", justifyContent: "center", width: "1440px" }}
    >
      <Grid
        item
        container
        direction="column"
        sx={{
          alignItems: "flex-start",
          width: "942px",
          height: "398px",
          justifyContent: "center",
        }}
      >
        <Grid item container direction="row" columnGap={"130px"} mb={3}>
          <Grid item>
            <CustomTypo
              variant="body1"
              component="div"
              children="Explore by category"
              className={classes.exploreTop}
            />
          </Grid>

          <Grid item>
            <CustomTypo
              variant="body1"
              component="div"
              children="See recently added titles"
              className={classes.exploreTop}
            />
          </Grid>

          <Grid item>
            <CustomTypo
              variant="body1"
              component="div"
              children="See popular titles"
              className={classes.exploreTop}
            />
          </Grid>
        </Grid>

        <Grid item>
          <Divider
            sx={{ width: "940px", border: "1px solid #042330", mb: "30px" }}
          />
        </Grid>

        <Grid item container spacing={1} sx={{ width: "880px" }}>
          {ExploreItem.map((Item, index) => {
            return (
              <Grid item key={index} sm={4}>
                {Item}
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;

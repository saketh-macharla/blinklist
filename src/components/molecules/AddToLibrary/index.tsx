import React from "react";
import Buttons from "../../atoms/Buttons/Buttons";
import AddIcon from "@mui/icons-material/Add";
import { customStyles } from "../../../theme";
import CustomTypo from "../../atoms/CustomTypo";

interface AddLibProps {
  handleClick: any;
}

const index = (props: AddLibProps) => {
  const classes = customStyles();
  return (
    <>
      <Buttons
        variant="outlined"
        startIcon={<AddIcon />}
        className={classes.addToLib}
        onClick={() => props.handleClick()}
        data-testid="Addtolib"
      >
        <CustomTypo variant="body2" component="div" children="Add to library" />
      </Buttons>
    </>
  );
};

export default index;

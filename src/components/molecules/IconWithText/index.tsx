import React from "react";
import CustomTypo from "../../atoms/CustomTypo/index";
import { customStyles } from "../../../theme";
import { Grid } from "@mui/material";

type iprops = {
  className: string;
};
export interface IconTextProps {
  // Icons: React.FC<iprops>,
  text: string;
  ColGap: string;
  Path: string;
  className?: string;
}

const index = ({ text, ColGap, Path, className }: IconTextProps) => {
  const Classes = customStyles();
  return (
    // <div className={classes.time}>
    //   {/* {props.icon} */}
    //   {/* <div className={classes.iconText}/>{icon }<div/> */}

    //   <Icon className={classes.iconText}>{icon}</Icon>
    //   <CustomTypo variant='caption' component='div' children={text} className={classes.iconText}/>
    // </div>

    <Grid
      container
      columnGap={ColGap}
      sx={{ alignItems: "center" }}
      className={className}
      data-testid="IconWithText"
    >
      <Grid item>
        {/* <div className={classes.iconText}>{Icons}</div> */}
        {/* <Icons className={`${Classes.iconText} ${className}`}/>  */}
        <img src={Path} />
      </Grid>

      <Grid item mb={"5px"}>
        <CustomTypo
          variant="caption"
          component="div"
          children={text}
          className={Classes.iconText}
        />
      </Grid>
    </Grid>

    // <>
    // <span><Icons className={`${Classes.iconCard} ${Classes.iconText}`}/> </span>
    // <span><CustomTypo variant='caption' component='span' children={text} className={Classes.iconText}/></span>
    // </>
  );
};

export default index;

import React from "react";
import { Grid } from "@mui/material";

interface TemplateProps {
  Header: React.ReactNode;
  Content: React.ReactNode;
  Footer: React.ReactNode;
}

const Template1 = ({ Header, Footer, Content }: TemplateProps) => {
  return (
    // Original
    // <Grid container direction="column" sx={{ alignItems: "center" }}>
    //   <Grid item sx={{ width: "912px", mb: "59px" }}>
    //     {Header}
    //   </Grid>

    //   <Grid item container sx={{ width: "912px" }}>
    //     <Grid item>{Content}</Grid>
    //   </Grid>

    //   <Grid item sx={{ mt: "111px" }}>
    //     {Footer}
    //   </Grid>
    // </Grid>

    //Experiment
    // <Grid
    //   container
    //   direction="column"
    //   sx={{ alignItems: "center", textAlign: "left" }}
    // >
    //   <Grid item container mb={"60px"}>
    //     <Grid item xs={false} sm={3} />
    //     <Grid item xs={6}>
    //       {Header}
    //     </Grid>
    //     <Grid item xs={false} sm={3} />
    //   </Grid>

    //   <Grid item container>
    //     <Grid item xs={false} sm={3} />
    //     <Grid item xs={6}>
    //       {Content}
    //     </Grid>
    //     <Grid item xs={false} sm={3} />
    //   </Grid>

    //   <Grid item container mt={"111px"}>
    //     <Grid item xs={false} sm={2} />
    //     <Grid item xs={8}>
    //       {Footer}
    //     </Grid>
    //     <Grid item xs={false} sm={2} />
    //   </Grid>
    // </Grid>

    <Grid
      container
      direction="column"
      sx={{ alignItems: "center", textAlign: "left" }}
    >
      <Grid item mb={"60px"}>
        {Header}
      </Grid>

      <Grid item container>
        <Grid item xs={false} sm={3} />
        <Grid item container direction="column" xs={6}>
          {Content}
        </Grid>
        <Grid item xs={false} sm={3} />
      </Grid>

      <Grid item mt={"111px"}>
        {Footer}
      </Grid>
    </Grid>
  );
};

export default Template1;

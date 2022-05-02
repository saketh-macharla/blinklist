import Grid from "@mui/material/Grid";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginPage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <Grid
      container
      direction="column"
      sx={{
        width: "700px",
        height: "500px",
        margin: "200px auto",
        background: "#F1F6F4",
        borderRadius: "20px",
      }}
      alignItems="center"
      rowSpacing={2}
      data-testid="loginPage"
    >
      <Grid item sx={{ marginTop: "30px" }}>
        <img
          src="https://static-cdn.blinkist.com/images/brand2016/logo.png"
          alt="blink_logo"
        ></img>
      </Grid>
      <Grid item>
        <Typography variant="h2">Welcome!!</Typography>
      </Grid>
      <Grid item container direction="column" sx={{ width: "25%" }}>
        <Button variant="contained" onClick={() => loginWithRedirect()}>
          Login
        </Button>
      </Grid>
      <Grid item container direction="column" sx={{ width: "25%" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => loginWithRedirect({ screen_hint: "signup" })}
        >
          Signup
        </Button>
      </Grid>
    </Grid>
  );
}

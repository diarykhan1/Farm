import * as React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CopyrightOutlined } from "@material-ui/icons";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to="/" color="inherit">
        Farm2ME
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <CopyrightOutlined sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

// import React from "react";
// import {
//   Grid,
//   Paper,
//   Avatar,
//   Typography,
//   TextField,
//   Button,
// } from "@material-ui/core";
// import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// const Signup = () => {
//   const paperStyle = { padding: 20, width: 340, margin: "0 auto" };
//   const headerStyle = { margin: 0 };
//   const avatarStyle = { backgroundColor: "#1bbd7e" };
//   const marginTop = { marginTop: 5 };
//   return (
//     <Grid>
//       <Paper style={paperStyle}>
//         <Grid align="center">
//           <Avatar style={avatarStyle}>
//             <AddCircleOutlineOutlinedIcon />
//           </Avatar>
//           <h2 style={headerStyle}>Sign Up</h2>
//           <Typography variant="caption" gutterBottom>
//             Please fill this form to create an account !
//           </Typography>
//         </Grid>
//         <form>
//           <TextField fullWidth label="Name" placeholder="Enter your name" />
//           <TextField fullWidth label="Email" placeholder="Enter your email" />
//           <FormControl component="fieldset" style={marginTop}>
//             <FormLabel component="legend">Gender</FormLabel>
//             <RadioGroup
//               aria-label="gender"
//               name="gender"
//               style={{ display: "initial" }}
//             >
//               <FormControlLabel
//                 value="female"
//                 control={<Radio />}
//                 label="Female"
//               />
//               <FormControlLabel value="male" control={<Radio />} label="Male" />
//             </RadioGroup>
//           </FormControl>
//           <TextField
//             fullWidth
//             label="Phone Number"
//             placeholder="Enter your phone number"
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             placeholder="Enter your password"
//           />
//           <TextField
//             fullWidth
//             label="Confirm Password"
//             placeholder="Confirm your password"
//           />
//           <FormControlLabel
//             control={<Checkbox name="checkedA" />}
//             label="I accept the terms and conditions."
//           />
//           <Button type="submit" variant="contained" color="primary">
//             Sign up
//           </Button>
//         </form>
//       </Paper>
//     </Grid>
//   );
// };

// export default Signup;

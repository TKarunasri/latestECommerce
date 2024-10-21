import { Box, Button, Stack, Typography } from "@mui/material";
import { Component } from "react";
import { LoginMobileImage } from "../../assets/images/Image";
import TextFeild from "../../components/common/texfeild/TextFeild";
import { GlobalStyles } from "../../global-styles/GlobalStyles";
import { loginFields } from "../../utils/data";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    border: "1px solid green",
  },
  imgContainer: {
    width: "55%",
    height: "80%",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  form: {
    width: "70%",
    boxSizing: "border-box",
  },
  formConatiner: {
    width: "45%",
    display: "flex",
    alignItems: "center",
  },
};
export interface IuserData {
  name: string;
}
export default class Login extends Component {
  state = {
    name: "",
  };
  handleLogin = () => {
    localStorage.setItem("token", "ramireddy");
  };
  handleChange = (value: string) => {
    this.setState((prev) => ({ ...prev, name: value }));
  };
  render() {
    return (
      <Box sx={styles.container}>
        <Box sx={styles.imgContainer}>
          <Box
            component={"img"}
            src={LoginMobileImage}
            alt="no image"
            sx={styles.img}
          />
        </Box>
        <Stack sx={styles.formConatiner}>
          <Stack sx={styles.form}>
            <Typography sx={GlobalStyles.title}>Create an account</Typography>
            <Typography sx={GlobalStyles.subTitle}>
              Enter your details below
            </Typography>
            {loginFields.map((each) => (
              <TextFeild label={each} handleChange={this.handleChange} />
            ))}
            <Button sx={GlobalStyles.redButton}>Create Account</Button>
          </Stack>
        </Stack>
      </Box>
    );
  }
}

import { Box, Container, Divider } from "@mui/material";
import React from "react";
import HeaderOne from "../../components/common/header-one/HeaderOne";
import HeaderTwo from "../../components/common/header-two/HeaderTwo";

class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <Box>
        <HeaderOne />
        <Container maxWidth="md"></Container>
        <HeaderTwo />
        {/* <Divider orientation="horizontal" flexItem /> */}
      </Box>
    );
  }
}

export default Home;

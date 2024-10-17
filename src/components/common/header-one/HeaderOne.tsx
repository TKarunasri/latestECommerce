import React from "react";
import { Box, Typography } from "@mui/material";

class HeaderOne extends React.Component {
  render() {
    return (
      <Box sx={{ background: "#000" }}>
        <Typography>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Box component={"span"}>ShopNow</Box>
        </Typography>
        <Box>
          <Typography>English</Typography>
        </Box>
      </Box>
    );
  }
}

export default HeaderOne;

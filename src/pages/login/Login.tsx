import { Box, Button } from "@mui/material";
import { Component } from "react";

const styles = {
  container:{
    display:'flex',
    justifiContent:'center',
    alignItems:'center',
    
  }
}
export default class Login extends Component {
  handleLogin = () => {
    localStorage.setItem("token", "ramireddy");
  };
  render() {
    return (
      <Box>
        <Button onClick={this.handleLogin}>login</Button>
      </Box>
    );
  }
}

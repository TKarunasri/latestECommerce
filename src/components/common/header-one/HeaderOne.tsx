import React from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./HeaderOneStyles";

interface IProps {}
interface IState {
  anchorEl: null | HTMLElement;
}
class HeaderOne extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { anchorEl } = this.state;
    const open = Boolean(this.state.anchorEl);

    return (
      <Box sx={styles.mainBox}>
        <Typography sx={styles.saleText}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Box component={"span"} sx={styles.shopNowText}>
            ShopNow
          </Box>
        </Typography>
        <Box sx={styles.languageBox}>
          <Typography sx={styles.saleText}>English</Typography>
          <IconButton
            onClick={this.handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <KeyboardArrowDownIcon sx={styles.arrowIcon} />
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={this.handleClose}
          onClick={this.handleClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: styles.menu,
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={this.handleClose}>Telugu</MenuItem>
          <MenuItem onClick={this.handleClose}>Hindi</MenuItem>
        </Menu>
      </Box>
    );
  }
}

export default HeaderOne;

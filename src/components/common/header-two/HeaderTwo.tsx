import React from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./HeaderTwoStyles";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { GlobalStyles } from "../../../global-styles/GlobalStyles";

interface IProps {}

interface IState {
  mobileOpen: boolean;
}

const drawerWidth = 240;
const navItems = ["Home", "Contact", "About", "Sign Up"];
class HeaderTwo extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
  }
  handleDrawerToggle = () => {
    this.setState((prevState) => ({
      mobileOpen: !prevState.mobileOpen,
    }));
  };
  drawer = (
    <Box onClick={this.handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  render() {
    const { mobileOpen } = this.state;
    return (
      <Box sx={{ display: "flex", }}>
        <CssBaseline />
        <AppBar component="nav" sx={styles.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={this.handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                ...GlobalStyles.logoText,
              }}
            >
              Exclusive
            </Typography>
            <Box
              sx={{ display: { xs: "none", sm: "flex" }, gap: 8, flexGrow: 1 }}
            >
              {navItems.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    ...GlobalStyles.subTitle,
                    textDecoration: "underline",
                    textUnderlinePosition: "under",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0.7 ,mr:5}}>
              <TextField
                placeholder="What are you looking for?"
                sx={styles.textfield}
                type="text"
                name="search"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={this.handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {this.drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{}}>
          <Toolbar />
        </Box>
      </Box>
    );
  }
}

export default HeaderTwo;

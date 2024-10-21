import { font } from "../../../utils/fonts";
import { colors } from "../../../utils/colors";

const styles = {
  mainBox: {
    background: colors.black,
    color: colors.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    py: 1,
    pl:50
  },
  saleText: {
    color: "#FAFAFA",
    fontFamily: font.poppins,
    fontWeight: 400,
    textAlign: "center",
    fontSize: "13px",
  },
  shopNowText: { fontWeight: 600, textDecoration: "underline", ml: 0.6 },
  languageBox: { display: "flex", alignItems: "center" },
  arrowIcon: {
    color: colors.white,
  },
  menu: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};
export default styles;

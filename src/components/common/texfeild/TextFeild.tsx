import { TextField } from "@mui/material";
import { ChangeEvent, Component } from "react";
import { GlobalStyles } from "../../../global-styles/GlobalStyles";
const styles = {
  input: {
    marginTop: "20px",
    width: "100%",
    "& .MuiInputLabel-root": {
      ...GlobalStyles.labelStyles,
    },
    "& .MuiInputLabel-root.Mui-focused": {
      ...GlobalStyles.labelStyles,
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "gray",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "gray",
    },
  },
};
export interface ItextField {
  label: string;
  handleChange: (value: string) => void;
}
export default class TextFeild extends Component<ItextField, {}> {
  handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    this.props.handleChange(value);
  };
  render() {
    const { label, handleChange } = this.props;
    return (
      <TextField
        id="standard-basic"
        label={label}
        variant="standard"
        sx={styles.input}
        onChange={(event) => this.handleInputChange(event)}
      />
    );
  }
}

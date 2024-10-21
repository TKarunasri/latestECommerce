const styles = {
  appBar: {
    mt: 6,
    background: "#fff",
    color: "#18181B",
    boxShadow:
      "0px 0px 0px -1px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)",
    pl: { xs: 2, sm: 5, md: 2, lg: 15 },
    pr: { xs: 2, sm: 5, md: 2, lg: 15 },
    pt:3,
    border:'1px solid'
  },
  textfield: {
    width: "100%",
    background: "#f5f5f5",
    input: {
      "&::placeholder": {
        color: "#000",
        fontFamily: '"Inter", sans-serif',
        fontSize: "12px",
      },
    },
    "& .MuiInputBase-input": {
      height: "13px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "1px solid #f5f5f5",
        borderRadius: 2,
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #f5f5f5",
      },
      "&:hover fieldset": {
        borderColor: "#f5f5f5",
      },
    },
  },
};

export default styles;

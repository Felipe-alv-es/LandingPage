export const getContainerStyle = () => ({
  display: "flex",
  justifyContent: "center",
  background: "black",
  height: "64px",
  width: "100%",
  position: "fixed",
  boxShadow: "1px 1px 1px  #555555",
  zIndex: 2,
  "> div": {
    height: "64px",
    display: "flex",
    position: "fixed",
    width: "70%",
    justifyContent: "space-between",
    "@media(max-width: 1440px)": {
      width: "80%",
    },
  },
});

export const getMenuStyle = () => ({
  display: "flex",
  alignItems: "center",
  "> ul": {
    listStyle: "none",
    display: "flex",
    "> div": {
      display: "flex",
      alignItems: "center",
      marginRight: "20px",
      "> li": {
        fontSize: "16px",
        fontFamily: "kanit",
        marginRight: "4px",
        fontWeight: "300",
        color: "#FFFFF7",
      },
      "> svg": {
        color: "#FFFFF7",
      },
    },
  },
});

export const getSecondMenuStyle = () => ({
  display: "flex",
  alignItems: "center",
  height: "100%",
  "> ul": {
    listStyle: "none",
    display: "flex",
    "> li": {
      fontSize: "16px",
      fontFamily: "kanit",
      marginRight: "20px",
      fontWeight: "300",
      color: "#FFFFF7",
    },
  },
});

export const getButtonStyle = () => ({
  margin: "8px 4px 8px 4px",
  textTransform: "none",
});

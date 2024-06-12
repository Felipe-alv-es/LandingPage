export const getContainerStyle = () => ({
  background: "#f0f0f0",
  justifyContent: "center",
  display: "flex",
  "> div": {
    width: "70%",
    padding: "64px 0px 64px 0px",
    display: "flex",
    justifyContent: "space-between",
  },
  "@media(max-width: 1440px)": {
    "> div": {
      width: "80%",
    },
  },
  "@media(max-width: 428px)": {
    "> div": {
      display: "block",
    },
  },
});

export const getPaperStyle = () => ({
  padding: "32px",
  display: "grid",
  justifyContent: "center",
  textAlign: "center",
  width: "32%",
  borderRadius: "8px",
  "> hr": {
    margin: "8px",
  },
  "p:nth-of-type(5), > p:nth-of-type(6), p:nth-of-type(7), p:nth-of-type(8), p:nth-of-type(9)":
    {
      fontSize: "14px",
    },
  "@media(max-width: 428px)": {
    width: "100%",
    marginBottom: "16px",
  },
});

export const getPlanNameStyle = () => ({
  typography: "overline",
  fontSize: "14px",
  fontWeight: "500",
  background: "#146ef5",
  padding: "8px",
  borderRadius: "8px",
  color: "white",
  marginBottom: "16px",
});

export const getPlanDescripStyle = () => ({
  fontSize: "16px",
  marginBottom: "20px",
});

export const getPlanPriceStyle = () => ({
  whiteSpace: "pre-wrap",
  marginBottom: "4px",
  typography: "h5",
  fontFamily: "kanit",
  fontWeight: "500",
  color: "#383838",
});

export const getButtonStyle = () => ({
  margin: "32px 4px 8px 4px",
  textTransform: "none",
  background: "#146ef5",
});

export const getPageCategoryStyle = () => ({
  typography: "overline",
  fontSize: "14px",
  fontWeight: "800",
  color: "#146ef5",
});

export const getPageTitleStyle = () => ({
  whiteSpace: "pre-wrap",
  marginBottom: "16px",
  typography: "h3",
  fontFamily: "kanit",
  fontWeight: "500",
  color: "#383838",
  "@media(max-width: 428px)": {
    typography: "h4",
    fontFamily: "kanit",
    fontWeight: "500",
    textAlign: "center",
  },
});

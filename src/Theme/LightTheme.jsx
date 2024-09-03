import { createTheme } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";
const LightTheme=createTheme({
  palette:{
    mode:"light",
    primary:{
      main:"#FF8A8A"
    },
    secondary:{
      main:"#F4DEB3"
    },
    background:{
      main:"#FF8A8A",
      default:"#F0EAAC",
      paper:"#F0EAAC"
    },
    textColor:{
      main:"#CCE0AC"
    }
  }
})

export default LightTheme;
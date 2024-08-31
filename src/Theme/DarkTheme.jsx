import { createTheme } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
const DarkTheme=createTheme({
  palette:{
    mode:"dark",
    primary:{
      main:"#e91e61"
    },
    secondary:{
      main:"#5A20CB"
    },
    background:{
      main:"#000000",
      default:"#0D0D0D",
      paper:"#0D0D0D"
    },
    textColor:{
      main:"#111111"
    }
  }
})

export default DarkTheme;
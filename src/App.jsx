import { useState } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { dark } from '@mui/material/styles/createPalette'
import DarkTheme from './Theme/DarkTheme'

//import Pages
import Header from './modules/Layout/Header'
import Footer from './modules/Layout/Footer'
import Body from './modules/Layout/Body'

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline/>
      <Header/>
      <Body/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App

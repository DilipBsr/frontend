import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home/Home'
import Payment from './component/Payment'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { dark } from '@mui/material/styles/createPalette'
import DarkTheme from './Theme/DarkTheme'
import LightTheme from './Theme/LightTheme'
function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline/>
      <Navbar/>
      <Home/>
    </ThemeProvider>
  )
}

export default App

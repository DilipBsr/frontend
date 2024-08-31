import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { dark } from '@mui/material/styles/createPalette'
import DarkTheme from './Theme/DarkTheme'
function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline/>
      <Navbar/>
      {/* <h1 className='text-orange-400'>FrontEnd</h1> */}
    </ThemeProvider>
  )
}

export default App

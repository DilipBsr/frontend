import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Card from './component/Card'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { dark } from '@mui/material/styles/createPalette'
import DarkTheme from './Theme/DarkTheme'
import LightTheme from './Theme/LightTheme'
function App() {

  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline/>
      <Navbar/>
      <center className='flex flex-wrap justify-center '>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </center>
    </ThemeProvider>
  )
}

export default App

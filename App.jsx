import { useState } from 'react'
import ThemeContext from './ThemeContent'
import Navbar from './Navbar'
import Content from './Content'


function App() {
  const [theme, setTheme] = useState("light")

  function toggleTheme(){
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <>
    <ThemeContext.Provider value={{theme,toggleTheme}}>

      <Navbar/>
      <Content/>
      
      </ThemeContext.Provider>
      
    </>
  )
}

export default App

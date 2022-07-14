import React from 'react';
import './styles.css';
import Main from './Main';
import Nav from './Nav';

function App() {
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className='container'>
      <Nav
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Main darkMode={darkMode} />
    </div>
  )
}

export default App;

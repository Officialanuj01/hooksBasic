import { useState } from 'react'
import './App.css'
import { createContext } from 'react'
import { useContext } from 'react'
import Context from './componnent/Context'


export const Peragraph = createContext()
function App() {
  const Pera = "You are seeing this because of the useContext hook.";
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      <div className={isDarkMode ? 'Toggle dark' : 'Toggle'}>
        <button onClick={toggleDarkMode}>Toggle</button>
      </div>
      <div className={isDarkMode ? 'main dark' : 'main'}>
        <Peragraph.Provider value={Pera}>
          <Context />
        </Peragraph.Provider>
      </div>
    </>
  );
}

export default App

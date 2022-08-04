import React, {useState} from "react";

const ThemeContext = React.createContext()

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const value = {
        theme,
        toggleTheme
    }
    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}
import React, { useState } from 'react';
import { ThemeContext } from './theme-context';

type ThemeProviderProps = {
    children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

import { createContext } from 'react';

interface Props {
    isDarkTheme: boolean;
    toggleTheme?: () => void;
}

export const ThemeContext = createContext<Props>({
    isDarkTheme: true,
    toggleTheme: () => {},
});

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import * as Styled from './style/style';
import GlobalStyles from './style/global';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { ThemeContext } from './components/contexts/theme-context/theme-context';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const Container = () => {
    // const isLogin = Boolean(localStorage.getItem('token'));
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <ThemeContext.Provider
            value={{
                isDarkTheme,
                toggleTheme,
            }}
        >
            <BrowserRouter>
                <Styled.Wrapper>
                    <Styled.Container>
                        <AppRoutes isLogin={true} /> // заглушка для входа
                    </Styled.Container>
                    <GlobalStyles />
                </Styled.Wrapper>
            </BrowserRouter>
        </ThemeContext.Provider>
    );
};

root.render(<Container />);

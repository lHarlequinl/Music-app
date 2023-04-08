import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Styled from './style/style';
import GlobalStyles from './style/global';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import  ThemeProvider  from './components/contexts/theme-context/theme-provider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const Container = () => {
    // const isLogin = Boolean(localStorage.getItem('token'));

    return (
        <ThemeProvider>
            <BrowserRouter>
                <Styled.Wrapper>
                    <Styled.Container>
                        <AppRoutes isLogin={true} /> {/*// заглушка для входа*/}
                    </Styled.Container>
                    <GlobalStyles />
                </Styled.Wrapper>
            </BrowserRouter>
        </ThemeProvider>
    );
};

root.render(<Container />);

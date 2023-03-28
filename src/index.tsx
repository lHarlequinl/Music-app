import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Styled from './style/style';
import GlobalStyles from './style/global';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const Container = () => {
    // const isLogin = Boolean(localStorage.getItem('token'));

    return (
        <BrowserRouter>
            <Styled.Wrapper>
                <Styled.Container>
                    <AppRoutes isLogin={true} /> // заглушка для входа
                </Styled.Container>
                <GlobalStyles />
            </Styled.Wrapper>
        </BrowserRouter>
    );
};

root.render(<Container />);

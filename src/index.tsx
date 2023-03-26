import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Styled from './style/style';
import GlobalStyles from './style/global';
import Main from './components/main/main';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const Container = () => {
    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Main />
            </Styled.Container>
            <GlobalStyles/>
        </Styled.Wrapper>
    );
}

root.render(<Container />);

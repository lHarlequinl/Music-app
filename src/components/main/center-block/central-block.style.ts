import styled from 'styled-components';

const COLORS = {
    'title-dark': '#FFFFFF',
    'title-light': '#000000',
    'dark-background': '#181818',
    'light-background': '#FFFFFF',
};

export const CenterBlock = styled.div<{ isDarkTheme: boolean }>`
    width: auto;
    flex-grow: 3;
    padding: 20px 40px 20px 111px;
    background-color: ${(props) =>
        props.isDarkTheme
            ? COLORS['dark-background']
            : COLORS['light-background']};
    padding: 20px 0 20px 36px;
`;

export const CenterBlockTitle = styled.h2<{ isDarkTheme: boolean }>`
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
    color: ${(props) =>
        props.isDarkTheme ? COLORS['title-dark'] : COLORS['title-light']};
`;

export const CenterBlockContent = styled.div`
    display: flex;
    flex-direction: column;
`;

import styled from 'styled-components';

export const Nav = styled.nav<{ isDarkTheme: boolean }>`
    width: 244px;
    background-color: ${(props) =>
        props.isDarkTheme
            ? '#1C1C1C'
            : '#F6F5F3'};
    padding: 20px 0 20px 36px;
`;

export const NavBurger = styled.div`
    cursor: pointer;
    width: 20px;
    height: 36px;
    padding: 13px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

import styled from 'styled-components';

export const Menu = styled.div<{ active: boolean }>`
    display: block;
    visibility: visible;
    transform: ${(props) =>
        props.active ? 'translateX(0)' : 'translate(-200%)'};
    transition: transform 0.5s;
`;

export const MenuItem = styled.li<{ isDarkTheme: boolean }>`
    color: ${(props) =>
        props.isDarkTheme
            ? '#FFFFFF'
            : '#000000'};

    padding: 5px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    
    :hover {
        color: ${'#D9B6FF'};
    }
`;

export const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding: 18px 0 10px 0;
`;

export const ThemeToggleButtonWrapper = styled.div<{ isDarkTheme: boolean }>`
    --color: ${(props) => (props.isDarkTheme ? '#FFFFFF' : '#000000')};

    cursor: pointer;
    color: var(--color);
    width: 39px;
`;

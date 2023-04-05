import styled from 'styled-components';

const COLORS = {
    'search-border-dark': '#4e4e4e',
    'search-border-light': '#D9D9D9',
    'search-dark': '#FFFFFF',
    'search-light': '#000000',
};

export const SearchBlock = styled.div<{ isDarkTheme: boolean }>`
    width: 100%;
    border-bottom: 1px solid
        ${(props) =>
            props.isDarkTheme
                ? COLORS['search-border-dark']
                : COLORS['search-border-light']};
    margin-bottom: 51px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SearchSVGWrapper = styled.div`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    fill: transparent;
`;

export const SearchInput = styled.input<{ isDarkTheme: boolean }>`
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) =>
        props.isDarkTheme
            ? COLORS['search-dark']
            : COLORS['search-light']};
    outline: none;

    &::placeholder {
        background-color: transparent;
        color: ${(props) =>
            props.isDarkTheme
                ? COLORS['search-dark']
                : COLORS['search-light']};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`;

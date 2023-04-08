import styled from 'styled-components';

export const FilterItemsLink = styled.a<{ isDarkTheme: boolean }>`
    color: ${(props) => (props.isDarkTheme ? '#FFFFFF' : '#000000')};

    max-width: 150px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;

    text-decoration: none;

    &:hover {
        color: #b672ff;
        text-decoration: underline #b672ff;
    }
`;

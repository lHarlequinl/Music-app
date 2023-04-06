import styled from 'styled-components';

export const FilterButton = styled.div<{
    isActive: boolean;
    isDarkTheme: boolean;
}>`
    color: ${(props) => (props.isActive ? '#B672FF' : '')};

    position: relative;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: ${(props) =>
        (props.isActive ? '1px solid #9A48F1' : '1px solid #FFFFFF') &&
        (props.isDarkTheme ? '1px solid #FFFFFF' : '1px solid #000000')};
    border-radius: 60px;
    padding: 6px 20px;

    :hover {
        border-color: ${(props) => (props.isDarkTheme ? '#d9b6ff' : '#580EA2')};
        color: ${(props) => (props.isDarkTheme ? '#d9b6ff' : '#580EA2')};
        cursor: pointer;
    }
    
    :active {
        border-color: ${(props) => (props.isDarkTheme ? '#ad61ff' : '#AD61FF')};
        color: ${(props) => (props.isDarkTheme ? '#ad61ff' : '#AD61FF')};
        cursor: pointer;
    }
`;

export const FilterButtonCount = styled.div<{ isActive: boolean }>`
    position: absolute;
    top: -10px;
    right: -10px;
    display: ${(props) => (props.isActive ? 'block' : 'none')};
    width: 26px;
    height: 25.5px;
    text-align: center;
    color: #ffffff;
    background: #ad61ff;
    border-radius: 50%;
`;

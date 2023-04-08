import styled from 'styled-components';

export const BarPlayerContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BarPlayerBlock = styled.div<{ isDarkTheme: boolean }>`
    height: 73px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${(props) => (props.isDarkTheme ? '#181818' : '#FFFFFF')};
`;

export const BarPlayerProgress = styled.input<{
    gradientValue: string;
    isDarkTheme: boolean;
}>`
    width: 100%;
    height: 6px;
    -webkit-appearance: none;
    background: linear-gradient(
        90deg,
        #57459d
            ${(props) => props.gradientValue !== '' ? props.gradientValue : '0'}%,
            ${(props) => (props.isDarkTheme ? 'rgba(46,46,46,1)' : '#D9D9D9')}
            ${(props) => props.gradientValue !== '' ? props.gradientValue : '0'}%
    );
    transition: 1s;
    cursor: pointer;

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        border: 0;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        cursor: pointer;
    }
`;

export const BarPlayer = styled.div`
    width: 560px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

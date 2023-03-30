import styled from 'styled-components';

export const BarPlayerContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BarPlayerBlock = styled.div`
    height: 73px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const BarPlayerProgress = styled.input<{ gradientValue: string }>`
    width: 100%;
    height: 6px;
    -webkit-appearance: none;
    background: linear-gradient(
        90deg,
        #57459d
            ${(props) =>
                props.gradientValue !== '' ? props.gradientValue : '0'}%,
        rgba(46, 46, 46, 1)
            ${(props) =>
                props.gradientValue !== '' ? props.gradientValue : '0'}%
    );
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

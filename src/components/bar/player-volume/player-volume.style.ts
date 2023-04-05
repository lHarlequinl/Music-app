import styled from 'styled-components';

export const PlayerVolumeBlock = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    padding: 0 92px 0 0;
`;

export const PlayerVolumeContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
`;

export const PlayerVolumeImageWrapper = styled.div`
    width: 19px;
    height: 18px;
    margin-right: 17px;
`;

export const PlayerVolumeSVGWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    fill: transparent;
`;

export const PlayerVolumeProgressWrapper = styled.div`
    width: 109px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const PlayerVolumeProgressLine = styled.input<{ isDarkTheme: boolean }>`
    -webkit-appearance: none;
    background: transparent;
    cursor: pointer;
    ::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }
    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: ${(props) => (props.isDarkTheme ? '#1a1a1a' : '#FFFFFF')};
        border: ${(props) =>
            props.isDarkTheme ? '2px solid #ffffff' : '2px solid #B1B1B1'};
        width: 13px;
        height: 13px;
        border-radius: 50%;
        cursor: pointer;
        margin-top: -6px;
    }
    ::-webkit-slider-runnable-track {
        width: 100%;
        height: 0;
        border: ${(props) =>
            props.isDarkTheme ? '2px solid #797979' : '2px solid #AD61FF'};
        background: #ffffff;
        border-radius: 2px;
    }
`;

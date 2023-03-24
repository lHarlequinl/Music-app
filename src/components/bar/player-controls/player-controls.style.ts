import styled from 'styled-components';

export const PlayerControls = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 27px 0 31px;
`;

export const PlayerButton = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
`;

export const PrevIconWrapper = styled.div`
    width: 15px;
    height: 14px;
    margin-right: 23px;
    cursor: pointer;
`;

export const PlayIconWrapper = styled.div`
    width: 22px;
    height: 20px;
    margin-right: 23px;
    fill: #d9d9d9;
    cursor: pointer;

    :hover {
        stroke: #cccccc;
    }
`;

export const NextIconWrapper = styled.div`
    width: 15px;
    height: 14px;
    stroke: #d9d9d9;
    margin-right: 28px;
    fill: #a53939;
    cursor: pointer;

    :hover {
        stroke: #cccccc;
    }
`;

export const RepeatIconWrapper = styled.div`
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
    margin-right: 24px;
    cursor: pointer;

    :hover {
        stroke: #cccccc;
    }

    :active {
        stroke: #FFFFFF;
    }
`;

export const ShuffleIconWrapper = styled.div`
    width: 19px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
    margin-right: 24px;
    cursor: pointer;

    :hover {
        stroke: #cccccc;
    }

    :active {
        stroke: #FFFFFF;
    }
`;

import styled from 'styled-components';

const COLORS = {
    'dark-link': '#FFFFFF',
    'light-link': '#000000',
};

export const TrackTitle = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 447px;
    overflow: hidden;
`;

export const TrackImageWrapper = styled.div`
    position: relative;
    width: 51px;
    margin-right: 17px;
    overflow: hidden;
`;

export const TrackTitleImage = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    background: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 17px;
`;

export const TrackSVGWrapper = styled.div`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
`;

export const TrackTitleText = styled.div`
    position: relative;
    width: 371px;
    overflow: hidden;
`;

export const TrackTitleLink = styled.a<{ isDarkTheme: boolean }>`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) =>
        props.isDarkTheme ? COLORS['dark-link'] : COLORS['light-link']};
`;

export const TrackTitleSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4e4e4e;
`;

import styled from 'styled-components';

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

export const TrackTitleImage = styled.div<{ isDarkTheme: boolean }>`
    --bg-color: ${props => props.isDarkTheme ? '#313131' : '#F6F4F4'};

    width: 51px;
    height: 51px;
    padding: 16px;
    background: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 17px;
    background-color: var(--bg-color);
`;

export const TrackSVGWrapper = styled.div<{ isDarkTheme: boolean }>`
    --color: ${(props) => (props.isDarkTheme ? '#4E4E4E' : '#B1B1B1')};

    width: 18px;
    height: 17px;
    color: var(--color);
`;

export const TrackTitleText = styled.div`
    position: relative;
    width: 371px;
    overflow: hidden;
`;

export const TrackTitleLink = styled.a<{ isDarkTheme: boolean }>`
    color: ${(props) =>
    props.isDarkTheme ? '#FFFFFF' : '#000000'};

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;

export const TrackTitleSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4e4e4e;
`;

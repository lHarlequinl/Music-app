import styled from 'styled-components';

const COLORS = {
    'dark-author': '#FFFFFF',
    'light-author': '#000000',
};

export const TrackPlay = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TrackPlayContain = styled.div`
    width: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: 'image author' 'image album';
    align-items: center;
`;

export const TrackImageWrapper = styled.div`
    width: 51px;
    height: 51px;
    background-color: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    grid-area: image;
`;

export const TrackPlaySVGWrapper = styled.div`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
`;

export const TrackPlayAuthor = styled.div`
    position: relative;
    grid-area: author;
    min-width: 49px;
    overflow: hidden;
`;

export const TrackPlayAuthorLink = styled.a<{ isDarkTheme: boolean }>`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) =>
        props.isDarkTheme ? COLORS['dark-author'] : COLORS['light-author']};
    white-space: nowrap;
    text-decoration: underline;
`;

export const TrackPlayAlbum = styled.div`
    position: relative;
    grid-area: album;
    min-width: 49px;
    overflow: hidden;
`;

export const TrackPlayAlbumLink = styled.a<{ isDarkTheme: boolean }>`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: ${(props) =>
        props.isDarkTheme ? COLORS['dark-author'] : COLORS['light-author']};
`;

export const TrackPlayLikeDisWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 26%;
`;

export const TrackPlayLikeButton = styled.div`
    padding: 5px;
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
`;

export const TrackPlayLikeDisButtonSVGWrapper = styled.div`
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;

    :active {
        fill: #696969;
        stroke: #ffffff;
        cursor: pointer;
    }

    :hover {
        stroke: #acacac;
        cursor: pointer;
    }
`;

export const TrackPlayDisButton = styled(TrackPlayLikeButton)`
    margin-left: 28.5px;
`;

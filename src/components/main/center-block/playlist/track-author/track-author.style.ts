import styled from 'styled-components';

const COLORS = {
    'dark-author': '#FFFFFF',
    'light-author': '#000000',
};

export const TrackAuthor = styled.div`
    position: relative;
    width: 321px;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
`;

export const TrackAuthorLink = styled.a<{ isDarkTheme: boolean }>`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) =>
        props.isDarkTheme ? COLORS['dark-author'] : COLORS['light-author']};
    text-align: left;
`;

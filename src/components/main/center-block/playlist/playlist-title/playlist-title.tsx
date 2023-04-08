import React, { useContext } from 'react';
import * as Styled from './playlist-title.style';
import { ThemeContext } from '../../../../contexts/theme-context/theme-context';
import WatchIcon from '../../../../icons/watch';

const PlaylistTitle = () => {
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Styled.PlaylistContentTitle>
            <Styled.PlaylistTitleCol01>Трек</Styled.PlaylistTitleCol01>
            <Styled.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</Styled.PlaylistTitleCol02>
            <Styled.PlaylistTitleCol03>АЛЬБОМ</Styled.PlaylistTitleCol03>
            <Styled.PlaylistTitleCol04>
                <Styled.PlaylistSVGWrapper isDarkTheme={isDarkTheme}>
                    <WatchIcon aria-label="time" />
                </Styled.PlaylistSVGWrapper>
            </Styled.PlaylistTitleCol04>
        </Styled.PlaylistContentTitle>
    );
};

export default PlaylistTitle;

import React from 'react';
import * as Styled from './playlist-title.style';
import SvgImage from '../../../../svg/svg-image';

const PlaylistTitle = () => {
    return (
        <Styled.PlaylistContentTitle>
            <Styled.PlaylistTitleCol01>Трек</Styled.PlaylistTitleCol01>
            <Styled.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</Styled.PlaylistTitleCol02>
            <Styled.PlaylistTitleCol03>АЛЬБОМ</Styled.PlaylistTitleCol03>
            <Styled.PlaylistTitleCol04>
                <Styled.PlaylistSVGWrapper>
                    <SvgImage
                        href="img/icon/sprite.svg#icon-watch"
                        ariaLabel="time"
                    />
                </Styled.PlaylistSVGWrapper>
            </Styled.PlaylistTitleCol04>
        </Styled.PlaylistContentTitle>
    );
};

export default PlaylistTitle;

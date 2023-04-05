import React, { useContext } from 'react';
import SvgImage from '../../svg/svg-image';
import * as Styled from './player-track.style';
import { Track } from '../../../types';
import { SkeletonImage, Skeleton } from '../../UI/skeletons/skeletons.style';
import { ThemeContext } from '../../contexts/theme-context/theme-context';

const PlayerTrack = ({
    trackLink,
    trackName,
    authorLink,
    authorName,
    isLoading = true,
}: Track) => {
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Styled.TrackPlay>
            <Styled.TrackPlayContain>
                <Styled.TrackImageWrapper>
                    {isLoading === true ? (
                        <SkeletonImage />
                    ) : (
                        <Styled.TrackPlaySVGWrapper>
                            <SvgImage
                                href="/img/icon/sprite.svg#icon-note"
                                ariaLabel="music"
                            />
                        </Styled.TrackPlaySVGWrapper>
                    )}
                </Styled.TrackImageWrapper>
                <Styled.TrackPlayAuthor>
                    {isLoading === true ? (
                        <Skeleton />
                    ) : (
                        <Styled.TrackPlayAuthorLink isDarkTheme={isDarkTheme} href={trackLink}>
                            {trackName}
                        </Styled.TrackPlayAuthorLink>
                    )}
                </Styled.TrackPlayAuthor>
                <Styled.TrackPlayAlbum>
                    {isLoading === true ? (
                        <Skeleton />
                    ) : (
                        <Styled.TrackPlayAlbumLink isDarkTheme={isDarkTheme} href={authorLink}>
                            {authorName}
                        </Styled.TrackPlayAlbumLink>
                    )}
                </Styled.TrackPlayAlbum>
            </Styled.TrackPlayContain>
            <Styled.TrackPlayLikeDisWrapper>
                <Styled.TrackPlayLikeButton>
                    <Styled.TrackPlayLikeDisButtonSVGWrapper>
                        <SvgImage
                            href="/img/icon/sprite.svg#icon-like"
                            ariaLabel="like"
                        />
                    </Styled.TrackPlayLikeDisButtonSVGWrapper>
                </Styled.TrackPlayLikeButton>
                <Styled.TrackPlayDisButton>
                    <Styled.TrackPlayLikeDisButtonSVGWrapper>
                        <SvgImage
                            href="/img/icon/sprite.svg#icon-dislike"
                            ariaLabel="dislike"
                        />
                    </Styled.TrackPlayLikeDisButtonSVGWrapper>
                </Styled.TrackPlayDisButton>
            </Styled.TrackPlayLikeDisWrapper>
        </Styled.TrackPlay>
    );
};

export default PlayerTrack;

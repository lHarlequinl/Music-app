import React, { useContext } from 'react';
import * as Styled from './player-track.style';
import { Track } from '../../../types';
import { SkeletonImage, Skeleton } from '../../UI/skeletons/skeletons.style';
import { ThemeContext } from '../../contexts/theme-context/theme-context';
import NoteIcon from '../../icons/note';
import LikeIcon from '../../icons/like';
import DislikeIcon from '../../icons/dislike';

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
                <Styled.TrackImageWrapper isDarkTheme={isDarkTheme}>
                    {isLoading === true ? (
                        <SkeletonImage />
                    ) : (
                        <Styled.TrackPlaySVGWrapper isDarkTheme={isDarkTheme}>
                            <NoteIcon aria-label="music" />
                        </Styled.TrackPlaySVGWrapper>
                    )}
                </Styled.TrackImageWrapper>
                <Styled.TrackPlayAuthor>
                    {isLoading === true ? (
                        <Skeleton />
                    ) : (
                        <Styled.TrackPlayAuthorLink
                            isDarkTheme={isDarkTheme}
                            href={trackLink}
                        >
                            {trackName}
                        </Styled.TrackPlayAuthorLink>
                    )}
                </Styled.TrackPlayAuthor>
                <Styled.TrackPlayAlbum>
                    {isLoading === true ? (
                        <Skeleton />
                    ) : (
                        <Styled.TrackPlayAlbumLink
                            isDarkTheme={isDarkTheme}
                            href={authorLink}
                        >
                            {authorName}
                        </Styled.TrackPlayAlbumLink>
                    )}
                </Styled.TrackPlayAlbum>
            </Styled.TrackPlayContain>
            <Styled.TrackPlayLikeDisWrapper>
                <Styled.TrackPlayLikeButton>
                    <Styled.TrackPlayLikeDisButtonSVGWrapper isDarkTheme={isDarkTheme}>
                        <LikeIcon aria-label="like" />
                    </Styled.TrackPlayLikeDisButtonSVGWrapper>
                </Styled.TrackPlayLikeButton>
                <Styled.TrackPlayDisButton>
                    <Styled.TrackPlayLikeDisButtonSVGWrapper isDarkTheme={isDarkTheme}>
                        <DislikeIcon aria-label="dislike" />
                    </Styled.TrackPlayLikeDisButtonSVGWrapper>
                </Styled.TrackPlayDisButton>
            </Styled.TrackPlayLikeDisWrapper>
        </Styled.TrackPlay>
    );
};

export default PlayerTrack;

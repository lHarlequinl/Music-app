import React from 'react';
import * as Styled from './playlist-item.style';
import SvgImage from '../../../../svg/svg-image';
import { PlaylistItemProps } from '../../../../../types';
import TrackTitle from './../track-title/track-title';
import TrackAuthor from './../track-author/track-author';
import TrackAlbum from './../track-album/playlist-album';
import TrackTime from './../track-time/track-time';

const PlaylistItem = ({
    trackTitleLink,
    trackTitleText,
    trackAuthorLink,
    trackAuthorText,
    trackAlbumLink,
    trackAlbumText,
    trackTime,
    isLoading,
}: PlaylistItemProps) => {
    return (
        <Styled.PlaylistItem>
            <Styled.Track>
                <TrackTitle
                    isLoading={isLoading}
                    trackTitleLink={trackTitleLink}
                    trackTitleText={trackTitleText}
                />
                <TrackAuthor
                    isLoading={isLoading}
                    trackAuthorLink={trackAuthorLink}
                    trackAuthorText={trackAuthorText}
                />
                <TrackAlbum
                    isLoading={isLoading}
                    trackAlbumLink={trackAlbumLink}
                    trackAlbumText={trackAlbumText}
                />
                <TrackTime isLoading={isLoading} trackTime={trackTime} />
            </Styled.Track>
        </Styled.PlaylistItem>
    );
};

export default PlaylistItem;

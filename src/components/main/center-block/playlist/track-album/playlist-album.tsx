import React from 'react';
import * as Styled from './playlist-album.style';
import { Skeleton } from '../../../../UI/skeletons/skeletons.style';

interface PropsType {
    isLoading: boolean;
    trackAlbumText: string;
    trackAlbumLink: string;
}

const TrackAlbum = ({
    isLoading,
    trackAlbumText,
    trackAlbumLink,
}: PropsType) => {
    return (
        <Styled.TrackAlbum>
            {isLoading === true ? (
                <Skeleton />
            ) : (
                <Styled.TrackAlbumLink href={trackAlbumLink}>
                    {trackAlbumText}
                </Styled.TrackAlbumLink>
            )}
        </Styled.TrackAlbum>
    );
};

export default TrackAlbum;

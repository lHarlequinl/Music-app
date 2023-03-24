import React from 'react';
import * as Styled from './track-author.style';
import { Skeleton } from '../../../../UI/skeletons/skeletons.style';

interface PropsType {
    isLoading: boolean;
    trackAuthorText: string;
	trackAuthorLink: string;
}

const TrackAuthor = ({
    isLoading,
	trackAuthorText,
	trackAuthorLink,
}: PropsType) => {
    return (
        <Styled.TrackAuthor>
            {isLoading === true ? (
                <Skeleton />
            ) : (
                <Styled.TrackAuthorLink href={trackAuthorLink}>
                    {trackAuthorText}
                </Styled.TrackAuthorLink>
            )}
        </Styled.TrackAuthor>
    );
};

export default TrackAuthor;

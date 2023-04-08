import React, { useContext } from 'react';
import * as Styled from './track-author.style';
import { Skeleton } from '../../../../UI/skeletons/skeletons.style';
import { ThemeContext } from '../../../../contexts/theme-context/theme-context';

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
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Styled.TrackAuthor>
            {isLoading === true ? (
                <Skeleton />
            ) : (
                <Styled.TrackAuthorLink isDarkTheme={isDarkTheme} href={trackAuthorLink}>
                    {trackAuthorText}
                </Styled.TrackAuthorLink>
            )}
        </Styled.TrackAuthor>
    );
};

export default TrackAuthor;

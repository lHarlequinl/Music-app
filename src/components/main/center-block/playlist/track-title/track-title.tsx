import React, { useContext } from 'react';
import * as Styled from './track-title.style';
import {
    SkeletonImage,
    Skeleton,
} from '../../../../UI/skeletons/skeletons.style';
import { ThemeContext } from '../../../../contexts/theme-context/theme-context';
import NoteIcon from '../../../../icons/note';

interface PropsType {
    isLoading: boolean;
    trackTitleLink: string;
    trackTitleText: string;
}

const TrackTitle = ({
    isLoading,
    trackTitleLink,
    trackTitleText,
}: PropsType) => {
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Styled.TrackTitle>
            <Styled.TrackImageWrapper>
                {isLoading === true ? (
                    <SkeletonImage />
                ) : (
                    <Styled.TrackTitleImage isDarkTheme={isDarkTheme}>
                        <Styled.TrackSVGWrapper isDarkTheme={isDarkTheme}>
                            <NoteIcon aria-label={'music'} />
                        </Styled.TrackSVGWrapper>
                    </Styled.TrackTitleImage>
                )}
            </Styled.TrackImageWrapper>
            <Styled.TrackTitleText>
                {isLoading === true ? (
                    <Skeleton />
                ) : (
                    <Styled.TrackTitleLink
                        isDarkTheme={isDarkTheme}
                        href={trackTitleLink}
                    >
                        {trackTitleText}
                        <Styled.TrackTitleSpan></Styled.TrackTitleSpan>
                    </Styled.TrackTitleLink>
                )}
            </Styled.TrackTitleText>
        </Styled.TrackTitle>
    );
};

export default TrackTitle;

import React from 'react';
import * as Styled from './track-title.style';
import {
    SkeletonImage,
    Skeleton,
} from '../../../../UI/skeletons/skeletons.style';
import SvgImage from '../../../../../components/svg/svg-image';

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
    return (
        <Styled.TrackTitle>
            <Styled.TrackImageWrapper>
                {isLoading === true ? (
                    <SkeletonImage />
                ) : (
                    <Styled.TrackTitleImage>
                        <Styled.TrackSVGWrapper>
                            <SvgImage
                                href="/img/icon/sprite.svg#icon-note"
                                ariaLabel={'music'}
                            />
                        </Styled.TrackSVGWrapper>
                    </Styled.TrackTitleImage>
                )}
            </Styled.TrackImageWrapper>
            <Styled.TrackTitleText>
                {isLoading === true ? (
                    <Skeleton />
                ) : (
                    <Styled.TrackTitleLink href={trackTitleLink}>
                        {trackTitleText}
                        <Styled.TrackTitleSpan></Styled.TrackTitleSpan>
                    </Styled.TrackTitleLink>
                )}
            </Styled.TrackTitleText>
        </Styled.TrackTitle>
    );
};

export default TrackTitle;

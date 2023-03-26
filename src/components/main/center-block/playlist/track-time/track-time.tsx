import React from 'react';
import * as Styled from './track-time.style';
import SvgImage from '../../../../../components/svg/svg-image';
import { Skeleton } from '../../../../UI/skeletons/skeletons.style';

interface PropsType {
    isLoading: boolean;
    trackTime: string;
}

const TrackAlbum = ({ isLoading, trackTime }: PropsType) => {
    return (
        <Styled.TrackTime>
            {isLoading === true ? (
                <Skeleton />
            ) : (
                <Styled.TrackTimeWrapper>
                    <Styled.TrackTimeSVGWRapper>
                        <SvgImage
                            href="img/icon/sprite.svg#icon-like"
                            ariaLabel={'time'}
                        />
                    </Styled.TrackTimeSVGWRapper>
                    <Styled.TrackTimeText>{trackTime}</Styled.TrackTimeText>
                </Styled.TrackTimeWrapper>
            )}
        </Styled.TrackTime>
    );
};

export default TrackAlbum;

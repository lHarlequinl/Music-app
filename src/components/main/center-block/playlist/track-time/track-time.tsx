import React, { useContext } from 'react';
import * as Styled from './track-time.style';
import { Skeleton } from '../../../../UI/skeletons/skeletons.style';
import { ThemeContext } from '../../../../contexts/theme-context/theme-context';
import LikeIcon from '../../../../icons/like';

interface PropsType {
    isLoading: boolean;
    trackTime: string;
}

const TrackAlbum = ({ isLoading, trackTime }: PropsType) => {
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Styled.TrackTime>
            {isLoading === true ? (
                <Skeleton />
            ) : (
                <Styled.TrackTimeWrapper>
                    <Styled.TrackTimeSVGWRapper isDarkTheme={isDarkTheme}>
                        <LikeIcon aria-label={'like'} />
                    </Styled.TrackTimeSVGWRapper>
                    <Styled.TrackTimeText>{trackTime}</Styled.TrackTimeText>
                </Styled.TrackTimeWrapper>
            )}
        </Styled.TrackTime>
    );
};

export default TrackAlbum;

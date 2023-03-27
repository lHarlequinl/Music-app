import React from 'react';
import * as Styled from './player-controls.style';
import SvgImage from '../../svg/svg-image';

const PlayerControls = () => {
    return (
        <Styled.PlayerControls>
            <Styled.PlayerButton>
                <Styled.PrevIconWrapper>
                    <SvgImage
                        href="/img/icon/sprite.svg#icon-prev"
                        ariaLabel="prev"
                    />
                </Styled.PrevIconWrapper>
            </Styled.PlayerButton>
            <Styled.PlayerButton>
                <Styled.PlayIconWrapper>
                    <SvgImage
                        href="/img/icon/sprite.svg#icon-play"
                        ariaLabel="play"
                    />
                </Styled.PlayIconWrapper>
            </Styled.PlayerButton>
            <Styled.PlayerButton>
                <Styled.NextIconWrapper>
                    <SvgImage
                        href="/img/icon/sprite.svg#icon-next"
                        ariaLabel="next"
                    />
                </Styled.NextIconWrapper>
            </Styled.PlayerButton>
            <Styled.PlayerButton>
                <Styled.RepeatIconWrapper>
                    <SvgImage
                        href="/img/icon/sprite.svg#icon-repeat"
                        ariaLabel="repeat"
                    />
                </Styled.RepeatIconWrapper>
            </Styled.PlayerButton>
            <Styled.PlayerButton>
                <Styled.ShuffleIconWrapper>
                    <SvgImage
                        href="/img/icon/sprite.svg#icon-shuffle"
                        ariaLabel="shuffle"
                    />
                </Styled.ShuffleIconWrapper>
            </Styled.PlayerButton>
        </Styled.PlayerControls>
    );
};

export default PlayerControls;

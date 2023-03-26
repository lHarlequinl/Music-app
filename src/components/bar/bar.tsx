import React from 'react';
import * as Styled from './bar.style';
import Player from './player/player';
import PlayerVolume from './player-volume/player-volume';

const Bar = () => {
    return (
        <Styled.Bar>
            <Styled.BarContent>
                <Styled.BarPlayerProgress />
                <Styled.BarPlayerBlock>
                    <Player />
                    <PlayerVolume />
                </Styled.BarPlayerBlock>
            </Styled.BarContent>
        </Styled.Bar>
    );
};

export default Bar;

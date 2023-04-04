import React from 'react';
import * as Styled from './bar.style';
import Player from './player/player';

const Bar = () => {
    return (
        <Styled.Bar>
            <Styled.BarContent>
                    <Player />
            </Styled.BarContent>
        </Styled.Bar>
    );
};

export default Bar;

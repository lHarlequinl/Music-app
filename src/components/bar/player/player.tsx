import React, { useEffect, useState } from 'react';
import * as Styled from './player.style';
import PlayerControls from '../player-controls/player-controls';
import PlayerTrack from '../player-track/player-track';

const Player = () => {
    const [status, setStatus] = useState<boolean>(true);
    useEffect(() => {
        const loadTimer = setTimeout(() => {
            setStatus(false);
        }, 5000);
        return () => {
            clearTimeout(loadTimer);
        };
    });
    return (
        <Styled.BarPlayer>
            <PlayerControls />
            <PlayerTrack
                isLoading={status}
                trackLink="https://"
                trackName="Ты та..."
                authorLink="https://"
                authorName="Баста"
            />
        </Styled.BarPlayer>
    );
};

export default Player;

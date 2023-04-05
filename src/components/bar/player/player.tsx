import React, { useContext, useEffect, useRef, useState } from 'react';
import * as Styled from './player.style';
import PlayerControls from '../player-controls/player-controls';
import PlayerTrack from '../player-track/player-track';
import PlayerVolume from '../player-volume/player-volume';
import { ThemeContext } from '../../contexts/theme-context/theme-context';

const Player = () => {
    const [isLoading, setStatus] = useState<boolean>(true);
    const { isDarkTheme } = useContext(ThemeContext);

    useEffect(() => {
        const loadTimer = setTimeout(() => {
            setStatus(false);
        }, 5000);
        return () => {
            clearTimeout(loadTimer);
        };
    });

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [trackProgress, setTrackProgress] = useState<number>(0);
    const [isVolumeOn, setIsVolumeOn] = useState<boolean>(true);

    const audioRef = useRef(new Audio('/music/dropin.mp3'));
    const interval: any = useRef();

    const { duration } = audioRef.current;
    const progressByPercent = (trackProgress / duration) * 100;

    const onTogglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const onVolumeToggle = () => {
        setIsVolumeOn(!isVolumeOn);
        isVolumeOn
            ? (audioRef.current.volume = 0)
            : (audioRef.current.volume = 0.5);
    };

    const startProgressTimer = (): void => {
        clearInterval(interval.current);

        interval.current = setInterval(() => {
            setTrackProgress(audioRef.current.currentTime);

            if (audioRef.current.ended) {
                setIsPlaying(false);
            }
        }, 1000);
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play().catch((e) => {
                console.log(e);
            });
            startProgressTimer();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    return (
        <Styled.BarPlayerContent>
            <Styled.BarPlayerProgress
                isDarkTheme={isDarkTheme}
                type="range"
                step="1"
                min="0"
                max={isNaN(duration) ? '100' : `${duration}`}
                value={trackProgress}
                gradientValue={
                    isNaN(progressByPercent) ? '0' : `${progressByPercent}`
                }
            ></Styled.BarPlayerProgress>
            <Styled.BarPlayerBlock isDarkTheme={isDarkTheme}>
                <Styled.BarPlayer>
                    <PlayerControls
                        isPlaying={isPlaying}
                        onTogglePlay={() => onTogglePlay()}
                    />
                    <PlayerTrack
                        isLoading={isLoading}
                        trackLink="https://"
                        trackName="Dropin"
                        authorLink="https://"
                        authorName="Boby Marleni"
                    />
                </Styled.BarPlayer>
                <PlayerVolume
                    value={audioRef.current.volume}
                    onVolumeToggle={() => onVolumeToggle()}
                    onVolumeOn={isVolumeOn}
                />
            </Styled.BarPlayerBlock>
        </Styled.BarPlayerContent>
    );
};

export default Player;

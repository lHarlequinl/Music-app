import React, { useContext } from 'react';
import * as Styled from './player-controls.style';
import { ThemeContext } from '../../contexts/theme-context/theme-context';
import PrevIcon from '../../icons/prev';
import PauseIcon from '../../icons/pause';
import PlayIcon from '../../icons/play';
import NextIcon from '../../icons/next';
import RepeatIcon from '../../icons/repeat';
import ShuffletIcon from '../../icons/shuffle';

interface Props {
    isPlaying: boolean;
    onTogglePlay: () => void;
}

const PlayerControls = ({ isPlaying, onTogglePlay }: Props) => {
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Styled.PlayerControls>
            <Styled.PlayerButton>
                <Styled.PrevIconWrapper isDarkTheme={isDarkTheme}>
                    <PrevIcon aria-label="prev" />
                </Styled.PrevIconWrapper>
            </Styled.PlayerButton>
            <Styled.PlayerButton onClick={() => onTogglePlay()}>
                {isPlaying ? (
                    <Styled.PlayIconWrapper isDarkTheme={isDarkTheme}>
                        <PauseIcon aria-label="pause" />
                    </Styled.PlayIconWrapper>
                ) : (
                    <Styled.PlayIconWrapper isDarkTheme={isDarkTheme}>
                        <PlayIcon aria-label="play" />
                    </Styled.PlayIconWrapper>
                )}
            </Styled.PlayerButton>
            <Styled.PlayerButton>
                <Styled.NextIconWrapper isDarkTheme={isDarkTheme}> 
                    <NextIcon aria-label="next" />
                </Styled.NextIconWrapper>
            </Styled.PlayerButton>
            <Styled.PlayerButton>
                <Styled.RepeatIconWrapper isDarkTheme={isDarkTheme}>
                    <RepeatIcon aria-label="repeat" />
                </Styled.RepeatIconWrapper>
            </Styled.PlayerButton>
            <Styled.PlayerButton>
                <Styled.ShuffleIconWrapper isDarkTheme={isDarkTheme}>
                    <ShuffletIcon aria-label="shuffle" />
                </Styled.ShuffleIconWrapper>
            </Styled.PlayerButton>
        </Styled.PlayerControls>
    );
};

export default PlayerControls;

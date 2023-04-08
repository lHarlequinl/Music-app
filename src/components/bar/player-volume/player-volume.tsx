import React, { useContext } from 'react';
import * as Styled from './player-volume.style';
import { ThemeContext } from '../../contexts/theme-context/theme-context';
import VolumetIcon from '../../icons/volume';
import VolumeOffIcon from '../../icons/volume-off';

interface Props {
    value: number;
    onVolumeToggle: () => void;
    onVolumeOn: boolean;
}

const PlayerVolume = ({
    value,
    onVolumeToggle,
    onVolumeOn = true,
}: Props) => {
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Styled.PlayerVolumeBlock>
            <Styled.PlayerVolumeContent>
                <Styled.PlayerVolumeImageWrapper>
                    <Styled.PlayerVolumeSVGWrapper isDarkTheme={isDarkTheme}
                        onClick={() => onVolumeToggle()}
                    >
                    {isDarkTheme 
                        ? <VolumetIcon aria-label="volume"/> 
                        : <VolumeOffIcon aria-label="volume-off"/>}
                    </Styled.PlayerVolumeSVGWrapper>
                </Styled.PlayerVolumeImageWrapper>
                <Styled.PlayerVolumeProgressWrapper>
                    <Styled.PlayerVolumeProgressLine isDarkTheme={isDarkTheme}
                        type="range"
                        name="volume"
                        min="0"
                        max="1"
                        step="0.01"
                        value={value}
                    />
                </Styled.PlayerVolumeProgressWrapper>
            </Styled.PlayerVolumeContent>
        </Styled.PlayerVolumeBlock>
    );
};

export default PlayerVolume;

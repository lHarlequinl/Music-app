import React, { useContext } from 'react';
import SvgImage from '../../svg/svg-image';
import * as Styled from './player-volume.style';
import { ThemeContext } from '../../contexts/theme-context/theme-context';

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
                    <Styled.PlayerVolumeSVGWrapper
                        onClick={() => onVolumeToggle()}
                    >
                        <SvgImage
                            href={
                                onVolumeOn
                                    ? '/img/icon/sprite.svg#icon-volume'
                                    : '/img/icon/sprite.svg#icon-volume-off'
                            }
                            ariaLabel="volume"
                        />
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

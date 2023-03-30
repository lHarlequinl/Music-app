import React from 'react';
import SvgImage from '../../svg/svg-image';
import * as Styled from './player-volume.style';
interface Props {
    value: number;
    onVolumeChange: (e: React.ChangeEvent) => void;
    onVolumeToggle: () => void;
    onVolumeOn: boolean;
}

const PlayerVolume = ({
    value,
    onVolumeChange,
    onVolumeToggle,
    onVolumeOn = true,
}: Props) => {
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
                    <Styled.PlayerVolumeProgressLine
                        type="range"
                        name="volume"
                        min='0'
                        max='1'
                        step='0.01'
                        value={value}
                        onChange={(e) => onVolumeChange(e)}
                    />
                </Styled.PlayerVolumeProgressWrapper>
            </Styled.PlayerVolumeContent>
        </Styled.PlayerVolumeBlock>
    );
};

export default PlayerVolume;

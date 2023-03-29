import React from 'react';
import * as Styled from '../central-block.style';
import PlaylistTitle from '../playlist/playlist-title/playlist-title';
import PlaylistContent from '../playlist/playlist';
import { PlaylistProps } from '../../../../types';

interface Props {
    playlist: PlaylistProps[];
}

const Content = ({ playlist }: Props) => {
    return (
        <Styled.CenterBlockContent>
            <PlaylistTitle />
            <PlaylistContent playlist={playlist} />
        </Styled.CenterBlockContent>
    );
};

export default Content;

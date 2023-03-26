import React from 'react';
import * as Styled from './central-block.style';
import PlaylistTitle from './playlist/playlist-title/playlist-title';
import PlaylistItems from './playlist/playlist-items/playlist-items';

const Content = () => {
    return (
        <Styled.CenterBlockContent>
            <PlaylistTitle />
            <PlaylistItems />
        </Styled.CenterBlockContent>
    );
};

export default Content;

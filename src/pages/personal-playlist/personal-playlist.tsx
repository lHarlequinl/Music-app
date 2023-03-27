import React from 'react';
import * as Styled from '../main/main.style';
import Navigation from '../../components/main/navigation/navigation';
import { CenterBlock, CenterBlockTitle } from '../../components/main/center-block/central-block.style';
import Content from '../../components/main/center-block/content/content';
import { PersonalPlaylistItems } from '../../mocks/personal-playlist';
import Search from '../../components/UI/search/search';
import Bar from '../../components/bar/bar';
import Sidebar from '../../components/main/sidebar/sidebar';

const PersonalPlaylist = () => {
    return (
        <Styled.Main>
            <Navigation />
            <CenterBlock>
                <Search />
                <CenterBlockTitle>Мой плейлист</CenterBlockTitle>
                <Content playlist={PersonalPlaylistItems}/>
            </CenterBlock>
            <Sidebar />
            <Bar />
        </Styled.Main>
    );
};

export default PersonalPlaylist;

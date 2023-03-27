import React from 'react';
import * as Styled from '../main/main.style';
import Navigation from '../../components/main/navigation/navigation';
import {
    CenterBlock,
    CenterBlockTitle,
} from '../../components/main/center-block/central-block.style';
import Content from '../../components/main/center-block/content/content';
import { CustomPlaylists } from '../../mocks/custom-playlist';
import Search from '../../components/UI/search/search';
import Bar from '../../components/bar/bar';
import Sidebar from '../../components/main/sidebar/sidebar';
import { useParams } from 'react-router-dom';

const PersonalPlaylist = () => {
    const params = useParams();
    const currenPlaylist = CustomPlaylists.filter(
        (item) => item.id === params.id
    );

    return (
        <Styled.Main>
            <Navigation />
            <CenterBlock>
                <Search />
                <CenterBlockTitle>{currenPlaylist[0].title}</CenterBlockTitle>
                <Content playlist={CustomPlaylists} />
            </CenterBlock>
            <Sidebar />
            <Bar />
        </Styled.Main>
    );
};

export default PersonalPlaylist;

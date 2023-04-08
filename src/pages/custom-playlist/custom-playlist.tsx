import React, { useContext } from 'react';
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
import { ThemeContext } from '../../components/contexts/theme-context/theme-context';

const CustomPlaylist = () => {
    const params = useParams();
    const currenPlaylist = CustomPlaylists.filter(
        (item) => item.id === params.id
    );

    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Styled.Main>
            <Navigation />
            <CenterBlock isDarkTheme={isDarkTheme}>
                <Search />
                <CenterBlockTitle isDarkTheme={isDarkTheme}>{currenPlaylist[0].title}</CenterBlockTitle>
                <Content playlist={currenPlaylist} />
            </CenterBlock>
            <Sidebar />
            <Bar />
        </Styled.Main>
    );
};

export default CustomPlaylist;

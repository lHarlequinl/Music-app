import React, { useContext } from 'react';
import * as Styled from '../main/main.style';
import Navigation from '../../components/main/navigation/navigation';
import { CenterBlock, CenterBlockTitle } from '../../components/main/center-block/central-block.style';
import Content from '../../components/main/center-block/content/content';
import { PersonalPlaylistItems } from '../../mocks/personal-playlist';
import Search from '../../components/UI/search/search';
import Bar from '../../components/bar/bar';
import Sidebar from '../../components/main/sidebar/sidebar';
import { ThemeContext } from '../../components/contexts/theme-context/theme-context';

const PersonalPlaylist = () => {
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Styled.Main>
            <Navigation />
            <CenterBlock isDarkTheme={isDarkTheme}>
                <Search />
                <CenterBlockTitle isDarkTheme={isDarkTheme}>Мой плейлист</CenterBlockTitle>
                <Content playlist={PersonalPlaylistItems}/>
            </CenterBlock>
            <Sidebar />
            <Bar />
        </Styled.Main>
    );
};

export default PersonalPlaylist;

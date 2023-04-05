import React, { useContext } from 'react';
import * as Styled from './central-block.style';
import Search from '../../UI/search/search';
import Filter from '../../UI/filter/filter';
import Content from './content/content';
import { trackData } from '../../../mocks/track-data';
import { ThemeContext } from '../../contexts/theme-context/theme-context';

const CenterBlock = () => {
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Styled.CenterBlock isDarkTheme={isDarkTheme}>
            <Search />
            <Styled.CenterBlockTitle isDarkTheme={isDarkTheme}>Треки</Styled.CenterBlockTitle>
            <Filter />
            <Content playlist={trackData} />
        </Styled.CenterBlock>
    );
};

export default CenterBlock;

import React, { useContext } from 'react';
import * as Styled from './search.style';
import { ThemeContext } from '../../contexts/theme-context/theme-context';
import SearchIcon from '../../icons/search';

const Search = () => {
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Styled.SearchBlock isDarkTheme={isDarkTheme}>
            <Styled.SearchSVGWrapper isDarkTheme={isDarkTheme}>
                <SearchIcon aria-label="search" />
            </Styled.SearchSVGWrapper>
            <Styled.SearchInput
                isDarkTheme={isDarkTheme}
                type="search"
                placeholder="Поиск"
                name="search"
            />
        </Styled.SearchBlock>
    );
};

export default Search;

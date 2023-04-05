import React, { useContext } from 'react';
import SvgImage from '../../svg/svg-image';
import * as Styled from './search.style';
import { ThemeContext } from '../../contexts/theme-context/theme-context';

const Search = () => {
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Styled.SearchBlock isDarkTheme={isDarkTheme}>
            <Styled.SearchSVGWrapper>
                <SvgImage 
                    href='../img/icon/sprite.svg#icon-search'
                    ariaLabel="search" />
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

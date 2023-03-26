import React from 'react';
import SvgImage from '../../svg/svg-image';
import * as Styled from './search.style';

const Search = () => {
    return (
        <Styled.SearchBlock>
            <Styled.SearchSVGWrapper>
                <SvgImage
                    href="img/icon/sprite.svg#icon-search"
                    ariaLabel="search"
                />
            </Styled.SearchSVGWrapper>
            <Styled.SearchInput
                type="search"
                placeholder="Поиск"
                name="search"
            />
        </Styled.SearchBlock>
    );
};

export default Search;

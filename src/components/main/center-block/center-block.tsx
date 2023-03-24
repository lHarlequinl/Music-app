import React from 'react';
import * as Styled from './central-block.style';
import Search from '../../UI/search/search';
import Filter from '../../UI/filter/filter';
import Content from './content';

const CenterBlock = () => {
    return (
        <Styled.MainCenterBlock>
            <Search />
            <Styled.CenterBlockTitle>Треки</Styled.CenterBlockTitle>
            <Filter />
            <Content />
        </Styled.MainCenterBlock>
    );
};

export default CenterBlock;

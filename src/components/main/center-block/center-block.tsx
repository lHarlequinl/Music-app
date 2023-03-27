import React from 'react';
import * as Styled from './central-block.style';
import Search from '../../UI/search/search';
import Filter from '../../UI/filter/filter';
import Content from './content/content';
import CenterBlockTitle from './center-block-title/center-block-title'
import { trackData } from '../../../mocks/track-data';

const CenterBlock = () => {
    return (
        <Styled.CenterBlock>
            <Search />
            <CenterBlockTitle/>
            <Filter />
            <Content playlist={trackData} />
        </Styled.CenterBlock>
    );
};

export default CenterBlock;

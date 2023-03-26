import React from 'react';
import * as Styled from './main.style';
import Navigation from './navigation/navigation';
import CentrBlock from './center-block/center-block';
import Bar from '../bar/bar';
import Sidebar from './sidebar/sidebar';

const Main = () => {
    return (
        <Styled.Main>
            <Navigation />
            <CentrBlock />
            <Sidebar />
            <Bar />
        </Styled.Main>
    );
};

export default Main;

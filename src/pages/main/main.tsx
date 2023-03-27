import React from 'react';
import * as Styled from './main.style';
import Navigation from '../../components/main/navigation/navigation';
import CentrBlock from '../../components/main/center-block/center-block';
import Bar from '../../components/bar/bar';
import Sidebar from '../../components/main/sidebar/sidebar';

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

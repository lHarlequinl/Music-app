import React from 'react';
import Navigation from './navigation/navigation';
import CentrBlock from './center-block/center-block';
import Bar from '../bar/bar';
import Sidebar from './sidebar/sidebar';

const Main = () => {
    return (
        <main className="main">
            <Navigation />
            <CentrBlock />
            <Sidebar />
            <Bar />
        </main>
    );
};

export default Main;

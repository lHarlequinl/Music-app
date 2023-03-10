import React, { ReactElement } from 'react';
import Navigation from './main/navigation/navigation';
import CentrBlock from './main/center-block/center-block';
// import Sidebar from './main/sidebar/sidebar';

const Main = (): ReactElement<HTMLDivElement> => {
    return (
        <main className="main">
            <Navigation />
            <CentrBlock />
            {/* <Sidebar /> */}
        </main>
    );
};

export default Main;

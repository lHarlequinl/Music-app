import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import Main from './components/main/main';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const Container = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <Main />
            </div>
        </div>
    );
}

root.render(<Container />);

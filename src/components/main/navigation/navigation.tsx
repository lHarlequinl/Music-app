import React, { useState } from 'react';
import Logo from './logo/logo';
import BurgerLines from './burger/burger';
import Menu from './menu/menu';
import * as Styled from './navigation.style';

const Navigation = () => {
    const [menuActive, setMenuActive] = useState<boolean>(false);

    return (
        <Styled.Nav>
            <Logo src="img/logo.png" alt="logo" />
            <Styled.NavBurger onClick={() => setMenuActive(!menuActive)}>
                <BurgerLines menuActive={menuActive} />
                <BurgerLines menuActive={menuActive} />
                <BurgerLines menuActive={menuActive} />
            </Styled.NavBurger>
            <Menu menuActive={menuActive} />
        </Styled.Nav>
    );
};
export default Navigation;

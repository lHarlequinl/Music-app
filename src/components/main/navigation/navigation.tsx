import React, { useContext, useState } from 'react';
import Logo from './logo/logo';
import BurgerLines from './burger/burger';
import Menu from './menu/menu';
import * as Styled from './navigation.style';
import { ThemeContext } from '../../contexts/theme-context/theme-context';

const Navigation = () => {
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const { isDarkTheme } = useContext(ThemeContext);

    const currentThemeIcon = () => {
        return isDarkTheme ? '../img/logo.png' : '../img/logo-black.png';
    };

    return (
        <Styled.Nav isDarkTheme={isDarkTheme}>
            <Logo src={currentThemeIcon()} alt="logo" />
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

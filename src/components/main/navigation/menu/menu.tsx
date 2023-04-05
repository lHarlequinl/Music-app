import React, { useContext } from 'react';
import { ShowHideMenu, MenuPropsLink } from '../../../../types';
import * as Styled from './menu.style';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/theme-context/theme-context';

const MenuList = ({ text }: MenuPropsLink) => {
    const { isDarkTheme } = useContext(ThemeContext);

    return <Styled.MenuItem isDarkTheme={isDarkTheme}>{text}</Styled.MenuItem>;
};

const Menu = ({ menuActive }: ShowHideMenu) => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    const currentThemeIcon = () => {
        return isDarkTheme ? '../img/theme-dark.png' : '../img/theme-white.png';
    };

    return (
        <Styled.Menu active={menuActive}>
            <Styled.MenuList>
                <NavLink to="/">
                    <MenuList text="Главное" />
                </NavLink>
                <NavLink to="/personal">
                    <MenuList text="Мои треки" />
                </NavLink>
                <NavLink to="/login">
                    <MenuList text="Выйти" />
                </NavLink>
                <Styled.ThemeToggleButton
                    src={currentThemeIcon()}
                    onClick={toggleTheme}
                />
            </Styled.MenuList>
        </Styled.Menu>
    );
};
export default Menu;

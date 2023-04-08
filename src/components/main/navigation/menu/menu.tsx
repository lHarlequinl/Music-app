import React, { useContext } from 'react';
import { ShowHideMenu, MenuPropsLink } from '../../../../types';
import * as Styled from './menu.style';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/theme-context/theme-context';
import DarkThemeIcon from '../../../icons/dark-theme';
import LightThemeIcon from '../../../icons/light-theme';

const MenuList = ({ text }: MenuPropsLink) => {
    const { isDarkTheme } = useContext(ThemeContext);

    return <Styled.MenuItem isDarkTheme={isDarkTheme}>{text}</Styled.MenuItem>;
};

const Menu = ({ menuActive }: ShowHideMenu) => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

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
                <Styled.ThemeToggleButtonWrapper
                    isDarkTheme={isDarkTheme}
                    onClick={toggleTheme}
                >
                    {isDarkTheme 
                        ? <DarkThemeIcon /> 
                        : <LightThemeIcon />}
                </Styled.ThemeToggleButtonWrapper>
            </Styled.MenuList>
        </Styled.Menu>
    );
};
export default Menu;

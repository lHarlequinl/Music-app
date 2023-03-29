import { ShowHideMenu, MenuPropsLink } from '../../../../types';
import * as Styled from './menu.style';
import { NavLink } from 'react-router-dom';

const MenuList = ({ text }: MenuPropsLink) => {
    return <Styled.MenuLink>{text}</Styled.MenuLink>;
};

const Menu = ({ menuActive }: ShowHideMenu) => {
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
            </Styled.MenuList>
        </Styled.Menu>
    );
};
export default Menu;

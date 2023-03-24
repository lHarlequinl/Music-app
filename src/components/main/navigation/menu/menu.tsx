import { ShowHideMenu, MenuPropsLink } from '../../../../types';
import * as Styled from './menu.style';

const MenuList = ({ href, text }: MenuPropsLink) => {
    return (
        <Styled.MenuList>
            <Styled.MenuLink href={href}>{text}</Styled.MenuLink>
        </Styled.MenuList>
    );
};

const Menu = ({ menuActive }: ShowHideMenu) => {
    return (
        <Styled.Menu active={menuActive}>
            <Styled.MenuList>
                <MenuList href="#" text="Главное" />
                <MenuList href="#" text="Мой плейлист" />
                <MenuList href="#" text="Войти" />
            </Styled.MenuList>
        </Styled.Menu>
    );
};
export default Menu;

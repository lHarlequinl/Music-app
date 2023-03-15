import React, { ReactElement } from 'react';

interface MenuProps {
    href: string;
    text: string;
}

function MenuList({ href, text }: MenuProps): ReactElement<HTMLDivElement> {
	return (
        <li className="menu__item">
            <a className="menu__link" href={href}>{text}</a>
        </li>
	);
}

function Menu(): ReactElement<HTMLDivElement> {
	return (
		<div className='nav__menu menu'>
			<ul className="menu__list">
				<MenuList href="#" text="Главное"/>
                <MenuList href="#" text="Мой плейлист"/>
                <MenuList href="#" text="Войти"/>
			</ul>
		</div>
	);
}

export default Menu;
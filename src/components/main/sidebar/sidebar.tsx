import React, { useContext } from 'react';
import * as Styled from './sidebar.style';
import SidebarUser from './sidebar-user/sidebar-user';
import SidebarList from './sidebar-list/sidebar-list';
import { ThemeContext } from '../../contexts/theme-context/theme-context';

const Sidebar = () => {
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Styled.Sidebar isDarkTheme={isDarkTheme}>
            <SidebarUser name="Maksim.Aleshin" />
            <Styled.SidebarBlock>
                <SidebarList />
            </Styled.SidebarBlock>
        </Styled.Sidebar>
    );
};

export default Sidebar;

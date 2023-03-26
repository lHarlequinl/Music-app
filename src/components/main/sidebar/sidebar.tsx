import React from 'react';
import * as Styled from './sidebar.style';
import SidebarUser from './sidebar-user/sidebar-user';
import SidebarList from './sidebar-list/sidebar-list';

const Sidebar = () => {
    return (
        <Styled.Sidebar>
            <SidebarUser name="Maksim.Aleshin" />
            <Styled.SidebarBlock>
                <SidebarList />
            </Styled.SidebarBlock>
        </Styled.Sidebar>
    );
};

export default Sidebar;

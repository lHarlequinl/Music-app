import React from 'react';
import * as Styled from './sideebar-user.style';
import { UserInfo } from '../../../../types';

const SidebarUser = ({ name }: UserInfo) => {
    return (
        <Styled.SidebarUser>
            <Styled.SidebarUserName>{name}</Styled.SidebarUserName>
            <Styled.SidebarUserAvatar></Styled.SidebarUserAvatar>
        </Styled.SidebarUser>
    );
};

export default SidebarUser;

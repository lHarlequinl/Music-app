import React, { useContext } from 'react';
import * as Styled from './sideebar-user.style';
import { UserInfo } from '../../../../types';
import { ThemeContext } from '../../../contexts/theme-context/theme-context';

const SidebarUser = ({ name }: UserInfo) => {
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Styled.SidebarUser>
            <Styled.SidebarUserName isDarkTheme={isDarkTheme}>{name}</Styled.SidebarUserName>
            <Styled.SidebarUserAvatar></Styled.SidebarUserAvatar>
        </Styled.SidebarUser>
    );
};

export default SidebarUser;

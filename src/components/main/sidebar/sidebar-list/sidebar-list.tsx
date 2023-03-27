import React, { useEffect, useState } from 'react';
import * as Styled from './sidebar-list.style';
import SidebarListItem from '../sidebar-item/sidebar-item';

const SidebarList = () => {
    const [status, setStatus] = useState<boolean>(true);

    useEffect(() => {
        const loadTimer = setTimeout(() => {
            setStatus(false);
        }, 5000);
        return () => {
            clearTimeout(loadTimer);
        };
    });

    return (
        <Styled.SidebarList>
            <SidebarListItem
                href="#"
                src="/img/playlist01.png"
                alt="day's playlist"
                isLoading={status}
            />
            <SidebarListItem
                href="#"
                src="/img/playlist02.png"
                alt="100th hits"
                isLoading={status}
            />
            <SidebarListItem
                href="#"
                src="/img/playlist03.png"
                alt="Indi charge"
                isLoading={status}
            />
        </Styled.SidebarList>
    );
};

export default SidebarList;

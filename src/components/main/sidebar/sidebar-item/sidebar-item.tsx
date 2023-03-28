import React from 'react';
import { SidebarItem } from '../../../../types';
import * as Styled from './sidebar-item.style';
import * as Skeleton from '../../../UI/skeletons/skeletons.style';

const SidebarListItem = ({ src, alt, isLoading }: SidebarItem) => {
    let sidebarItem;
    
    if (isLoading) {
        sidebarItem = <Skeleton.Skeleton />;
    } else {
        sidebarItem = <Styled.SidebarImg src={src} alt={alt} />;
    }

    return (
        <div>
            <Styled.SidebarItem>{sidebarItem}</Styled.SidebarItem>
        </div>
    );
};

export default SidebarListItem;

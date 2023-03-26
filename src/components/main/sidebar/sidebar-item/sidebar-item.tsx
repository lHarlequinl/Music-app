import React from 'react';
import { SidebarItem } from '../../../../types';
import * as Styled from './sidebar-item.style';
import * as Skeleton from '../../../UI/skeletons/skeletons.style';

const SidebarListItem = ({ href, src, alt, isLoading }: SidebarItem) => {
    return (
        <Styled.SidebarItem>
            <Styled.SidebarLink href={href}>
                {isLoading ? (
                    <Skeleton.Skeleton />
                ) : (
                    <Styled.SidebarImg src={src} alt={alt} />
                )}
            </Styled.SidebarLink>
        </Styled.SidebarItem>
    );
};

export default SidebarListItem;

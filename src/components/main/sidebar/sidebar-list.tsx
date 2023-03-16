import React, { useEffect, useState } from 'react';
import { SidebarItem } from '../../../types';

const SidebarListItem = ({ href, src, alt, isLoading }: SidebarItem) => {
    return (
        <div
            className={
                isLoading === true
                    ? 'sidebar__item sidebar__item_load'
                    : 'sidebar__item'
            }
        >
            <a className="sidebar__link" href={href}>
                <img
                    className={
                        isLoading === true
                            ? 'sidebar__img sidebar__img_load'
                            : 'sidebar__img'
                    }
                    src={src}
                    alt={alt}
                />
            </a>
        </div>
    );
};

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
        <div className="sidebar__list">
            <SidebarListItem
                href="#"
                src="img/playlist01.png"
                alt="day's playlist"
                isLoading={status}
            />
            <SidebarListItem
                href="#"
                src="img/playlist02.png"
                alt="100th hits"
                isLoading={status}
            />
            <SidebarListItem
                href="#"
                src="img/playlist03.png"
                alt="Indi charge"
                isLoading={status}
            />
        </div>
    );
};

export default SidebarList;

export interface TextsElements {
    className: string;
    text: string;
}

export interface Track {
    trackLink: string;
    trackName: string;
    authorLink: string;
    authorName: string;
    isLoading: boolean;
}

export interface Svg {
    href: string;
    ariaLabel: string;
}

export interface SidebarItem {
    src: string;
    alt: string;
    isLoading: boolean;
}

export interface UserInfo {
    name: string;
}

export interface PlaylistItemProps {
    trackTitleLink: string;
    trackTitleText: string;
    trackAuthorLink: string;
    trackAuthorText: string;
    trackAlbumLink: string;
    trackAlbumText: string;
    trackTime: string;
    isLoading: boolean;
}

export interface PlaylistProps {
    id: string | number;
    title: string;
    tracks: PlaylistItemProps[];
}

export interface ShowHideMenu {
    menuActive: boolean;
}

export interface MenuPropsLink {
    text: string;
}

export interface LogoProps {
    src: string;
    alt: string;
}

export interface FilterProps {
    text: string;
    isActive: boolean;
}

export interface FilterItemProps {
    text: string;
    href: string;
}

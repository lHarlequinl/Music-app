import styled from 'styled-components';

export const SidebarItem = styled.div`
    position: relative;
    width: 250px;
    height: 150px;
    background-color: #313131;
    overflow: hidden;

    &:not(:last-child) {
    margin-bottom: 30px;
`;

export const SidebarLink = styled.a`
    width: 100%;
    height: 100%;
`;

export const SidebarImg = styled.img`
    width: 100%;
    height: auto;
`;

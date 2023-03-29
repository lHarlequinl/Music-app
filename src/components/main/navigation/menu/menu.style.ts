import styled from 'styled-components';

export const Menu = styled.div<{ active: boolean }>`
    display: block;
    visibility: visible;
    transform: ${props => props.active ? 'translateX(0)' : 'translate(-200%)'};
    transition: transform 0.5s;
`;

export const MenuItem = styled.li`
    padding: 5px 0;
    margin-bottom: 16px;
`;

export const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding: 18px 0 10px 0;
`;

export const MenuLink = styled.a`
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    :hover {
        color: #d9b6ff;
    }
`;


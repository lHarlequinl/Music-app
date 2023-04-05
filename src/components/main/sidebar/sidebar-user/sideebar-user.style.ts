import styled from 'styled-components';

const COLORS = {
    'title-dark': '#FFFFFF',
    'title-light': '#000000',
};

export const SidebarUser = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 12px 0 15px 0;
`;

export const SidebarUserName = styled.p<{ isDarkTheme: boolean }>`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) =>
        props.isDarkTheme
            ? COLORS['title-dark']
            : COLORS['title-light']};
    margin-right: 16px;
`;

export const SidebarUserAvatar = styled.div`
    width: 43px;
    height: 43px;
    background-color: #313131;
    border-radius: 50%;
`;

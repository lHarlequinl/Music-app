import styled from 'styled-components';

export const SidebarUser = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 12px 0 15px 0;
`;

export const SidebarUserName = styled.p<{ isDarkTheme: boolean }>`
    color: ${(props) => (props.isDarkTheme ? '#FFFFFF' : '#000000')};

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 16px;
`;

export const SidebarUserAvatar = styled.div`
    width: 43px;
    height: 43px;
    background-color: #313131;
    border-radius: 50%;
`;

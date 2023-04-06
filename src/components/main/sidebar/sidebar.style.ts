import styled from 'styled-components';

export const Sidebar = styled.div<{ isDarkTheme: boolean }>`
    max-width: 418px;
    padding: 20px 90px 20px 78px;
    background-color: ${(props) => (props.isDarkTheme ? '#181818' : '#FFFFFF')};
`;

export const SidebarBlock = styled.div`
    height: 100%;
    padding: 240px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

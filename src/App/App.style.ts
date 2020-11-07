import styled from 'styled-components';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export const MainLayout = styled(Layout)`
    height: 100vh;
`;

export const MainHeader = styled(Header)`
    position: fixed;
    z-index: 1000;
    width: 100%;
`;

export const MainContent = styled(Content)`
`;

export const MainFooter = styled(Footer)`
    text-align: center;
`;
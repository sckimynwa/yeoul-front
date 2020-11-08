import styled from 'styled-components';
import { Menu } from 'antd';

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
`;

export const MainMenu = styled(Menu)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const MainLogo = styled.div`
    img {
        height: 60px;
    }
`;
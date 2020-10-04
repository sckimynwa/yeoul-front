import React from 'react';
import mainLogo from '../../_assets/main-logo.jpeg';
import { Menu } from 'antd';
import { MenuWrapper, MainLogo } from './NavigationBar.style';

const NavigationBar: React.FC = () => {

    return (
        <MenuWrapper>
            <MainLogo>
                <img src={mainLogo} />
            </MainLogo>
            <Menu mode="horizontal">
                <Menu.Item key="coding">
                    <a href="https://www.yeoulcoding.tistory.com">Coding.</a>
                </Menu.Item>
                <Menu.Item key="design">
                    <a href="https://www.yeouldesign.tistory.com">Design.</a>
                </Menu.Item>
                <Menu.Item key="writing">
                    <a href="https://www.yeoulwriting.tistory.com">Writing.</a>
                </Menu.Item>
                <Menu.Item key="economics">
                    <a href="https://www.yeouleconomist.tistory.com">Economy.</a>
                </Menu.Item>
            </Menu>
        </MenuWrapper>
    )
}

export default NavigationBar;
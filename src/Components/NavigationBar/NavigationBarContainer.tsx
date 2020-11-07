import React from "react";
import mainLogo from "../../_assets/images/main_logo.jpeg";
import mainLogoDark from "../../_assets/images/main_logo_dark.jpeg";
import { Menu } from "antd";
import { MenuWrapper, MainLogo } from "./NavigationBar.style";
import useTheme from "../../Utils/Hooks/useTheme";

const NavigationBarContainer: React.FC = () => {
    const [theme, setTheme] = useTheme();

    return (
        <MenuWrapper>
            <MainLogo>
                {theme === 'light'
                    ? <img src={mainLogo} alt="mainLogo" />
                    : <img src={mainLogoDark} alt="mainLogo" />
                }
            </MainLogo>
            <Menu mode="horizontal">
                <Menu.Item key="about">
                    About
            </Menu.Item>
                <Menu.Item key="lab">
                    Lab.
            </Menu.Item>
                <Menu.Item key="coding">
                    <a href="https://yeoulcoding.tistory.com">Coding.</a>
                </Menu.Item>
                <Menu.Item key="design">
                    <a href="https://yeouldesigner.tistory.com">Design.</a>
                </Menu.Item>
                {/* <Menu.Item key="writing">
                <a href="https://yeoulwriting.tistory.com">Writing.</a>
            </Menu.Item> */}
                <Menu.Item key="economics">
                    <a href="https://yeouleconomist.tistory.com">Economy.</a>
                </Menu.Item>
            </Menu>
        </MenuWrapper>
    )
}

export default NavigationBarContainer;

import { Menu, Switch } from "antd";
import React from "react";
import mainLogo from "../../_assets/images/main_logo.jpeg";
import mainLogoDark from "../../_assets/images/main_logo_dark.jpeg";
import { MainLogo, MenuWrapper, MainMenu } from "./NavigationBar.style";

interface IProps {
    theme: string;
    setTheme: () => void;
}

const NavigationBar: React.FC<IProps> = ({ theme, setTheme }) => {

    return (
        <MenuWrapper>
            <MainLogo>
                {theme === 'light'
                    ? <img src={mainLogo} alt="mainLogo" />
                    : <img src={mainLogoDark} alt="mainLogo" />
                }
            </MainLogo>
            <MainMenu mode="horizontal">
                <Menu.Item key="about">
                    About
                </Menu.Item>
                <Menu.Item key="lab">
                    Lab
                </Menu.Item>
                <Menu.Item key="coding">
                    <a href="https://yeoulcoding.tistory.com">Coding</a>
                </Menu.Item>
                <Menu.Item key="design">
                    <a href="https://yeouldesigner.tistory.com">Design</a>
                </Menu.Item>
                <Menu.Item key="economics">
                    <a href="https://yeouleconomist.tistory.com">Economy</a>
                </Menu.Item>
                <Switch onChange={setTheme} />
            </MainMenu>
        </MenuWrapper>)
}

export default React.memo(NavigationBar);

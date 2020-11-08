import React from 'react';
import { Helmet } from 'react-helmet';
import NavigationBar from '../Components/NavigationBar';
import useTheme from '../Utils/Hooks/useTheme';
import { MainContent, MainFooter, MainHeader, MainLayout } from './App.style';

const App: React.FC = () => {
    const [theme, setTheme] = useTheme(); // useContext로 변경

    return (<>
        <Helmet>
            {theme === 'light'
                ? <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.6.6/antd.min.css" />
                : <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.6.6/antd.dark.min.css" />
            }
        </Helmet>
        <MainLayout>
            <MainHeader theme={theme}>
                <NavigationBar theme={theme} setTheme={setTheme} />
            </MainHeader>
            <MainContent></MainContent>
            <MainFooter>NormalCoder ©2020 Created by Yeoul.</MainFooter>
        </MainLayout>
    </>)
}

export default App;
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import NavigationBar from '../Components/NavigationBar';
import { ThemeContext } from '../Utils/Contexts/ThemeContext';
import { MainContent, MainFooter, MainHeader, MainLayout } from './App.style';

const App: React.FC = () => {
    const [theme] = useContext(ThemeContext);

    return (<>
        <Helmet>
            {theme === 'light'
                ? <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.6.6/antd.min.css" />
                : <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.6.6/antd.dark.min.css" />
            }
        </Helmet>
        <MainLayout>
            <MainHeader theme={theme}>
                <NavigationBar />
            </MainHeader>
            <MainContent></MainContent>
            <MainFooter>NormalCoder ©2020 Created by Yeoul.</MainFooter>
        </MainLayout>
    </>)
}

export default App;
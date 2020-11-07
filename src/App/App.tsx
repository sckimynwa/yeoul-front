import React from 'react';
import ThemeProvider from '../Utils/Theme/ThemeProvider';
import { MainLayout, MainHeader, MainContent, MainFooter } from './App.style';
import NavigationBar from '../Components/NavigationBar';
import useTheme from '../Utils/Hooks/useTheme';

const App: React.FC = () => {
    const [theme, setTheme] = useTheme();
    return (<>
        <ThemeProvider>
            <MainLayout>
                <MainHeader theme={theme}>
                    <NavigationBar />
                </MainHeader>
                <MainContent></MainContent>
                <MainFooter>NormalCoder ©2020 Created by Yeoul.</MainFooter>
            </MainLayout>
        </ThemeProvider>
    </>)
}

export default App;
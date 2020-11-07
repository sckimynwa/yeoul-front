import React, { useState, useCallback } from 'react';
import AppPresenter from './AppPresenter';
import { ThemeType } from './AppModel';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../Utils/Themes';
import { GlobalStyles } from '../Utils/GlobalStyles';

const AppContainer: React.FC = () => {
    const [theme, setTheme] = useState<ThemeType>('light');
    const toggleTheme = useCallback(() => {
        setTheme((theme: ThemeType) => theme === 'light' ? 'dark' : 'light')
    }, [])

    console.log(theme);

    return (<>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <AppPresenter />
            <button onClick={toggleTheme}>ontoggle</button>
        </ThemeProvider>
    </>)
}

export default AppContainer;
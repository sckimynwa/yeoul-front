import React from 'react';
import ThemeProvider from '../Utils/Theme/ThemeProvider';
import AppPresenter from './AppPresenter';

const AppContainer: React.FC = () => {
    return (<>
        <ThemeProvider>
            <AppPresenter />
        </ThemeProvider>
    </>)
}

export default AppContainer;
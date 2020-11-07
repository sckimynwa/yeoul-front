import React, { lazy, Suspense } from 'react';

const LightTheme = lazy(() => import('./lightTheme'));
const DarkTheme = lazy(() => import('./darkTheme'));

const ThemeProvider = ({ children }: any) => {
    const SELECTED_THEME = localStorage.getItem('THEME') || 'light';
    return (<>
        <Suspense fallback={<></>}>
            {SELECTED_THEME === 'light' && <LightTheme />}
            {SELECTED_THEME === 'dark' && <DarkTheme />}
            {children}
        </Suspense>
    </>)
}

export default ThemeProvider;
import { useState, useEffect } from 'react';

const useTheme = (): [string, () => void, boolean] => {
    const [theme, setTheme] = useState<string>('light');
    const [mountedComponent, setMountedComponent] = useState<boolean>(false)

    useEffect(() => {
        const localTheme = window.localStorage.getItem('THEME');
        if (localTheme) {
            setTheme(localTheme);
        }
        setMountedComponent(true);
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        window.localStorage.setItem('THEME', newTheme);
        setTheme(newTheme);
    };
    return [theme, toggleTheme, mountedComponent];
};

export default useTheme;
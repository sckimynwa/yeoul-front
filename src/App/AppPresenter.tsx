import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import { MainContent, MainLayout, MainHeader, MainFooter } from './App.style';

const AppPresenter: React.FC = () => (
    <MainLayout>
        <MainHeader>
            <NavigationBar />
        </MainHeader>
        <MainContent></MainContent>
        <MainFooter>NormalCoder ©2020 Created by Yeoul.</MainFooter>
    </MainLayout>
)

export default AppPresenter;
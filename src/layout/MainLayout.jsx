import React from 'react';
import Nav from '../component/Nav/Nav';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;
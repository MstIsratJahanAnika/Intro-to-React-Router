// import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import './Root.css';

// eta main a call hoise
const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;


/**
 * 1. use: usersPromise > Suspense > Promise > use(userPromise)
 * 2. [less used so far] > useState + useEffect (() => {}, [])
 * 3. set loader in the route definition; load data before router component is rendered 
 */
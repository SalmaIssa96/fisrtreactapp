import React from 'react';
import  NavBar  from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import  Footer  from '../Footer/Footer';
import './layout.css';


const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="outlet">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

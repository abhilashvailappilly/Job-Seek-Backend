// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarContainer from '../Components/Navbar/NavbarContainer';
import BottomNavbarContainer from '../Components/BottomNavbar/BottomNavbarContainer';

const Layout: React.FC = () => {
  return (
    <>
      <NavbarContainer />
      <div className="pt-20 flex flex-col min-h-screen"> {/* Adjusted padding to avoid overlap */}
        <main className="w-full flex-1">
          <Outlet />
        </main>
      </div>
      <BottomNavbarContainer />
    </>
  );
};

export default Layout;

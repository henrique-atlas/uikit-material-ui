import React from 'react'
import CompanyOverviewContent from '../../pages/CompanyOverviewContent';
import ResponsiveHeader from '../../layout/header/Header';
import SidebarDrawer from '../../navigation/drawer/SidebarDrawer';
import Box from '@mui/material/Box';

export const CompanyOverview = () => {
  const drawerWidth = 240;
  return (
    <section>
      <ResponsiveHeader />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <SidebarDrawer />
        <CompanyOverviewContent />
      </Box>
    </section>
  );
};

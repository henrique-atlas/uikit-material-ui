import React from 'react'
import CompanyOverviewContent from '../../pages/CompanyOverviewContent';
import ResponsiveHeader from '../../layout/header/Header';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SidebarDrawer from '../../navigation/drawer/SidebarDrawer';

const drawerWidth = 240;

export default function CompanyOverview() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ResponsiveHeader />
      <SidebarDrawer />
      
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`, 'margin-top': '66px' } }}
      >
        <CompanyOverviewContent />
      </Box>
    </Box>
  );
}
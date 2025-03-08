import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Menu, MenuItem } from '@mui/material';

interface TopNavBarProps {
  onSignOut: () => void;
  user: string | null;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ onSignOut, user }) => {
  // State to control the menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Open menu handler
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Close menu handler
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle sign out
  const handleSignOut = () => {
    onSignOut();
    handleMenuClose(); // Close the menu after sign out
  };

  return (
    <AppBar position="sticky" color="transparent" sx={{ boxShadow: 'none', borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        {/* Centered Title */}
        <Typography variant="h6" sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          Data Viewer App
        </Typography>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          GSynergy
        </Typography>
        
        {user ? (
          <>
            {/* User Avatar */}
            <Avatar
              alt={user}
              src={`https://avatars.dicebear.com/api/human/${user}.svg`} // Example avatar API, you can replace with your own avatar source
              onClick={handleMenuOpen}
              sx={{ cursor: 'pointer' }}
            />
            
            {/* Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleSignOut}>Log Out</MenuItem>
            </Menu>
          </>
        ) : (
          <Button color="inherit">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;

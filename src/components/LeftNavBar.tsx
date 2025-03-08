import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import gsynergy from '../assets/icons/Gsynergy.svg';
import StoreIcon from '@mui/icons-material/Store';
import CategoryIcon from '@mui/icons-material/Category';
import EventNoteIcon from '@mui/icons-material/EventNote';
import InsertChartIcon from '@mui/icons-material/InsertChart';

const LeftNavBar: React.FC = () => {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <div style={{ padding: '16px', textAlign: 'center' }}>
        <img src={gsynergy} alt="Gsynergy Logo" style={{ width: '100px', height: 'auto' }} />
      </div>
      <List>
        <ListItem component={Link} to="/stores">
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Stores" />
        </ListItem>
        <ListItem component={Link} to="/skus">
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="SKUs" />
        </ListItem>
        <ListItem component={Link} to="/planning">
          <ListItemIcon>
            <EventNoteIcon />
          </ListItemIcon>
          <ListItemText primary="Planning" />
        </ListItem>
        <ListItem component={Link} to="/chart">
          <ListItemIcon>
            <InsertChartIcon />
          </ListItemIcon>
          <ListItemText primary="Chart" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default LeftNavBar;

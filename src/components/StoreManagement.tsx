import React, { useState, useContext } from 'react';
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { StoreContext } from '../contexts/StoreContext';

const StoreManagement: React.FC = () => {
  // Get context values: stores and functions to manipulate them
  const { stores, addStore, removeStore, updateStore } = useContext(StoreContext) || {};

  // Declare state hooks at the top level, unconditionally
  const [newStore, setNewStore] = useState<string>('');
  const [newCity, setNewCity] = useState<string>('');
  const [newState, setNewState] = useState<string>('');

  // Handle adding a new store
  const handleAddStore = () => {
    if (newStore.trim() && newCity.trim() && newState.trim()) {
      addStore?.({ store: newStore, city: newCity, state: newState }); // Add store with city and state
      setNewStore('');
      setNewCity('');
      setNewState('');
    } else {
      alert('Please fill in all fields!');
    }
  };

  // Handle updating a store
  const handleUpdateStore = (index: number) => {
    const newStoreName = prompt('Enter new store name:');
    const newCityName = prompt('Enter new city name:');
    const newStateName = prompt('Enter new state name:');
    
    if (newStoreName && newCityName && newStateName) {
      updateStore?.(index, { store: newStoreName, city: newCityName, state: newStateName });
    } else {
      alert('Please fill in all fields!');
    }
  };

  // Early return if context is not available
  if (!stores) {
    return <div>Error: StoreContext is not available</div>;
  }

  return (
    <div>
      <TextField 
        label="Store Name" 
        value={newStore} 
        onChange={(e) => setNewStore(e.target.value)} 
        variant="outlined" 
        style={{ marginRight: '10px' }} 
      />
      <TextField 
        label="City" 
        value={newCity} 
        onChange={(e) => setNewCity(e.target.value)} 
        variant="outlined" 
        style={{ marginRight: '10px' }} 
      />
      <TextField 
        label="State" 
        value={newState} 
        onChange={(e) => setNewState(e.target.value)} 
        variant="outlined" 
        style={{ marginRight: '10px' }} 
      />
      <Button onClick={handleAddStore}>Add Store</Button>

      {/* Display the stores in a table */}
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.N.</TableCell>
              <TableCell>Store</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stores?.map((store, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{store.store}</TableCell>
                <TableCell>{store.city}</TableCell>
                <TableCell>{store.state}</TableCell>
                <TableCell>
                  <Button onClick={() => removeStore?.(index)}>Delete</Button>
                  <Button onClick={() => handleUpdateStore(index)}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StoreManagement;

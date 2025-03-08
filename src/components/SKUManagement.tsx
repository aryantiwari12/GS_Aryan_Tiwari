import React, { useState } from 'react';
import { TextField, Button, Table, TableBody, TableCell, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

interface SKU {
  sku: string;
  price: string;
  cost: string;
}

const SKUManagement: React.FC = () => {
  // State variables
  const [sku, setSku] = useState<string>(''); // SKU input
  const [price, setPrice] = useState<string>(''); // Price input
  const [cost, setCost] = useState<string>(''); // Cost input
  const [skus, setSkus] = useState<SKU[]>([]); // Array of SKUs
  const [open, setOpen] = useState<boolean>(false); // Modal open/close state
  const [editIndex, setEditIndex] = useState<number | null>(null); // Index of SKU being edited

  // Function to open the modal (for adding or editing)
  const handleClickOpen = (index: number | null = null) => {
    if (index !== null) {
      const skuToEdit = skus[index];
      setSku(skuToEdit.sku);
      setPrice(skuToEdit.price);
      setCost(skuToEdit.cost);
      setEditIndex(index);
    } else {
      setSku('');
      setPrice('');
      setCost('');
      setEditIndex(null);
    }
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };

  // Function to handle adding or updating the SKU
  const handleSaveSKU = () => {
    if (editIndex === null) {
      // Add new SKU
      setSkus([...skus, { sku, price, cost }]);
    } else {
      // Update existing SKU
      const updatedSkus = [...skus];
      updatedSkus[editIndex] = { sku, price, cost };
      setSkus(updatedSkus);
    }
    setSku('');
    setPrice('');
    setCost('');
    handleClose(); // Close the modal after saving
  };

  // Function to handle deleting a SKU
  const handleDeleteSKU = (index: number) => {
    const updatedSkus = skus.filter((_, i) => i !== index);
    setSkus(updatedSkus);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <Button variant="contained" onClick={() => handleClickOpen()} style={{ marginBottom: '20px' }}>
        Add SKU
      </Button>
      
      {/* Table to display SKUs */}
      <Table style={{ width: '100%' }}>
        <TableHead>
          <TableRow>
            <TableCell>SKU</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {skus.map((skuItem, index) => (
            <TableRow key={index}>
              <TableCell>{skuItem.sku}</TableCell>
              <TableCell>${skuItem.price}</TableCell>
              <TableCell>${skuItem.cost}</TableCell>
              <TableCell>
                {/* Edit button to open the modal with SKU data pre-filled */}
                <Button onClick={() => handleClickOpen(index)} variant="outlined" color="primary" style={{ marginRight: '10px' }}>
                  Edit
                </Button>
                {/* Delete button to remove the SKU */}
                <Button onClick={() => handleDeleteSKU(index)} variant="outlined" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* SKU Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editIndex === null ? 'Add SKU' : 'Edit SKU'}</DialogTitle>
        <DialogContent>
          <TextField 
            label="SKU" 
            value={sku} 
            onChange={(e) => setSku(e.target.value)} 
            variant="outlined" 
            fullWidth
            style={{ marginBottom: '10px' }}
          />
          <TextField 
            label="Price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            variant="outlined" 
            type="number" 
            fullWidth
            style={{ marginBottom: '10px' }}
          />
          <TextField 
            label="Cost" 
            value={cost} 
            onChange={(e) => setCost(e.target.value)} 
            variant="outlined" 
            type="number" 
            fullWidth
            style={{ marginBottom: '10px' }}
          />
        </DialogContent>
        <DialogActions>
          {/* Cancel button to close the modal */}
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {/* Save button to either add or update the SKU */}
          <Button onClick={handleSaveSKU} color="primary">
            {editIndex === null ? 'Add SKU' : 'Save Changes'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SKUManagement;

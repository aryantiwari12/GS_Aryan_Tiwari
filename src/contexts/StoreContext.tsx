import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the structure of a store (store name, city, state)
interface Store {
  store: string;
  city: string;
  state: string;
}

// Update StoreContextType to handle the new structure
interface StoreContextType {
  stores: Store[];
  addStore: (store: Store) => void;
  removeStore: (index: number) => void;
  updateStore: (index: number, newStore: Store) => void;
}

// Create the context to be used in other files
export const StoreContext = createContext<StoreContextType | undefined>(undefined);

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  // State to hold the list of stores, each store is an object with store, city, and state
  const [stores, setStores] = useState<Store[]>([]);

  // Function to add a new store (store object with name, city, and state)
  const addStore = (store: Store) => {
    setStores([...stores, store]);
  };

  // Function to remove a store by index
  const removeStore = (index: number) => {
    setStores(stores.filter((_, i) => i !== index));
  };

  // Function to update a store by index with new store data (store name, city, and state)
  const updateStore = (index: number, newStore: Store) => {
    const updatedStores = [...stores];
    updatedStores[index] = newStore;
    setStores(updatedStores);
  };

  return (
    <StoreContext.Provider value={{ stores, addStore, removeStore, updateStore }}>
      {children}
    </StoreContext.Provider>
  );
};

// Custom hook to use the store context in other components
export const useStore = (): StoreContextType => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

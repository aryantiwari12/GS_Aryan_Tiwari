import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import LeftNavBar from './components/LeftNavBar';
import StoreManagement from './components/StoreManagement';
import SKUManagement from './components/SKUManagement';
import PlanningGrid from './components/PlanningGrid';
import ChartPage from './components/ChartPage';
import { StoreProvider } from './contexts/StoreContext';
import { PlanningProvider } from './contexts/PlanningContext';

const App: React.FC = () => {
  const user = 'John Doe'; // For demonstration purposes, replace with actual user logic

  const handleSignOut = () => {
    console.log('Signing out...');
  };

  return (
    <StoreProvider>
      <PlanningProvider>  {/* Wrap with PlanningProvider */}
      <Router>
        <TopNavBar onSignOut={handleSignOut} user={user} />
        <LeftNavBar />
        <div style={{ marginLeft: 240 }}>
          <Routes>
            <Route path="/stores" element={<StoreManagement />} />
            <Route path="/skus" element={<SKUManagement />} />
            <Route path="/planning" element={<PlanningGrid />} />
            <Route path="/chart" element={<ChartPage />} />
          </Routes>
        </div>
      </Router>
        </PlanningProvider>
    </StoreProvider>
  );
};

export default App;

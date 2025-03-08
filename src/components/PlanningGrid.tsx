import React, { useEffect, useState } from 'react';
import { usePlanning } from '../contexts/PlanningContext';

const PlanningGrid: React.FC = () => {
  const { planningData, addPlanningData, updatePlanningData, removePlanningData } = usePlanning();
  const [isDataAdded, setIsDataAdded] = useState(false);  // State to track whether data has been added

  // This will be triggered periodically to update the sales units (for example, every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      planningData.forEach((data, index) => {
        updatePlanningData(index, { ...data, salesUnits: data.salesUnits + 10 });
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [planningData, updatePlanningData]);

  // Function to manually add the initial planning data
  const addInitialPlanningData = () => {
    for (let i = 1; i <= 10; i++) {
      addPlanningData({
        store: `Store ${i}`,
        sku: `SKU00${i}`,
        week: `2025-W01`,
        salesUnits: 100 + i * 10,  // increment sales units by 10 for each store
        price: 50,
        cost: 30,
        salesDollars: 5000 + i * 100,
        gmDollars: 2000 + i * 50,
        gmPercentage: 0.4,
      });
    }
    setIsDataAdded(true);  // Mark that the data has been added
  };

  return (
    <div>
      <h1>Planning Grid</h1>
      {!isDataAdded && (
        <button onClick={addInitialPlanningData}>Add Planning Data</button>
      )}
      <ul>
        {planningData.map((data, index) => (
          <li key={index}>
            {data.store} - {data.sku} - {data.week} - Sales Units: {data.salesUnits}
            <button onClick={() => removePlanningData(index)}>Remove</button>
            <button
              onClick={() =>
                updatePlanningData(index, { ...data, salesUnits: data.salesUnits + 10 })
              }
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanningGrid;

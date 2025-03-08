import React, { createContext, useState, useContext, ReactNode } from 'react';

interface PlanningData {
  store: string;
  sku: string;
  week: string;
  salesUnits: number;
  price: number;
  cost: number;
  salesDollars?: number;
  gmDollars?: number;
  gmPercentage?: number;
}

interface PlanningContextType {
  planningData: PlanningData[];
  addPlanningData: (newData: PlanningData) => void;
  updatePlanningData: (index: number, updatedData: PlanningData) => void;
  removePlanningData: (index: number) => void;
}

const PlanningContext = createContext<PlanningContextType | undefined>(undefined);

export const PlanningProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [planningData, setPlanningData] = useState<PlanningData[]>([]);

  // Add new planning data (Sales Unit, Sales Dollars, etc.)
  const addPlanningData = (newData: PlanningData) => {
    setPlanningData([...planningData, newData]);
  };

  // Update existing planning data
  const updatePlanningData = (index: number, updatedData: PlanningData) => {
    const updatedPlanningData = [...planningData];
    updatedPlanningData[index] = updatedData;
    setPlanningData(updatedPlanningData);
  };

  // Remove planning data by index
  const removePlanningData = (index: number) => {
    const updatedPlanningData = planningData.filter((_, i) => i !== index);
    setPlanningData(updatedPlanningData);
  };

  return (
    <PlanningContext.Provider
      value={{ planningData, addPlanningData, updatePlanningData, removePlanningData }}
    >
      {children}
    </PlanningContext.Provider>
  );
};

export const usePlanning = (): PlanningContextType => {
  const context = useContext(PlanningContext);
  if (!context) {
    throw new Error('usePlanning must be used within a PlanningProvider');
  }
  return context;
};

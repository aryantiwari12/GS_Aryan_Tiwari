// utils/dataProcessing.ts

// Calculate GM Dollars (Gross Margin Dollars)
export const calculateGMDollars = (salesUnits: number, price: number, cost: number): number => {
    const salesDollars = salesUnits * price;
    return salesDollars - (salesUnits * cost);
  };
  
  // Calculate GM Percentage (Gross Margin Percentage)
  export const calculateGMPercentage = (gmDollars: number, salesDollars: number): number => {
    return (gmDollars / salesDollars) * 100;
  };
  
  // Format GM Percentage for display with conditional coloring
  export const formatGMPercentage = (gmPercentage: number): string => {
    let color = '';
    if (gmPercentage >= 40) {
      color = 'green';
    } else if (gmPercentage >= 10) {
      color = 'yellow';
    } else if (gmPercentage > 5) {
      color = 'orange';
    } else {
      color = 'red';
    }
  
    return `${gmPercentage.toFixed(2)}% (Color: ${color})`;
  };
  
  // Process data for the planning grid (e.g., compute GM Dollars and GM Percentage)
  export const processPlanningData = (data: any[]): any[] => {
    return data.map((item) => {
      const gmDollars = calculateGMDollars(item.salesUnits, item.price, item.cost);
      const gmPercentage = calculateGMPercentage(gmDollars, item.salesUnits * item.price);
      const formattedGMPercentage = formatGMPercentage(gmPercentage);
  
      return {
        ...item,
        gmDollars,
        gmPercentage,
        formattedGMPercentage,
      };
    });
  };
  
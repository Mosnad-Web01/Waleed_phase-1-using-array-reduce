const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Calculate totalBatteries using reduce
const totalBatteries = batteryBatches.reduce((total, batch) => {
  return total + batch;
}, 0);

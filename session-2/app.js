const orders = [
  {
    id: 1,
    status: "valid",
    stockAvailable: true,
    amount: 500
  },
  {
    id: 2,
    status: "cancelled",
    stockAvailable: true,
    amount: 300
  },
  {
    id: 3,
    status: "valid",
    stockAvailable: false,
    amount: 700
  },
  {
    id: 4,
    status: "valid",
    stockAvailable: true,
    amount: 1000
  },
  {
    id: 5,
    status: "invalid",
    stockAvailable: true,
    amount: 200
  }
];


function processOrders(orders) {

  let totalRevenue = 0;
  let successfulOrders = 0;
  let processedCount = 0;

  let skippedInRow = 0;
  let stockFailures = 0;

  let stopMessage = "";


  for (let i = 0; i < orders.length; i++) {

    let order = orders[i];

    // 1. Check cancelled or invalid
    if (
      order.status === "cancelled" ||
      order.status === "invalid"
    ) {

      skippedInRow++;
      processedCount++;

      if (skippedInRow === 3) {
        stopMessage = "System stopped due to critical failure";
        break;
      }

      continue;
    }


    // 2. Check stock
    if (order.stockAvailable === false) {

      skippedInRow++;
      stockFailures++;
      processedCount++;

      if (
        skippedInRow === 3 ||
        stockFailures === 3
      ) {
        stopMessage = "System stopped due to critical failure";
        break;
      }

      continue;
    }


    // 3. Process valid order
    totalRevenue += order.amount;
    successfulOrders++;
    processedCount++;

    // Reset consecutive skips
    skippedInRow = 0;
  }


  return {
    totalRevenue: totalRevenue,
    successfulOrders: successfulOrders,
    processedCount: processedCount,
    stopMessage: stopMessage
  };
}


console.log(processOrders(orders));
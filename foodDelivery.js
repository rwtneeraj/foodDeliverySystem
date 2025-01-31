const timeStamping = (startTime) => {
  return ((Date.now() - startTime) / 1000).toFixed(2);
};

const display = (time, msg, order = "") => {
  console.log(time, msg, order);
};

const deliveringOrder = (order, startTime) => {
    display(timeStamping(startTime), "Delivery order....");
  setTimeout(() => {
    const time = timeStamping(startTime);
    const msg = "Order delivered: ";
    order["deliveryDetails"] = "Delivered by John at 7:30 PM";
    display(time, msg, order);
  }, 5000);
};

const packingOrder = (order, startTime) => {
    display(timeStamping(startTime), "Packing order...");

  setTimeout(() => {
    const time = timeStamping(startTime);
    const msg = "order packed :";
    order["packageDetails"] = "Packed in eco-friendly box";
    display(time, msg, order);
    deliveringOrder(order, startTime);
  }, 2000);
};

const preparingFood = (order, startTime) => {
  display(timeStamping(startTime), "Preparing food...");
  setTimeout(() => {
    const time = timeStamping(startTime);
    const msg = "Food is ready : ";
    order["foodDetails"] = "Burger & Fries";
    display(time, msg, order);
    packingOrder(order, startTime);
  }, 3000);
};

const orderRecieved = function (order, startTime) {
  display(timeStamping(startTime), "Order received: ", { orderId: 123 });
  preparingFood(order, startTime);
};

const main = () => {
  const startTime = Date.now();
  const order = { orderId: 123 };
  orderRecieved(order, startTime);
};

main();

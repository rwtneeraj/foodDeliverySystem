const timeStamping = (startTime) => {
  return ((Date.now() - startTime) / 1000).toFixed(2);
};

const task = (begin, final, timeStamp, next) => (startTime, orderDetails) => {
  const taskBegin = begin(startTime, orderDetails);
  setTimeout(() => {
    const nextTask = final(startTime, taskBegin);
    next(startTime, nextTask);
  }, timeStamp);
};

const orderDelivering = (startTime, orderDetails) => {
  const time = timeStamping(startTime);
  console.log(time, "Delivering order...");
  return {
    ...orderDetails,
    deliveryDetails: "Delivered by John at 7:30 PM",
  };
};

const orderDelivered = (startTime, orderDetails) => {
  const time = timeStamping(startTime);
  console.log(time, "Order delivered: ", orderDetails);
  return orderDetails;
};

const orderPacking = (startTime, orderDetails) => {
  const time = timeStamping(startTime);
  console.log(time, "Packing order...");
  return {
    ...orderDetails,
    packageDetails: "Packed in eco-friendly box",
  };
};

const orderPacked = (startTime, orderDetails) => {
  const time = timeStamping(startTime);
  console.log(time, "Order packed: ", orderDetails);
  return orderDetails;
};

const foodPreparing = (startTime, orderDetails) => {
  const time = timeStamping(startTime);
  console.log(time, "Preparing food...");
  return { ...orderDetails, foodDetails: "Burger & Fries" };
};

const foodPrepared = (startTime, orderDetails) => {
  const time = timeStamping(startTime);
  console.log(time, "food prepared...", orderDetails);
  return orderDetails;
};

const orderRecieved = (startTime, orderDetails) => {
  const time = timeStamping(startTime);
  console.log(time, "Order received: ", orderDetails);
  return orderDetails;
};

const deliveryOrder = task(orderDelivering, orderDelivered, 5000, () => {});
const packageOrder = task(orderPacking, orderPacked, 2000, deliveryOrder);
const prepareFood = task(foodPreparing, foodPrepared, 3000, packageOrder);

const orderRequired = task(
  (startTime, orderDetails) => {
    return orderDetails;
  },
  orderRecieved,
  0,
  prepareFood
);

console.log(orderRequired(Date.now(), { orderId: 123 }));

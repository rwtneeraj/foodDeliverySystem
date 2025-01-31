const deliveringOrder = () => {
  console.log(Date.now(), "Delivering order...");
  console.log(Date.now(), "Order delivered: ", {
    orderId: 123,
    foodDetails: "Burger & Fries",
    packageDetails: "Packed in eco-friendly box",
    deliveryDetails: "Delivered by John at 7:30 PM",
  });
};

const packingOrder = () => {
  console.log(Date.now(), "Packing order...");
  console.log(Date.now(), "Order packed: ", {
    orderId: 123,
    foodDetails: "Burger & Fries",
    packageDetails: "Packed in eco-friendly box",
  });
};

const preparingFood = () => {
  console.log(Date.now(), "Preparing food...");
  console.log(Date.now(), "Food is ready:", {
    orderId: 123,
    foodDetails: "Burger & Fries",
  });
};

const orderRecieved = function (order) {
  const orderId = "123";
  setInterval(preparingFood, 3000);
  setInterval(packingOrder, 2000);
  setInterval(deliveringOrder, 5000);
};

orderRecieved();

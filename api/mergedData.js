import { getSingleItem } from './itemsData';
import { deleteItemOrder, getOrderItems } from './orderItems';
import { deleteOrders, getSingleOrder } from './ordersData';

// TO RENDER MY ORDER WITH ALL ORDERITEMS LISTED
const getOrderDetails = async (orderId) => {
  // GET ORDER
  const order = await getSingleOrder(orderId);

  // GET ALL ORDERITEMS RELATED TO ORDER
  const allOrderItems = await getOrderItems(orderId);

  // GET THE ITEMS FOUND IN THE ORDER ITEMS, RETURNS AN ARRAY OF PROMISES
  const getSingleItems = await allOrderItems.map((item) => getSingleItem(item.itemId));

  // // MOST USE PROMISE.ALL() TO RETURN EACH ITEM OBJECT
  const orderItems = await Promise.all(getSingleItems);

  // RETURNS THE SINGLE ORDER AND ALL ITEMS FOUND RELATED TO ORDER
  return { ...order, orderItems };
  // return allOrderItems;
};

const deleteItemOrderRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getOrderItems(firebaseKey).then((orderItemsArray) => {
    const deleteItemPromises = orderItemsArray.map((item) => deleteItemOrder(item.firebaseKey));

    Promise.all(deleteItemPromises).then(() => {
      deleteOrders(firebaseKey).then(resolve);
    });
  }).catch(reject);
});
export { getOrderDetails, getOrderItems, deleteItemOrderRelationship };

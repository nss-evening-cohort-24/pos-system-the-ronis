import { getItems, getSingleItem } from './itemsData';
import { getOrderItems } from './orderItems';
import { getSingleOrder } from './ordersData';

// TO RENDER MY ORDER WITH ALL ORDERITEMS LISTED
const getOrderDetails = async (orderId) => {
  // GET ORDER
  const order = await getSingleOrder(orderId);

  // GET ALL ORDERITEMS RELATED TO ORDER
  const allOrderItems = await getOrderItems(orderId);

  // GET THE ITEMS FOUND IN THE ORDER ITEMS, RETURNS AN ARRAY OF PROMISES
  const getSingleItems = await allOrderItems.map((item) => getSingleItem(item.itemId));

  // MOST USE PROMISE.ALL() TO RETURN EACH ITEM OBJECT
  const orderItems = await Promise.all(getSingleItems);

  // RETURNS THE SINGLE ORDER AND ALL ITEMS FOUND RELATED TO ORDER
  return { ...order, orderItems };
};

// GET ITEMS NOT RELATED TO AN ORDER
const getItemsNotInTheOrder = async (uid, orderId) => {
  // GET ALL THE ITEMS
  const allItems = await getItems(uid);

  // GET ALL THE ORDERITEMS RELATES TO THE ORDER
  const orderItems = await getOrderItems(orderId);

  // GET THE ITEMS FOUND IN THE ORDER ITEMS, RETURNS AN ARRAY OF PROMISES
  const itemPromises = await orderItems.map((item) => getSingleItem(item.itemId));

  // MOST USE PROMISE.ALL() TO RETURN EACH ITEM OBJECT
  const items = await Promise.all(itemPromises);

  // FILTER AND COMPARE THE TWO ARRAYS OF ALL ITEMS AND ALL ORDERITEMSS
  const filterItems = await allItems.filter((obj) => !items.some((e) => e.firebaseKey === obj.firebaseKey));

  // ONLY RETURN THE ITEMS NOT RELATED TO ORDER
  return filterItems;
};

export { getOrderDetails, getItemsNotInTheOrder, getOrderItems };

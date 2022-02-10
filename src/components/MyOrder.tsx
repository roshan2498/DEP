import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyOrders } from "../redux/ducks/order";

export const MyOrder = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: any) => state.order);
  useEffect(() => {
    dispatch(getMyOrders());
  });

  return (
    <div>
      <h1>My Orders</h1>
      {JSON.stringify(orders)}
    </div>
  );
};

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyOrders } from "../redux/ducks/order";

export const MyOrder = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: any) => state.order);
  console.log(orders);

  useEffect(() => {
    dispatch(getMyOrders());
  }, []);

  return (
    <div className="container">
      <p>{JSON.stringify(orders)}</p>
    </div>
  );
};

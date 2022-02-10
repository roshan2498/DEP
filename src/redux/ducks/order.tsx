import axios from "axios";

const GET_ORDERS = "getMyOrder";

export const getMyOrders = () => async (dispatch: any) => {
  const response = await axios.get("http://localhost:3000/orders");
  const data = response.data;
  dispatch({ type: GET_ORDERS, payload: data });
};

const initialState = {
  order: [],
};

const orderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ORDERS:
      return { ...state, myOrders: action.payload };
    default:
      return state;
  }
};

export default orderReducer;

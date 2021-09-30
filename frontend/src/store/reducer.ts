import { Actions } from "./actions";
import { OrderItem, State } from "./types";

const initialState: State = {
  items: [],
};

export function reducer(state: State = initialState, action: Actions) {
  switch (action.type) {
    case "ADD":
      const index = state.items.findIndex((p) => p.id === action.payload.id);

      if (index > -1) {
        return {
          ...state,
          items: state.items.map((p: OrderItem) =>
            p.id === action.payload.id
              ? { ...p, quantity: p.quantity + action.payload.quantity }
              : p
          ),
        };
      }

      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((p) => p.id !== action.payload.id),
      };
    case "UPDATE":
      return {
        ...state,
        items: state.items.map((p: OrderItem) =>
          p.id === action.payload.id ? action.payload : p
        ),
      };
    default:
      return state;
  }
}

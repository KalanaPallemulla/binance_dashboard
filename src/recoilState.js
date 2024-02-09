import axios from "axios";
import { atom, atomFamily, selector } from "recoil";

export const cryptoPriceState = atom({
  key: "cryptoPriceState",
  default: 0,
});

export const quantityHeldState = atom({
  key: "quantityHeldState",
  default: 0,
});

export const todosState = atom({
  key: "todosState",
  default: {
    loading: false,
    data: [],
  },
});

export const chatRoomState = atomFamily({
  key: "chatRoomState",
  default: ({ roomId }) => ({
    roomId,
    messages: [],
    users: [],
  }),
});

export const websocketState = atom({
  key: "websocketState",
  default: {
    connection: null,
    messages: [],
  },
});

export const todosSelector = selector({
  key: "todosSelector",
  get: async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching todos:", error);
      throw error;
    }
  },
});

export const marketValueSelector = selector({
  key: "marketValueSelector",
  get: ({ get }) => {
    const price = get(cryptoPriceState);
    let newPrice = price;
    // const newPrice = get(advancePriceState).increase(price);
    for (let i = 0; i < 1000; i++) {
      newPrice = newPrice + newPrice * 1;
    }
    const quantity = get(quantityHeldState);

    return newPrice * quantity;
  },
});

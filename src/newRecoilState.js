import { atom, selector } from "recoil";

// Atom to store the API data
export const apiDataState = atom({
  key: "apiDataState",
  default: {
    data: [],
    loading: false,
  },
});

export const sampleNumberState = atom({
  key: "sampleNumberState",
  default: 0,
});

// Selector to fetch data from the API
export const fetchDataSelector = selector({
  key: "fetchDataSelector",
  get: async ({ get, set }) => {
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
  set: ({ set }) => {
    set(sampleNumberState, 1000);
  },
});

export const increaseMySampleValueSelector = selector({
  key: "increaseMySampleValueSelector",
  get: () => {
    console.log("hey");
  },
  set: ({ set }) => {
    set(sampleNumberState, 1000);
  },
});

import { atom } from "recoil";

export const socketState = atom({
  key: "socketState",
  default: null,
});

export const messagesState = atom({
  key: "messagesState",
  default: [],
});

import logo from "./logo.svg";
import "./App.css";
import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import {
  cryptoPriceState,
  marketValueSelector,
  quantityHeldState,
  todosSelector,
  todosState,
} from "./recoilState";
import { useEffect } from "react";
import ChatRoom from "./ChatRoom";
import TestComponent from "./TestComponent";
import WebSocketConnection from "./WebSocketConnection";
import ChatDisplay from "./ChatDisplay";
import ChatInput from "./ChatInput";
import BinanceCandlestickChart from "./BinanceCandlestickChart";

function App() {
  // const market = useRecoilState(marketValueSelector);
  // const [cryptoPrice, setCryptoPrice] = useRecoilState(cryptoPriceState);
  // const setQuantityHeld = useSetRecoilState(quantityHeldState);
  // const todosLoadable = useRecoilValueLoadable(todosSelector);

  // const increment = () => {
  //   setCryptoPrice(20);
  //   setQuantityHeld(100);
  // };
  // // const todos = useRecoilValue(fetchDataSelector);
  // const [todos, setTodos] = useRecoilState(todosState);
  // // const decrement = () => {
  // //   setCounter(counter - 1);
  // // };

  // // useEffect(() => {
  // //   (async function getTodos() {
  // //     try {
  // //       await todosSelector();
  // //     } catch (error) {
  // //       console.log(error);
  // //     }
  // //   })();
  // // }, []);
  // console.log(todosLoadable);
  return (
    <div className="App">
      {/* <button onClick={increment}>Decrease</button>
      <h1>Counter: {market}</h1> */}
      {/* <button onClick={increment}>Increase</button> */}
      {/* Todo App */}
      {/* {todosLoadable.state === "loading" && <h2>Loading</h2>}
      {todosLoadable.state === "hasValue" && (
        <div>
          <h1>Todos</h1>
          <ul>
            {todosLoadable.contents.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </div>
      )} */}

      {/* chat app */}

      {/* <ChatRoom roomId="Room1" friendRoomId="Room2" />
      <ChatRoom roomId="Room2" friendRoomId="Room1" /> */}

      {/* <WebSocketComponent /> */}
      {/* <TestComponent /> */}
      {/* <WebSocketConnection />
      <ChatDisplay />
      <ChatInput /> */}
      <BinanceCandlestickChart />
    </div>
  );

  // switch (todosLoadable.state) {
  //   case "hasValue":
  //     const todos = todosLoadable.contents;
  //     return (
  // <div>
  //   <h1>Todos</h1>
  //   <ul>
  //     {todos.map((todo) => (
  //       <li key={todo.id}>{todo.title}</li>
  //     ))}
  //   </ul>
  // </div>
  //     );
  //   case "loading":
  //     return <div>Loading...</div>;
  //   case "hasError":
  //     const error = todosLoadable.contents; // The error thrown in the selector
  //     return <div>Error: {error.message}</div>;
  //   default:
  //     return null;
  // }
}

export default App;

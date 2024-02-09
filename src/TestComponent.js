import React, { useEffect } from "react";
import {
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import {
  apiDataState,
  fetchDataSelector,
  increaseMySampleValueSelector,
  sampleNumberState,
} from "./newRecoilState";

const TestComponent = () => {
  const [todoState, setTodoState] = useRecoilState(apiDataState);
  const [sampleNumber, setSampleNumber] = useRecoilState(sampleNumberState);
  const loadableTodoList = useRecoilValueLoadable(fetchDataSelector);
  const setIncreaseMySampleValue = useSetRecoilState(
    increaseMySampleValueSelector
  ); // Use useSetRecoilState for writable selectors

  useEffect(() => {
    if (loadableTodoList.state === "loading") {
      setTodoState({
        loading: true,
        data: [],
      });
    } else if (loadableTodoList.state === "hasValue") {
      setTodoState({
        loading: false,
        data: loadableTodoList.contents,
      });
    }
  }, [loadableTodoList.state, setTodoState]);

  console.log("yooo", loadableTodoList, todoState);

  return (
    <div>
      {/* Render your data here */}
      <h2>{sampleNumber}</h2>
      <button onClick={() => setIncreaseMySampleValue(1000)}>
        Press me
      </button>{" "}
      {/* Pass a value to the set function */}
      {!todoState.loading && todoState.data.length > 0 ? (
        <ul>
          {todoState.data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default TestComponent;

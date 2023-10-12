import logo from "./logo.svg";
import "./App.css";
import Content from "./content";
import { useState, useCallback, useRef, useMemo, useReducer } from "react";
import Main from "./main";
import ProductsContext from "./context";

function reducer(state, action) {
  switch (action) {
    case "UP":
      return state + 1;
    case "DOW":
      return state - 1;
    default:
      break;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  // let [count, setCount] = useState(0);
  let [products, setProducts] = useState([
    {
      name: "Product 1",
      price: 2000,
    },
  ]);

  function handlerAdd(name, price) {
    let obj = {
      name,
      price,
    };

    setProducts([obj, ...products]);
  }
  return (
    <ProductsContext.Provider
      value={{
        state: products,
        handlerAdd: handlerAdd,
      }}
    >
      <div className="App">
        <h1>{count}</h1>
        <button
          onClick={() => {
            dispatch("UP");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch("DOW");
          }}
        >
          -
        </button>{" "}
        <br /> <br />
        <Main />
      </div>
    </ProductsContext.Provider>
  );
}

export default App;

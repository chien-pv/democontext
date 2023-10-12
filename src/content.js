import { useRef, useMemo, useContext } from "react";
import Item from "./item";
import ProductsContext from "./context";

function Content() {
  let productsContext = useContext(ProductsContext);
  let { state, handlerAdd } = productsContext;
  let ipname = useRef();
  let ipprice = useRef();

  let totals = useMemo(() => {
    console.log("useMemo");
    return state.reduce((total, item) => total + parseInt(item.price), 0);
  }, [state]);

  let datas = state.map((product) => {
    return <Item {...product} />;
  });
  return (
    <div className="Content">
      Name: <input ref={ipname} /> <br />
      Price: <input ref={ipprice} /> <br />
      <button
        onClick={() => {
          let name = ipname.current.value;
          let price = ipprice.current.value;
          handlerAdd(name, price);
        }}
      >
        {" "}
        Add New Product
      </button>
      <h3>{totals}</h3>
      <ol>{datas}</ol>
    </div>
  );
}

export default Content;

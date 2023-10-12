function Item({ name, price }) {
  return (
    <li>
      Name: {name} <br />
      Price: {price}
      <button>Delete</button>
    </li>
  );
}

export default Item;

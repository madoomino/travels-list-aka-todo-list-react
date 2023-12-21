import { useContext } from "react";
import TravelsContext from "../../context/context";

const Item = ({ name, quantity, done }) => {
  const { setItems } = useContext(TravelsContext);

  const handleDelete = () => {
    setItems((prevItems) => prevItems.filter((item) => item.name !== name));
  };
  const handleCheck = () => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.name === name) {
          return { ...item, done: !item.done };
        }
        return item;
      })
    );
  };
  return (
    <li>
      <input type="checkbox" name={name} id="" onClick={handleCheck} />
      <span style={done ? { textDecoration: "line-through" } : {}}>
        {quantity} {name}
      </span>
      <button onClick={handleDelete} style={{ color: "red" }}>
        X
      </button>
    </li>
  );
};

export default Item;

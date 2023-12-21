import { useContext } from "react";
import Item from "./Item";
import TravelsContext from "../../context/context";

const ListItems = () => {
  const { items, setItems } = useContext(TravelsContext);

  return (
    <div className="list">
      <ul>
        {items.map(({ name, quantity, done }, idx) => (
          <Item
            name={name}
            quantity={quantity}
            done={done}
            key={idx}
            setItems={setItems}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListItems;

import { useContext } from "react";
import Item from "./Item";
import TravelsContext from "../../context/context";

const ListItems = () => {
  const { items, setItems } = useContext(TravelsContext);

  const handleChange = (e) => {
    const filteringMethod = e.target.value;

    // checking for error
    if (
      !filteringMethod ||
      (filteringMethod !== "description" && filteringMethod !== "packingStatus")
    ) {
      return;
    }

    // 1. description (alphabetically)
    if (filteringMethod === "description") {
      return setItems((prevState) =>
        [...prevState].sort((a, b) => a.name.localeCompare(b.name))
      );
    }

    // 2. packingStatus (done property)
    if (filteringMethod === "packingStatus") {
      const doneArr = [];
      const notDoneArr = [];
      items.forEach((item) => {
        if (item.done) {
          doneArr.push(item);
        } else {
          notDoneArr.push(item);
        }
      });
      return setItems([...doneArr, ...notDoneArr]);
    }
  };

  const handleClick = () => {
    if (items.length === 0) {
      return;
    }
    return setItems([]);
  };
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
      <div className="bottom-opts">
        <select name="" id="" onChange={handleChange}>
          <option value="description">description</option>
          <option value="packingStatus">packingStatus</option>
        </select>
        <button onClick={handleClick}>clear list</button>
      </div>
    </div>
  );
};

export default ListItems;

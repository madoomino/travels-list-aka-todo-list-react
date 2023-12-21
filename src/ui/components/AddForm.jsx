import { useContext } from "react";
import TravelsContext from "../../context/context";

const AddForm = () => {
  const { items, setItems } = useContext(TravelsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let travelName = e.target[1].value;
    let travelQuantity = e.target[0].value;
    if (items.every((item) => item.name !== travelName)) {
      setItems((prevItems) => [
        ...prevItems,
        { name: travelName, quantity: travelQuantity, done: false },
      ]);
    }
    e.target.reset();
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want?</h3>
      <select name="" id="">
        {Array.from({ length: 10 }).map((_, idx) => {
          return (
            <option value={idx + 1} key={idx + 1}>
              {idx + 1}
            </option>
          );
        })}
      </select>
      <input type="text" name="" id="" placeholder="Enter what you want" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddForm;

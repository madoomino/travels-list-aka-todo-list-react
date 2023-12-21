const Item = ({ name, done, setItems }) => {
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
      <span>{name}</span>
      <input type="checkbox" name={name} id="" onClick={handleCheck} />
      <button onClick={handleDelete} style={{ color: "red" }}>
        x
      </button>
    </li>
  );
};

export default Item;

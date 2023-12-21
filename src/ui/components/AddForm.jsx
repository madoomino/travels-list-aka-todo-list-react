const AddForm = ({ items, setItems }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const val = e.target[1].value;
    if (items.every((item) => item.name !== val)) {
      setItems((prevItems) => [...prevItems, { name: val, done: false }]);
    }
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

import Item from "./Item";

const ListItems = ({ items, setItems }) => {
  return (
    <div className="list">
      <ul>
        {items.map(({ name, done }, idx) => (
          <Item name={name} done={done} key={idx} setItems={setItems} />
        ))}
      </ul>
    </div>
  );
};

export default ListItems;

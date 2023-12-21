const Stats = ({ items }) => {
  const itemsCount = items.length;
  const doneCount = items.filter((item) => item.done).length;
  const percent = Math.round((doneCount / itemsCount) * 100);
  const percentIsBiggerThanZero = !isNaN(percent) && percent > 0;
  if (percentIsBiggerThanZero) {
    return (
      <div className="stats">
        {percentIsBiggerThanZero &&
          `you have ${itemsCount} item${
            itemsCount > 1 ? "s" : ""
          } in your list, ${doneCount} of them ${
            doneCount > 1 ? "are" : "is"
          } done. (${percent}%)`}
      </div>
    );
  } else {
    return (
      <div className="stats">
        {`You have ${itemsCount ? itemsCount : "no"} item${
          itemsCount > 1 ? "s" : ""
        } in your list, none of them done.`}
      </div>
    );
  }
};

export default Stats;

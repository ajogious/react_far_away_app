function Stats({ items }) {
  const numberOfItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = numberOfItems
    ? Math.round((packedItems / numberOfItems) * 100)
    : 0;

  return (
    <footer className="stats">
      {!items.length ? (
        <p>Start adding some items to your packing list 🚀</p>
      ) : packedPercentage < 100 ? (
        <em>
          💼 You have {numberOfItems} items on your list, and you already packed{" "}
          {packedItems} ({packedPercentage}%)
        </em>
      ) : (
        <em>You got everything! Ready to go ✈️</em>
      )}
    </footer>
  );
}

export default Stats;

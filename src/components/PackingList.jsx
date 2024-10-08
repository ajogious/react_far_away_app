import { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  let [sortBy, setSortBy] = useState("input");

  const sortedItems =
    sortBy === "input"
      ? items
      : sortBy === "description"
      ? [...items].sort((a, b) => a.description.localeCompare(b.description))
      : sortBy === "packed"
      ? [...items].sort((a, b) => +a.packed - +b.packed)
      : items;
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            itemObj={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
export default PackingList;

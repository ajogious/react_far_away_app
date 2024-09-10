import { useState, useRef } from "react";
import ConfirmationModal from "./components/ConfirmationModal";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef(null);

  function handleAddItems(newItems) {
    setItems((prevItems) => [...prevItems, newItems]);
  }

  function handleDeleteItem(id) {
    setItems((currentItem) => currentItem.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((currentItem) =>
      currentItem.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    setIsModalOpen(true);
  }

  function handleConfirmClearList() {
    setItems([]);
    setIsModalOpen(false);
    inputRef.current.focus();
  }

  function handleCancelClearList() {
    setIsModalOpen(false);
    inputRef.current.focus();
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} inputRef={inputRef} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
      <ConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleConfirmClearList}
        onCancel={handleCancelClearList}
      />
    </div>
  );
}

export default App;

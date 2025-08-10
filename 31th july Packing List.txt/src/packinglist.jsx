import React, { useState } from 'react';

function PackingList() {
  const [items, setItems] = useState([
    { id: 1, name: 'Toothbrush', isPacked: false },
  ]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    const trimmed = newItem.trim();
    if (trimmed === '') return;

    const newEntry = {
      id: Date.now(),
      name: trimmed,
      isPacked: false,
    };
    setItems([...items, newEntry]);
    setNewItem('');
  };


  const togglePacked = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  };


  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Add item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          style={{ flexGrow: 1, padding: '10px', fontSize: '16px' }}
        />
        <button onClick={handleAddItem} style={buttonStyle}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px',
              background: '#f1f3f5',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            <span
              onClick={() => togglePacked(item.id)}
              style={{
                cursor: 'pointer',
                textDecoration: item.isPacked ? 'line-through' : 'none',
                color: item.isPacked ? 'gray' : 'black',
              }}
            >
              {item.isPacked ? '✔️' : '☐'} {item.name}
            </span>
            <button onClick={() => deleteItem(item.id)} style={deleteButton}>
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#0a74da',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const deleteButton = {
  background: 'none',
  border: 'none',
  fontSize: '18px',
  cursor: 'pointer',
};

export default PackingList;
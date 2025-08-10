import React from 'react';

const StaticTodoList = () => {
  const todos = [
    {
      id: 1,
      title: 'Finish report',
      description: 'Monthly financial report',
      category: 'Work',
      completed: true,
    },
    {
      id: 2,
      title: 'Team meeting',
      description: 'Sync with dev team',
      category: 'Work',
      completed: false,
    },
    {
      id: 3,
      title: 'Buy groceries',
      description: 'Milk, eggs, and bread',
      category: 'Personal',
      completed: false,
    },
    {
      id: 4,
      title: 'Gym',
      description: 'Leg day workout',
      category: 'Personal',
      completed: true,
    },
    {
      id: 5,
      title: 'Read book',
      description: "Finish 'Atomic Habits'",
      category: 'Hobby',
      completed: false,
    },
    {
      id: 6,
      title: 'Painting session',
      description: 'Try new watercolor technique',
      category: 'Hobby',
      completed: true,
    },
  ];

  // Extract unique categories
  const categories = [...new Set(todos.map(todo => todo.category))];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Grouped To-Do List</h2>
      {categories.map(category => (
        <div key={category} style={{ marginBottom: '20px' }}>
          <h3>{category}</h3>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            {todos
              .filter(todo => todo.category === category)
              .map(todo => (
                <li key={todo.id} style={{ marginBottom: '10px' }}>
                  <span style={{ marginRight: '8px' }}>
                    {todo.completed ? '✅' : '❌'}
                  </span>
                  <strong>{todo.title}</strong>
                  <div style={{ fontStyle: 'italic', fontSize: '0.9em', marginLeft: '26px' }}>
                    {todo.description}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StaticTodoList;
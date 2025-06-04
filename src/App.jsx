// src/App.jsx
import React from 'react';
import UserCard from './components/UserCard';

const usuarios = [
  {
    id: 1,
    name: "Carlos Navia",
    email: "carlos@example.com",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Laura Gómez",
    email: "laura@example.com",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Julián Pérez",
    email: "julian@example.com",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '24px', padding: '20px', flexWrap: 'wrap' }}>
      {usuarios.map(({ id, name, email, avatar }) => (
        <UserCard
          key={id}
          name={name}
          email={email}
          avatar={avatar}
        />
      ))}
    </div>
  );
};

export default App;

import { useState, useEffect } from 'react';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Task 4 ( To-Do List )</h1>
      <Home />
    </div>
  );
}

export default App;

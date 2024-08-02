import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import MenuScreen from 'screens/menu/MenuScreen';
import CategoryScreen from 'screens/category/CategoryScreen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MenuScreen />} />
      <Route path="/category/:id" element={<CategoryScreen />} />
    </Routes>
  );
}

export default App;

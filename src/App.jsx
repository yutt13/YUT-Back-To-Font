import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import User from './Pages/User'
import Post from './Pages/Post'
import './index.css'; // เชื่อมต่อไฟล์ CSS ที่มี Tailwind


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
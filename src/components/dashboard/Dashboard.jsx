import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "../topbar/TopBar";
import Login from "../login/login";
import Blog from "../blog/Blog";
import Home from "../home/Home";

export default function Dashboard() {
  return (
    <BrowserRouter>
    {/* <TopBar/> */}
    <Routes>
      <Route path="/" element={<TopBar />}>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="home" element={<Home />} />
        <Route path="account" element={<Home />} />
        <Route path="profile" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        {/* <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

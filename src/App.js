import TopBar from "./components/topbar/TopBar";
import Login from "./components/login/login";
import Blog from "./components/blog/Blog";
import Home from "./components/home/Home";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile } from "./components/profile/Profile";
import { BlogCreate } from "./components/blog/blog-create/BlogCreate";
function App() {
  return (
    // <div className="App">
    // <TopBar/>
    // <Login/>
    // </div>
    <BrowserRouter>
      {/* <TopBar/> */}
      <Routes>
        <Route path="/" element={<TopBar />}>
          <Route path="/login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blogCreate" element={<BlogCreate />} />

          {/* <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import TopBar from "./components/topbar/TopBar";
import Login from "./components/login/login";
import Blog from "./components/blog/Blog";
import Home from "./components/home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile } from "./components/profile/Profile";
import { BlogCreate } from "./components/blog/blog-create/BlogCreate";
import { Register } from "./components/register/Register";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BlogDetails } from "./components/blog/[id]";

function App() {
  const user = localStorage.getItem("isLoggedIn");

  const theme = createTheme({
    typography: {
      fontFamily: ["Lato", "sans-serif"].join(","),
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {user && <TopBar />}
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Login />} />
          <Route path="login" element={user ? <Home /> : <Login />} />
          <Route path="register" element={user ? <Home /> : <Register />} />
          <Route path="home" element={user ? <Home /> : <Login />} />
          <Route path="profile" element={user ? <Profile /> : <Login />} />
          <Route path="blog" element={user ? <Blog /> : <Login />} />
          <Route
            path="blog/blogCreate"
            element={user ? <BlogCreate /> : <Login />}
          />
          <Route path="blog/:id" element={user ? <BlogDetails /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

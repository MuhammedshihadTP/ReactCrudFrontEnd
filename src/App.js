import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Register from "./components/register";
import Update from "./components/update";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/adduser",
      element: <Register />,
    },
    {
      path:"/update/:id",
      element:<Update/>
    },
  ]);
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Home</p>,
    errorElement: <p>Now Found^^</p>,
  },
  {
    path: "/videos",
    element: <p>videos</p>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

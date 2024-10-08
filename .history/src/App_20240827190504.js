import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/videos",
    element: <Videos />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

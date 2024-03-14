import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <Home />,
    },
    {
      path: "/add",
      element: <AddTask />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

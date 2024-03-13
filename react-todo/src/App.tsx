import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route index element={<Home />} />)
  );
  return <RouterProvider router={router} />;
}

export default App;

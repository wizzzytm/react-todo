import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import { UserContext } from "./contexts/UserContext";

import { defaultUser } from "./constants/defaultUser";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { User } from "./types/User";

function App() {
  const [user, setUser] = useLocalStorage<User>(defaultUser, "user");
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
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;

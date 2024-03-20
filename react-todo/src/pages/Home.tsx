import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Tasks from "../components/Tasks";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#202224",
      light: "#2e3336",
    },
    secondary: {
      main: "#7b1fa2",
    },
  },
});
export default function Home() {
  const n = useNavigate();
  return (
    <>
      <div className="flex justify-center">
        <div className="tasksWrapper w-10/12 h-auto flex flex-wrap box-border p-1 m-4 bg-secondary-color rounded-lg  lg:tasksWrapper-lg">
          <Tasks />
        </div>
      </div>

      <div className="button fixed bottom-0 right-0 box-border p-4 w-fit">
        <Fab size="large" color="secondary" onClick={() => n("add")}>
          <AddIcon />
        </Fab>
      </div>
    </>
  );
}

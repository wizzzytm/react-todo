import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function Home() {
  const currentDate = new Date();
  const defaultDueDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const [dueDate, setDueDate] = useState(defaultDueDate);

  return (
    <div className="container">
      <div className="tasksWrapper"></div>
      <Fab>
        <AddIcon />
      </Fab>
    </div>
  );
}

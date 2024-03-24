import { Fab, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

import { Task } from "../types/User";
import { UserContext } from "../contexts/UserContext";

export default function AddTask() {
  const { user, setUser } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const handleAddTask = () => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      done: false,
      title: title,
      description: description,
      dueDate: dueDate,
    };
    setUser((prevUser) => ({
      ...prevUser,
      tasks: [...prevUser.tasks, newTask],
    }));
    n("/");
  };

  function handleChange(e: any) {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    }
    console.log(
      `title: ${title}, description: ${description}, dueDate: ${dueDate}`
    );
  }

  const n = useNavigate();
  return (
    <React.StrictMode>
      <div className="button box-border p-4 w-fit">
        <Fab size="large" color="secondary" onClick={() => n("/")}>
          <ArrowBackIcon />
        </Fab>
      </div>
      <div className="flex justify-center">
        <div className="text-center w-10/12 h-auto flex flex-col flex-wrap justify-center items-center">
          <span className="text-white text-6xl mb-8 add-title">
            Add a new task
          </span>
          <form className="flex flex-col flex-wrap justify-center items-center p-8 border-contrast-color border-2 ">
            <TextField
              label="Title"
              className="input"
              color="secondary"
              focused
              sx={{ input: { color: "#9c27b0" } }}
              name="title"
              value={title}
              onChange={handleChange}
            />
            <TextField
              label="Description"
              className="input"
              multiline
              color="secondary"
              sx={{ ".MuiInputBase-input": { color: "#9c27b0" } }}
              focused
              name="description"
              value={description}
              onChange={handleChange}
            />
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              adapterLocale="en-gb"
            >
              <MobileDatePicker
                sx={{ input: { color: "#9c27b0" } }}
                className="date-picker input"
                name="due_date"
                value={dueDate}
                defaultValue={new Date()}
                onChange={(date) => setDueDate(date)}
              />
            </LocalizationProvider>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={handleAddTask}
              startIcon={<AddIcon />}
            >
              Add
            </Button>
          </form>
        </div>
      </div>
    </React.StrictMode>
  );
}

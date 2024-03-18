import { Fab, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { theme } from "./Home";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const { setItem, getItem } = useLocalStorage("value");

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
        <div className=" w-10/12 h-auto flex flex-col flex-wrap justify-center items-center">
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
              color="secondary"
              sx={{ input: { color: "#9c27b0" } }}
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
              onClick={() => {
                console.log(getItem()); //TODO finish the useLocalStorage https://www.youtube.com/watch?v=1uiNxQIpcLU
              }}
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

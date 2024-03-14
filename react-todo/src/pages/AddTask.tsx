import { Fab, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { theme } from "./Home";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
export default function AddTask() {
  const currentDate = new Date();
  const defaultDueDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    due_date: defaultDueDate,
  });

  function handleChange(event: any) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(formData);
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
          <form className="" onSubmit={handleSubmit}>
            <TextField
              label="Title"
              color="secondary"
              focused
              value={formData.title}
              onChange={handleChange}
            />
            <TextField
              label="Description"
              color="secondary"
              focused
              value={formData.description}
              onChange={handleChange}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                sx={{
                  "& .MuiOutlinedInput-root > fieldset": {
                    borderColor: "##7656d6", //TODO: add border color
                  },
                }}
              />
            </LocalizationProvider>
          </form>
        </div>
      </div>
    </React.StrictMode>
  );
}

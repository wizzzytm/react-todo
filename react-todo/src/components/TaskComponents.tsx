import Checkbox from "@mui/material/Checkbox";
import { UUID } from "../types/User";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import theme from "../pages/Home";
import dayjs from "dayjs"; // Import dayjs library

import { red } from "@mui/material/colors";

const newTheme = theme;
export function TaskCompletionButton({
  done,
  id,
  onChange,
}: {
  done: boolean;
  id: UUID;
  onChange: (id: UUID) => void;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id);
  };
  return (
    <>
      <Checkbox
        className="checkboxDone"
        checked={done}
        onChange={handleChange}
        sx={{
          color: "black",
          "&.Mui-checked": {
            color: "black",
          },
        }}
      />
    </>
  );
}
export function TaskDeleteButton({
  id,
  onClick,
}: {
  id: UUID;
  onClick: (id: UUID) => void;
}) {
  return (
    <>
      <IconButton
        onClick={() => onClick(id)}
        className="deleteBtn"
        aria-label="delete"
      >
        <DeleteIcon sx={{ color: "white" }} />
      </IconButton>
    </>
  );
}
export function TaskTitle({ title }: { title: string }) {
  return (
    <>
      <div className="text-2xl">{title}</div>
    </>
  );
}
export function TaskDescription({ description }: { description?: string }) {
  return (
    <>
      <div className="break-all mb-4">{description}</div>
    </>
  );
}
export function TaskDueDate({ dueDate }: { dueDate?: string }) {
  if (!dueDate) {
    return <></>;
  }

  const parsedDueDate = dayjs(dueDate);

  if (!parsedDueDate.isValid()) {
    return <></>;
  }

  const day = parsedDueDate.date();
  const month = parsedDueDate.month();
  const year = parsedDueDate.year();
  return (
    <>
      <div className="text-center lg:text-start">
        <span className=" p-2 rounded-full border-2 self-center">
          Deadline: {day}.{month}.{year}
        </span>
      </div>
    </>
  );
}

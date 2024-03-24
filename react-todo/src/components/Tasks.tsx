import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import {
  TaskTitle,
  TaskDescription,
  TaskDueDate,
  TaskDeleteButton,
  TaskCompletionButton,
} from "./TaskComponents";
import TaskContainer from "./TaskContainer";
import { UUID } from "../types/User";
import NoTasks from "./NoTasks";

export default function Tasks() {
  const { user, setUser } = useContext(UserContext);
  const handleMarkAsDone = (id: UUID) => {
    if (id) {
      const updatedTasks = user.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      });
      setUser({ ...user, tasks: updatedTasks });
    }
  };
  const handleDelete = (id: UUID) => {
    if (id) {
      const updatedTasks = user.tasks.filter((task) => task.id !== id);
      setUser({ ...user, tasks: updatedTasks });
    }
  };
  return (
    <>
      {user.tasks.length !== 0 ? (
        user.tasks.map((task) => (
          // <div
          //   className={task.done ? styles.taskDone : styles.taskUndone}
          //   key={task.id}
          // >
          //   <TaskContainer task={task} key={task.id} />
          //   components
          // </div>
          <TaskContainer done={task.done} key={task.id}>
            <div
              style={{ gridArea: "left" }}
              className="flex flex-col flex-wrap"
            >
              <TaskTitle title={task.title} />
              <TaskDescription description={task.description} />
              <TaskDueDate dueDate={task.dueDate} />
            </div>
            <div className="taskControls">
              <TaskCompletionButton
                onChange={() => {
                  handleMarkAsDone(task.id);
                }}
                done={task.done}
                id={task.id}
              />
              <TaskDeleteButton
                onClick={() => {
                  handleDelete(task.id);
                }}
                id={task.id}
              />
            </div>
          </TaskContainer>
        ))
      ) : (
        <NoTasks />
      )}
    </>
  );
}

import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import styles from "../modules/taskstyle.module.css";

import {
  TaskCompletionButton,
  TaskTitle,
  TaskDescription,
  TaskDueDate,
  TaskDeleteButton,
} from "./TaskComponents";

export default function Tasks() {
  const { user, setUser } = useContext(UserContext);
  const handleDone = (id: string) => {
    const updatedTasks = user.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });

    setUser((prevUser) => ({
      ...prevUser,
      tasks: updatedTasks,
    }));
  };
  return (
    <>
      {user.tasks.length !== 0 ? (
        user.tasks.map((task) => (
          <div
            className={task.done ? styles.taskDone : styles.taskUndone}
            key={task.id}
          >
            <TaskCompletionButton done={task.done} />
            <TaskTitle title={task.title} />
            <TaskDescription description={task.description} />
            <TaskDueDate dueDate={task.dueDate} />
            <TaskDeleteButton id={task.id} /> //FIXME: fix task components
          </div>
        ))
      ) : (
        <div className="noTasks">
          <h2>You have no tasks!</h2>
        </div>
      )}
    </>
  );
}

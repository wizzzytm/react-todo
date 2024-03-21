import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import {
  TaskTitle,
  TaskDescription,
  TaskDueDate,
  TaskDeleteButton,
} from "./TaskComponents";
import TaskContainer from "./TaskContainer";

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
          // <div
          //   className={task.done ? styles.taskDone : styles.taskUndone}
          //   key={task.id}
          // >
          //   <TaskContainer task={task} key={task.id} />
          //   components
          // </div>
          <TaskContainer done={task.done} key={task.id}>
            {/* <TaskCompletionButton done={task.done} id={task.id} key={task.id} /> */}
            <TaskDeleteButton id={task.id} key={task.id} />
            <div
              style={{ gridArea: "middle" }}
              className="flex flex-col flex-wrap"
            >
              <TaskTitle title={task.title} key={task.id} />
              <TaskDescription description={task.description} key={task.id} />
              <TaskDueDate dueDate={task.dueDate} key={task.id} />
            </div>
          </TaskContainer>
        ))
      ) : (
        <div className="noTasks">
          <h2>You have no tasks!</h2>
        </div>
      )}
    </>
  );
}

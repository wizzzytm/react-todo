import styles from "../styles/taskstyles.module.css";

export default function TaskContainer({
  done,
  children,
}: {
  done: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={done ? styles.taskDone : styles.taskUndone}>{children}</div>
  );
}

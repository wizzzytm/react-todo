export type UUID = ReturnType<typeof crypto.randomUUID>;
export interface User {
  name: string | null;
  createdAt: Date;
  tasks: Task[];
}

export interface Task {
  id: UUID;
  done: boolean;
  title: string;
  description?: string;
  dueDate?: Date;
}

export interface UserProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

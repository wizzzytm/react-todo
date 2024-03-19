export type UUID = ReturnType<typeof crypto.randomUUID>;
export interface Task {
  id: UUID;
  done: boolean;
  title: string;
  description?: string;
  dueDate?: Date | null;
}

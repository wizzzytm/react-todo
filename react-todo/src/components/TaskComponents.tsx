import { UUID } from "../types/User";

// export function TaskCompletionButton({
//   done,
//   id,
// }: {
//   done: boolean;
//   id: UUID;
// }) {
//   return <></>;
// }
export function TaskDeleteButton({ id }: { id: UUID }) {
  return <></>;
}
export function TaskTitle({ title }: { title: string }) {
  return (
    <>
      <div>{title}</div>
    </>
  );
}
export function TaskDescription({ description }: { description?: string }) {
  return (
    <>
      <div>{description}</div>
    </>
  );
}
export function TaskDueDate({ dueDate }: { dueDate?: Date }) {
  return <></>;
}

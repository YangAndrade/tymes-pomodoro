import { useContext} from "react";
import { TaskContext } from "./initialTaskContext.tsx";

export function useTaskContext() {
    return useContext(TaskContext);
}
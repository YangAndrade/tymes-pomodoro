import { useEffect, useReducer } from "react";
import { initialTaskState } from "./initalTaskState.ts";
import { TaskContext } from "./initialTaskContext.tsx";
import { taskReducer } from "./taskReducer.ts";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  useEffect(() => {
    console.log("TaskContext state changed:", state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

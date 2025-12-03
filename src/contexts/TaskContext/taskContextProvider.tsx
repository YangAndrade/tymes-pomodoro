import { useEffect, useReducer } from "react";
import { initialTaskState } from "./initalTaskState.ts";
import { TaskContext } from "./initialTaskContext.tsx";
import { taskReducer } from "./taskReducer.ts";
import { TimeWorkerManager } from "../../workers/TimeWorkerManager.ts";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimeWorkerManager.getInstance();

  worker.onmessage((e) => {
    console.log(e.data);
  });

  useEffect(() => {
    if (!state.activeTask) {
      worker.terminate();
      console.log("Worker teriminado por falta de tarefa ativa");
    }
    worker.postMessage(state);
  }, [state, worker]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

import type { TaskStateModel } from "../../models/TaskStateModel.ts";
import { initialTaskState } from "./initalTaskState.ts";
import { createContext } from "react";
import type { TaskActionModel } from "./taskActions.ts";

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

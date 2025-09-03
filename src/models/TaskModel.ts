import type {TaskStateModel} from "./TaskStateModel.ts";

export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    startDate: number;
    completeDate: number | null;
    interruptDate: number | null;
    type : keyof TaskStateModel['config'];
}
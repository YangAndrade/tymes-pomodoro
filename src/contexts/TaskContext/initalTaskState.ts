import type {TaskStateModel} from "../../models/TaskStateModel.ts";

export const initialTaskState: TaskStateModel = {
    tasks: [],
    secondsRemaining : 0,
    formattedSecondsRemaining : "00:00",
    activeTask : null,
    currentCycle : 0,
    config : {
        workTime : 25,
        shortBrakeTime: 5,
        longBrakeTime : 15,
    }
}
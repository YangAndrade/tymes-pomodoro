import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { PlayIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel.ts";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext.ts";
import { getNextCycle } from "../../utils/getNextCycle.ts";
import { getNextCycleType } from "../../utils/getNextCycleType.ts";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes.ts";

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameRef = useRef<HTMLInputElement>(null);
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskNameRef.current === null) return;
    const taskName = taskNameRef.current.value.trim();
    if (!taskName) {
      alert("Please enter a valid task name");
      return;
    }
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          id="input"
          type="text"
          label="Task"
          placeholder="Digite algo"
          ref={taskNameRef}
        />
      </div>
      <div className="formRow">O intervlao é de 25 minutos.</div>
      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles></Cycles>
        </div>
      )}

      <div className="formRow">
        <DefaultButton icon={<HugeiconsIcon icon={PlayIcon} />} />
      </div>
    </form>
  );
}

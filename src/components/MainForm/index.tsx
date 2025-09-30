import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { PlayIcon, StopIcon } from "@hugeicons/core-free-icons";
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

  function handleInterruptTask() {
    setState((prevState) => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: prevState.tasks.map((task) => {
          if (task.id === prevState.activeTask?.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
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
          disabled={!!state.activeTask}
        />
      </div>
      <div className="formRow">O intervlao é de 25 minutos.</div>
      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles></Cycles>
        </div>
      )}

      <div className="formRow">
        {!state.activeTask ? (
          <DefaultButton
            type="submit"
            title="Iniciar nova tarefa"
            aria-label="Iniciar nova tarefa"
            icon={<HugeiconsIcon icon={PlayIcon} />}
            key={"startTaskButton"}
          />
        ) : (
          <DefaultButton
            title="Interromper tarefa em andamento"
            aria-label="Interromper tarefa em andamento"
            type="button"
            color="red"
            onClick={handleInterruptTask}
            icon={<HugeiconsIcon icon={StopIcon} />}
            key={"stopTaskButton"}
          />
        )}
      </div>
    </form>
  );
}

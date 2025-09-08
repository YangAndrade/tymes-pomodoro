import {DefaultInput} from "../DefaultInput";
import {Cycles} from "../Cycles";
import {DefaultButton} from "../DefaultButton";
import {PlayIcon} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {useRef} from "react";
import type {TaskModel} from "../../models/TaskModel.ts";
import {useTaskContext} from "../../contexts/TaskContext/useTaskContext.ts";


export function MainForm(){
    const {setState} = useTaskContext();
    const taskNameRef = useRef<HTMLInputElement>(null)

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault()
        if (taskNameRef.current === null) return
        const taskName = taskNameRef.current.value.trim();
        if(!taskName)
        {
            alert("Please enter a valid task name")
            return
        }
        const newTask : TaskModel={
            id : Date.now().toString(),
            name : taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration : 1,
            type : 'workTime'
        };

        const secondsRemaining = newTask.duration * 60;

        setState(prevState => {
            return{
                ...prevState,
                activeTask : newTask,
                currentCycle: 1,
                secondsRemaining,
                formattedSecondsRemaining : '00:00',
                tasks : [...prevState.tasks, newTask]
            }
        })
    }
    return (
        <form onSubmit={handleCreateNewTask} className='form' action="">
            <div className='formRow'>
                <DefaultInput
                    id="input"
                    type='text'
                    label='Task'
                    placeholder='Digite algo'
                    ref={taskNameRef}
                />
            </div>
            <div className='formRow'>Lorem ipsum dolor sit.</div>
            <div className='formRow'>
                <Cycles></Cycles>
            </div>
            <div className='formRow'>
                <DefaultButton icon={<HugeiconsIcon icon={PlayIcon} />}/>
            </div>
        </form>
    )
}
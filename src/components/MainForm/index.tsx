import {DefaultInput} from "../DefaultInput";
import {Cycles} from "../Cycles";
import {DefaultButton} from "../DefaultButton";
import {PlayIcon} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {useTaskContext} from "../../contexts/TaskContext/useTaskContext.ts";


export function MainForm(){
    const {setState} = useTaskContext()

    function handleButton()
    {
        setState(prevState => {
            return{
                ...prevState,
                formattedSecondsRemaining: "21:00"
            }
        })
    }

    return (
        <form className='form' action="">
            <button type = "button" onClick={handleButton}> cick </button>
            <div className='formRow'>
                <DefaultInput
                    id="input"
                    type='text'
                    label='Task'
                    placeholder='Digite algo'
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
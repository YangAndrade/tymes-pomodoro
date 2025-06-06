import {Container} from "./components/Container";
import {Logo} from "./components/Logo";
import {Menu} from "./components/Menu";
import {CountDown} from "./components/CountDown";
import {DefaultInput} from "./components/DefaultInput";
import {Cycles} from "./components/Cycles";
import {DefaultButton} from "./components/DefaultButton";
import {PlayCircleIcon} from "lucide-react";

import './styles/theme.css';
import './styles/global.css';


export function App() {
    return (
        <>
            <Container>
                <Logo></Logo>
            </Container>
            <Container>
                <Menu></Menu>
            </Container>
            <Container>
                <CountDown/>
            </Container>
            <Container>
                <form className='form' action="">
                    <div className='formRow'>
                        <DefaultInput
                            id = "input"
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
                        <DefaultButton icon={<PlayCircleIcon/>}/>
                    </div>
                </form>
            </Container>
        </>
    )
};


import {Heading} from "./components/Heading.tsx";
import { Timer } from 'lucide-react';
import './styles/theme.css';
import './styles/global.css';

export function App() {
    return (
        <>
            <Heading>
                History
            <button>
               <Timer />
            </button>
            </Heading>
            <p>loremsdasdasda</p>
        </>
    )
};


import {HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon} from "lucide-react";
import {Link} from "../Link";
import styles from './styles.module.css';
import {useEffect, useState} from "react";

type typeThemes =  "light" | "dark";
export function Menu()
{
    const [theme, setTheme] = useState<typeThemes>(()=> {
        return (localStorage.getItem("theme") as typeThemes) || "dark" ;
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme])

    const nextThemeIcon = {
        dark: <SunIcon/>,
        light: <MoonIcon/>
    }

    function handleThemeChange(e:React.MouseEvent<HTMLAnchorElement,MouseEvent>)
    {
        e.preventDefault();
        setTheme(
            prevTheme => {
                return prevTheme === 'dark' ? 'light' : 'dark';
            });
    }



    return <div className={styles.menu}>
        <Link href={'#'} ariaLabel={'Ir para Home'} title={'Ir para Home'}>
            <HouseIcon/>
        </Link>
        <Link href={'#'} ariaLabel={'Ir para historico'} title={'Ir para Histórico'}>
            <HistoryIcon/>
        </Link>
        <Link href={'#'} ariaLabel={'Configurações'} title={'Configurações'}>
            <SettingsIcon/>
        </Link>
        <Link href={'#'} ariaLabel={'Mudar Tema'} title={'Mudar Tema'} onClick={handleThemeChange}>
            {nextThemeIcon[theme]}
        </Link>
    </div>
}
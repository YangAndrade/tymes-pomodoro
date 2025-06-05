import {HistoryIcon, HouseIcon, SettingsIcon, SunIcon} from "lucide-react";
import {Link} from "../Link";
import styles from './styles.module.css';

export function Menu()
{
    return <div className={styles.menu}>
        <Link><HouseIcon/></Link>
        <Link><HistoryIcon/></Link>
        <Link><SettingsIcon/></Link>
        <Link><SunIcon/></Link>
    </div>
}
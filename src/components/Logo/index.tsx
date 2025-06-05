import styles from './styles.module.css';
import {Timer} from "lucide-react";

export function Logo()
{
    return <div className={styles.logo}>
        <a href='#' className={styles.logoLink}>
            <Timer/>
            <span>Tymes</span>
        </a>
    </div>
}
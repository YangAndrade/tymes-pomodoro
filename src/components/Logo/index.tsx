import styles from './styles.module.css';
import {BlackHoleIcon} from "@hugeicons/core-free-icons";
import {HugeiconsIcon} from "@hugeicons/react";


export function Logo()
{
    return <div className={styles.logo}>
        <a href='#' className={styles.logoLink}>
            <HugeiconsIcon icon={BlackHoleIcon} />
            <span>Tymes</span>
        </a>
    </div>
}
import styles from './styles.module.css';

export function Footer()
{
    return (
        <footer className={styles.footer}>
            <a href="">Entenda como funciona a técnica</a>
            <a href="">Tymes Pomodoro &copy; {new Date().getFullYear()}</a>
        </footer>
    )
}
import styles from './styles.module.css';
type LinkProps = {
    children: React.ReactNode;
}
export function Link({children}:LinkProps)
{
    return <a href='#' className={styles.link}>{children}</a>
}
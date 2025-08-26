import styles from './styles.module.css';

type LinkProps = {
    children: React.ReactNode;
    ariaLabel?: string;
    href: string;
    title: string;
    [key: string]: unknown;
}

export function Link({children, ariaLabel, href, title, ...rest}: LinkProps) {
    return (<a title={title}
               href={href}
               className={styles.link}
               aria-label={ariaLabel}
               {...rest}>
        {children}
    </a>);
}
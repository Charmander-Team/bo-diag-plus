import styles from '../../styles/Navigation.module.scss'

const Navigation = ()=>{
    return (
        <div className={styles.navigation}>
            <ul>
                <li>
                    <a href='#'>
                        <span className={styles.item}>logo</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <span className={styles.item}>Accueil</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <span className={styles.item}>Patients</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <span className={styles.item}>Praticiens</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <span className={styles.item}>Articles</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <span className={styles.item}>Diagnostiques</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
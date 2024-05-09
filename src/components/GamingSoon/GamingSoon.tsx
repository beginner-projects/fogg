import styles from './Gaming.module.css';

const YourComponent: React.FC = () => {
    return (
        <div className={styles.mainBodyLoading}>
            <div className={styles.loaderBody}>
                <span>
                    <span>
                        <span>
                            <span>
                                <span></span>
                            </span>
                        </span>
                    </span>
                </span>
                <div className={styles.base}>
                    <span></span>
                    <div className={styles.face}></div>
                </div>
                <div className={styles.longfazers}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <h1 className={styles.comingSoonTag}>Coming Soon</h1>
        </div>
    );
};

export default YourComponent;

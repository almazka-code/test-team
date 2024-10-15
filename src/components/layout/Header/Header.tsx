import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
       <div className={styles.content}>
       <h2 className={styles.title}>Наша команда</h2>
       <p className={styles.text}>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </p>
       </div>
      </div>
    </header>
  )
}

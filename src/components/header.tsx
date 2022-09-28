import styles from '../App.module.css'

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h1>農業に関心を持たせるためのプログラム</h1>
    </header>
  );
};

export default Header;
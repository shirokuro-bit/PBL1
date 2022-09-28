import type {Component} from "solid-js";

import styles from '../App.module.css'

const Header: Component = () => {
  return (
    <header class={styles.header}>
      <h1>農業に関心を持たせるためのプログラム</h1>
    </header>
  );
};

export default Header;
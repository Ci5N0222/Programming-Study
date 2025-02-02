import styles from "./page.module.css";

export default function Home() {
  
  let name = "Noh";

  return (
    <main>
      <h1 className={ styles.title }>Programming Log</h1>
      <p className={ styles.title_sub }>by dev { name }</p>
    </main>
  );
}

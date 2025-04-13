import styles from "../styles/layout.module.css";
export default function PageLayout({ title, children }) {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
}

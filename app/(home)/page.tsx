import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "Bestseller Lists",
};

async function getBestSellerLists() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const bestSellers = await getBestSellerLists();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.categoryGrid}>
        {bestSellers.results.map((category, index) => (
          <div key={index} className={styles.categoryCard}>
            <h2 className={styles.categoryName}>{category.display_name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

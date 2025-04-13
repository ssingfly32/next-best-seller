import Category from "../../components/Category";
import styles from "../../styles/home.module.css";
import { CATEGORY_API_URL } from "../constants";

export const metadata = {
  title: "Bestseller Explorer",
};

async function getBestSellerCategories() {
  const response = await fetch(CATEGORY_API_URL);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const categories = await getBestSellerCategories();

  return (
    <>
      <div className={styles.categoryGrid}>
        {categories.results.map((category) => (
          <Category
            key={category.list_name_encoded}
            displayName={category.display_name}
            listNameEncoded={category.list_name_encoded}
          />
        ))}
      </div>
    </>
  );
}

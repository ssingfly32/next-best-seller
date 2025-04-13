import styles from "../../../../styles/list.module.css";
import { BOOKS_BY_CATEGORY_API_URL } from "../../../constants";

async function getBestSellerList(id) {
  const response = await fetch(`${BOOKS_BY_CATEGORY_API_URL}?name=${id}`);
  const json = await response.json();
  return json;
}

export default async function BookListPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const bookList = await getBestSellerList(id);

  return (
    <div className={styles.container}>
      <div className={styles.listTitleContainer}>
        <h1
          className={styles.listTitle}
        >{`${bookList?.results.list_name} Books`}</h1>
      </div>

      <div className={styles.bookGrid}>
        {bookList?.results.books.map((book) => (
          <div key={book.title} className={styles.bookCard}>
            <div className={styles.imageContainer}>
              <img
                src={book.book_image}
                alt={book.title}
                className={styles.bookImage}
              />
            </div>
            <h2 className={styles.bookTitle}>{book.title}</h2>
            <p className={styles.bookAuthor}>by {book.author}</p>
            <p className={styles.bookRank}>#{book.rank}</p>
            <a
              href={book.amazon_product_url}
              className={styles.detailsButton}
              target={"_blank"}
            >
              Buy now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

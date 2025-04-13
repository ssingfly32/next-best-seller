"use client";

import Link from "next/link";
import styles from "../styles/category.module.css";
import { useRouter } from "next/navigation";

export default function Category({ displayName, listNameEncoded }) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/list/${listNameEncoded}`);
    ``;
  };
  return (
    <div onClick={onClick} className={styles.categoryCard}>
      <h2 className={styles.categoryName}>
        <Link prefetch href={`/list/${listNameEncoded}`}>
          {displayName}
        </Link>
      </h2>
    </div>
  );
}

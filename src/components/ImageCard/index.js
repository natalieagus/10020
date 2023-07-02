import React from "react";
import styles from "./styles.module.css";

export default function ImageCard({ path, widthPercentage }) {
  return (
    <section>
      <img
        src={path}
        className={styles.center_image}
        style={{ width: `${widthPercentage}` }}
      />
    </section>
  );
}

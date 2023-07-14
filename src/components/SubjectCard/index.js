import React from "react";
import styles from "./styles.module.css";
import cn from "clsx";
import { useThemeConfig } from "@docusaurus/theme-common";

function useSubjectCardConfig() {
  return useThemeConfig().subjectCard;
}

export default function SubjectCard({ title, description }) {
  const content = useSubjectCardConfig();
  return (
    <div className={styles.subjectCard} id="subjectCard">
      <h2 className={styles.subjectCard__title}>{title || content.title}</h2>
      <p className={styles.subjectCard__description}>
        {description || content.description}
      </p>
      <div className={styles.subjectCard__buttons}>
        <a className={cn(styles.button)} href={content.buttons.primary.href}>
          {content.buttons.primary.label}
        </a>
        <a
          className={cn(styles.button, styles.button__outline)}
          href={content.buttons.secondary.href}
        >
          {content.buttons.secondary.label}
        </a>
      </div>
    </div>
  );
}

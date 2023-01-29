import Details from "@theme/MDXComponents/Details";
import React from "react";
import styles from "./styles.module.css";

export default function CollapsibleAnswer(props) {
  const { children } = props;

  return (
    <Details className={styles.collapsible}>
      <summary mdxType="summary">Show Answer</summary>

      {children}
    </Details>
  );
}

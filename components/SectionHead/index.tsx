import { PropsWithChildren } from "react";
import styles from "./index.module.scss";

const SectionHead = ({
  children: title,
  tagline,
  description,
}: PropsWithChildren<{ description?: string; tagline?: string }>) => {
  return (
    <div className={styles.sectionHead}>
      <div className={styles.tagline}>{tagline}</div>
      <div>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      {description && (
        <p className={styles.sectionDescription}>{description}</p>
      )}
    </div>
  );
};

export default SectionHead;

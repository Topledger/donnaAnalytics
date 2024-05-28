import React from "react";
import cx from "classnames";
import styles from "./index.module.scss";
import DownOutlined from "@ant-design/icons/DownOutlined";
import Image from "next/image";

type AccordionProps = {
  title: string;
  description: string;
  image: string;
  isOpen: boolean;
  onToggle: () => void;
};

const Accordion: React.FC<AccordionProps> = ({
  title,
  description,
  image,
  isOpen,
  onToggle,
}) => {
  return (
    <div className={cx(styles.accordionItem, { [styles.selected]: isOpen })}>
      <div className={styles.accordionHeader} onClick={onToggle}>
        <h3 className={styles.accordionTitle}>{title}</h3>
        <span className={styles.accordionIcon}>
          {isOpen ? "" : <DownOutlined width="1rem" height="1rem" />}
        </span>
      </div>
      {isOpen && (
        <div className={styles.accordionContent}>
          <div className={styles.description}>
            <span>{description}</span>
          </div>
          <div className={styles.image}>
            <Image src={image} alt={title} width={240} height={208} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;

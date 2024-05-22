import Image from "next/image";
import Section from "@/components/Section";

import { getAction } from "@/components/ArticleCard/ArticleFooter";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { getId } from "@/helpers/idHelper";
import SectionHead from "../SectionHead";

import styles from "./index.module.scss";

const Result = ({
  image,
  title,
  description,
  action,
  bottomContent: { text } = { text: "" },
}: any) => {
  return (
    <div className={styles.cultureContent}>
      <div>
        <Image src={image} alt={title} width={53} height={70.5} />
      </div>
      <h3 className={styles.cultureTitle}>{title}</h3>
      <div className={styles.cultureDescription}>
        <span>{description}</span>
      </div>
      <div className={styles.cultureAction}>{getAction(action)}</div>
    </div>
  );
};

const EnhanceBusinessResultsSection = ({
  results = [],
}: {
  results: any[];
}) => {
  return (
    <Section
      className={styles.cultureSection}
      id={getId("Enhance business results")}
    >
      <SectionHead
        description="Leverage Advanced Strategies for Superior Performance"
        tagline="USE CASES"
      >
        Enhance business results
      </SectionHead>
      <div className={styles.sectionBody}>
        <div className={styles.resultsContainer}>
          {results?.map((result: any) => (
            <Result {...result} key={result.id} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default EnhanceBusinessResultsSection;

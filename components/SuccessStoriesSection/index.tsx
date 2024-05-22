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
      <div className={styles.image}>
        <Image src={image} alt={title} width={279} height={240} />
      </div>
      <h3 className={styles.cultureTitle}>{title}</h3>

      <div className={styles.cultureAction}>{getAction(action)}</div>
    </div>
  );
};

const SuccessStoriesSection = ({ stories = [] }: { stories: any[] }) => {
  return (
    <Section
      className={styles.successStoriesSection}
      id={getId("Transforming Data into Success Stories")}
    >
      <SectionHead
        description="See How Our Expertise Translates to Real-World Impact"
        tagline="Case studies"
      >
        Transforming Data into Success Stories
      </SectionHead>
      <div className={styles.sectionBody}>
        <div className={styles.resultsContainer}>
          {stories?.map((result: any) => (
            <Result {...result} key={result.id} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SuccessStoriesSection;

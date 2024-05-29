import Image from "next/image";
import Section from "@/components/Section";

import { getId } from "@/helpers/idHelper";
import SectionHead from "../SectionHead";

import styles from "./index.module.scss";
import { basepath } from "@/helpers/constants";

const Goal = ({ title, description }: any) => {
  return (
    <div className={styles.cultureContent}>
      <div className={styles.bullet}>
        <Image
          src={`${basepath}/assets/images/bullet.svg`}
          width={21}
          height={20}
          alt="bullet"
        />
      </div>
      <div>
        <h3 className={styles.cultureTitle}>{title}</h3>
        <div className={styles.cultureDescription}>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

const AdvanceGoalsSection = ({ goals = [] }: { goals: any[] }) => {
  return (
    <Section
      className={styles.advanceGoalsSection}
      id={getId("Advancing your goals")}
    >
      <SectionHead
        description="Optimizing Performance for Strategic Outcomes"
        tagline="GAIN THE EDGE"
      >
        Advancing your goals
      </SectionHead>
      <div className={styles.sectionBody}>
        <div className={styles.image}>
          <Image
            src={`${basepath}/assets/images/advancing-goals.svg`}
            width={334}
            height={296}
            alt="Advancing your goals"
          />
        </div>
        <div className={styles.sectionHead}>
          {goals.map((goal: any, index: number) => (
            <Goal key={goal?.id} {...goal} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AdvanceGoalsSection;
